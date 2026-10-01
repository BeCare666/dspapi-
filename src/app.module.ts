import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { PrismaModule } from './prisma/prisma.module.js';
import { NotificationsModule } from './notifications/notifications.module.js';
import { NotificationsInternesModule } from './notifications-internes/notifications-internes.module.js';
import { EvenementsMetierModule } from './evenements-metier/evenements-metier.module.js';
import { AuthModule } from './auth/auth.module.js';
import { OrganisationsModule } from './organisations/organisations.module.js';
import { UtilisateursModule } from './utilisateurs/utilisateurs.module.js';
import { EquipeModule } from './equipe/equipe.module.js';
import { AuditModule } from './audit/audit.module.js';
import { IntegrationsModule } from './integrations/integrations.module.js';
import { AlertesPlateformeModule } from './alertes-plateforme/alertes-plateforme.module.js';
import { AnalyticsModule } from './analytics/analytics.module.js';
import { ParametresModule } from './parametres/parametres.module.js';
import { SecuriteModule } from './securite/securite.module.js';
import { GrillesModule } from './grilles/grilles.module.js';
import { SessionsEvaluationModule } from './sessions-evaluation/sessions-evaluation.module.js';
import { AbonnementsModule } from './abonnements/abonnements.module.js';
import { PatientsModule } from './patients/patients.module.js';
import { AlertesModule } from './alertes/alertes.module.js';
import { CloudinaryModule } from './cloudinary/cloudinary.module.js';
import { TypesEiModule } from './types-ei/types-ei.module.js';
import { EvenementsIndesirablesModule } from './evenements-indesirables/evenements-indesirables.module.js';
import { PaiementsModule } from './paiements/paiements.module.js';
import { FormationsModule } from './formations/formations.module.js';
import { ReservationsModule } from './reservations/reservations.module.js';
import { FacturesModule } from './factures/factures.module.js';
import { RappelsModule } from './rappels/rappels.module.js';

@Module({
  imports: [
    PrismaModule,
    NotificationsModule,
    NotificationsInternesModule,
    EvenementsMetierModule,
    AuthModule,
    OrganisationsModule,
    UtilisateursModule,
    EquipeModule,
    AuditModule,
    IntegrationsModule,
    AlertesPlateformeModule,
    AnalyticsModule,
    ParametresModule,
    SecuriteModule,
    GrillesModule,
    SessionsEvaluationModule,
    AbonnementsModule,
    PatientsModule,
    AlertesModule,
    CloudinaryModule,
    TypesEiModule,
    EvenementsIndesirablesModule,
    PaiementsModule,
    FormationsModule,
    ReservationsModule,
    FacturesModule,
    RappelsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
