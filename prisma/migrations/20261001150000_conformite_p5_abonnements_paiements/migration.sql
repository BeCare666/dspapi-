-- Conformité CDC — Phase 5 (abonnements, paiements, facturation : §5, §10.4, §10.5, §11.1, §12.1).

-- DropForeignKey
ALTER TABLE `factures` DROP FOREIGN KEY `factures_reservation_id_fkey`;

-- AlterTable
ALTER TABLE `abonnements_module` ADD COLUMN `expire_le` DATETIME(3) NULL,
    ADD COLUMN `statut_avant_suspension` ENUM('ESSAI', 'ACTIF', 'EXPIRE', 'SUSPENDU') NULL,
    MODIFY `statut` ENUM('ESSAI', 'ACTIF', 'EXPIRE', 'SUSPENDU') NOT NULL DEFAULT 'ESSAI';

-- AlterTable
ALTER TABLE `factures` ADD COLUMN `devise` VARCHAR(191) NOT NULL DEFAULT 'XOF',
    ADD COLUMN `paiement_abonnement_id` VARCHAR(191) NULL,
    MODIFY `reservation_id` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `paiements_abonnement` (
    `id` VARCHAR(191) NOT NULL,
    `organisation_id` VARCHAR(191) NOT NULL,
    `module` ENUM('NEWS', 'EI') NOT NULL,
    `montant` INTEGER NOT NULL,
    `duree_jours` INTEGER NOT NULL,
    `devise` VARCHAR(191) NOT NULL DEFAULT 'XOF',
    `statut` ENUM('EN_ATTENTE', 'PAYE') NOT NULL DEFAULT 'EN_ATTENTE',
    `kkiapay_transaction_id` VARCHAR(191) NULL,
    `demande_par_id` VARCHAR(191) NOT NULL,
    `paye_le` DATETIME(3) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `paiements_abonnement_kkiapay_transaction_id_key`(`kkiapay_transaction_id`),
    INDEX `paiements_abonnement_organisation_id_idx`(`organisation_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `factures_paiement_abonnement_id_key` ON `factures`(`paiement_abonnement_id`);

-- AddForeignKey
ALTER TABLE `paiements_abonnement` ADD CONSTRAINT `paiements_abonnement_organisation_id_fkey` FOREIGN KEY (`organisation_id`) REFERENCES `organisations`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `paiements_abonnement` ADD CONSTRAINT `paiements_abonnement_demande_par_id_fkey` FOREIGN KEY (`demande_par_id`) REFERENCES `utilisateurs`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `factures` ADD CONSTRAINT `factures_reservation_id_fkey` FOREIGN KEY (`reservation_id`) REFERENCES `reservations`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `factures` ADD CONSTRAINT `factures_paiement_abonnement_id_fkey` FOREIGN KEY (`paiement_abonnement_id`) REFERENCES `paiements_abonnement`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;


-- §10.5 — paramètres tarifaires gérés depuis /admin/parametres. Aucun prix
-- n'est fourni par le CDC : 0 = « non encore paramétré » (souscription
-- indisponible tant que l'administrateur n'a pas saisi le tarif et la durée).
-- Comportement de fin d'essai : lecture seule par défaut (formulation du §5).
INSERT IGNORE INTO `parametres_plateforme` (`id`, `cle`, `valeur`, `type`, `description`, `valeur_defaut`, `created_at`, `updated_at`) VALUES
  ('param-prix-abonnement-news', 'prix_abonnement_news', '0', 'entier', 'Prix (XOF) de l''abonnement au module Score NEWS pour la durée d''abonnement. 0 = non proposé.', '0', NOW(3), NOW(3)),
  ('param-prix-abonnement-ei', 'prix_abonnement_ei', '0', 'entier', 'Prix (XOF) de l''abonnement au module Événements indésirables pour la durée d''abonnement. 0 = non proposé.', '0', NOW(3), NOW(3)),
  ('param-duree-abonnement', 'duree_abonnement_jours', '0', 'entier', 'Durée (en jours) couverte par un paiement d''abonnement NEWS ou EI. 0 = non paramétré.', '0', NOW(3), NOW(3)),
  ('param-comportement-fin-essai', 'comportement_fin_essai', 'LECTURE_SEULE', 'texte', 'En fin d''essai ou d''abonnement sans souscription : LECTURE_SEULE (consultation possible) ou BLOCAGE.', 'LECTURE_SEULE', NOW(3), NOW(3));
