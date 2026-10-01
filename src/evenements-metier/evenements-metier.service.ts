import { Injectable, Logger } from "@nestjs/common";
import { EventEmitter } from "node:events";

// §7.5 / §8.5 — architecture de notification commune aux modules NEWS et EI :
// le déclenchement d'une alerte est un événement métier, publié par le module
// qui l'a détecté et traité par un gestionnaire de notification séparé
// (NotificationsListener). Le calcul du score et la qualification ne
// dépendent jamais de l'envoi des notifications : la publication est
// asynchrone et une erreur d'envoi n'a aucun effet sur l'action métier.

export interface AlerteNewsEvenement {
  alerteId: string;
  organisationId: string;
  serviceId: string | null;
  serviceNom: string | null;
  libellePatient: string;
  niveauRisque: string;
}

export interface EiGraviteEleveeEvenement {
  evenementId: string;
  organisationId: string;
  gravite: string;
}

export interface EvenementsMetier {
  "news.alerte": AlerteNewsEvenement;
  "ei.gravite-elevee": EiGraviteEleveeEvenement;
}

type Gestionnaire<T> = (charge: T) => Promise<void>;

@Injectable()
export class EvenementsMetierService {
  private readonly logger = new Logger(EvenementsMetierService.name);
  private readonly emetteur = new EventEmitter();
  // Traitements en cours : permet d'attendre leur fin (arrêt propre, tests).
  private readonly enCours = new Set<Promise<void>>();

  abonner<K extends keyof EvenementsMetier>(nom: K, gestionnaire: Gestionnaire<EvenementsMetier[K]>): void {
    this.emetteur.on(nom, (charge: EvenementsMetier[K]) => {
      const traitement = gestionnaire(charge)
        .catch((erreur) => this.logger.error(`Échec du traitement de l'événement ${nom} : ${erreur}`))
        .finally(() => this.enCours.delete(traitement));
      this.enCours.add(traitement);
    });
  }

  // Publication non bloquante : rend la main immédiatement à l'appelant.
  publier<K extends keyof EvenementsMetier>(nom: K, charge: EvenementsMetier[K]): void {
    setImmediate(() => this.emetteur.emit(nom, charge));
  }

  async attendreTraitements(): Promise<void> {
    await new Promise((r) => setImmediate(r));
    await Promise.all([...this.enCours]);
  }
}
