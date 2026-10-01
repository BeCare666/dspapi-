-- CreateTable
CREATE TABLE `formations` (
    `id` VARCHAR(191) NOT NULL,
    `titre` VARCHAR(191) NOT NULL,
    `description` TEXT NOT NULL,
    `duree_heures` INTEGER NULL,
    `prix_individuel` INTEGER NOT NULL,
    `prix_groupe_5` INTEGER NOT NULL,
    `prix_groupe_10` INTEGER NOT NULL,
    `actif` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `reservations` (
    `id` VARCHAR(191) NOT NULL,
    `formation_id` VARCHAR(191) NOT NULL,
    `utilisateur_id` VARCHAR(191) NOT NULL,
    `organisation_id` VARCHAR(191) NULL,
    `formule` ENUM('INDIVIDUEL', 'GROUPE_5', 'GROUPE_10') NOT NULL,
    `tarif_applique` INTEGER NOT NULL,
    `statut` ENUM('ATTENTE_PAIEMENT', 'PAYEE', 'CONFIRMEE', 'REALISEE', 'ANNULEE') NOT NULL DEFAULT 'ATTENTE_PAIEMENT',
    `kkiapay_transaction_id` VARCHAR(191) NULL,
    `date_rdv` DATETIME(3) NULL,
    `presence_confirmee` BOOLEAN NOT NULL DEFAULT false,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `reservations_kkiapay_transaction_id_key`(`kkiapay_transaction_id`),
    INDEX `reservations_organisation_id_idx`(`organisation_id`),
    INDEX `reservations_utilisateur_id_idx`(`utilisateur_id`),
    INDEX `reservations_statut_idx`(`statut`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `factures` (
    `id` VARCHAR(191) NOT NULL,
    `reservation_id` VARCHAR(191) NOT NULL,
    `numero` VARCHAR(191) NOT NULL,
    `montant` INTEGER NOT NULL,
    `emise_le` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `factures_reservation_id_key`(`reservation_id`),
    UNIQUE INDEX `factures_numero_key`(`numero`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `reservations` ADD CONSTRAINT `reservations_formation_id_fkey` FOREIGN KEY (`formation_id`) REFERENCES `formations`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `reservations` ADD CONSTRAINT `reservations_utilisateur_id_fkey` FOREIGN KEY (`utilisateur_id`) REFERENCES `utilisateurs`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `reservations` ADD CONSTRAINT `reservations_organisation_id_fkey` FOREIGN KEY (`organisation_id`) REFERENCES `organisations`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `factures` ADD CONSTRAINT `factures_reservation_id_fkey` FOREIGN KEY (`reservation_id`) REFERENCES `reservations`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
