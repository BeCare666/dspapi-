var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { PrismaModule } from './prisma/prisma.module.js';
import { NotificationsModule } from './notifications/notifications.module.js';
import { NotificationsInternesModule } from './notifications-internes/notifications-internes.module.js';
import { AuthModule } from './auth/auth.module.js';
import { OrganisationsModule } from './organisations/organisations.module.js';
import { UtilisateursModule } from './utilisateurs/utilisateurs.module.js';
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
let AppModule = class AppModule {
};
AppModule = __decorate([
    Module({
        imports: [
            PrismaModule,
            NotificationsModule,
            NotificationsInternesModule,
            AuthModule,
            OrganisationsModule,
            UtilisateursModule,
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
        ],
        controllers: [AppController],
        providers: [AppService],
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map