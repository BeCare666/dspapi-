-- CreateTable
CREATE TABLE `types_ei` (
    `id` VARCHAR(191) NOT NULL,
    `libelle` VARCHAR(191) NOT NULL,
    `actif` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `types_ei_libelle_key`(`libelle`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `evenements_indesirables` (
    `id` VARCHAR(191) NOT NULL,
    `organisation_id` VARCHAR(191) NOT NULL,
    `type_ei_id` VARCHAR(191) NULL,
    `service_id` VARCHAR(191) NULL,
    `critere_id` VARCHAR(191) NULL,
    `declare_par_id` VARCHAR(191) NOT NULL,
    `description` TEXT NOT NULL,
    `gravite` ENUM('FAIBLE', 'MODEREE', 'ELEVEE') NULL,
    `statut` ENUM('DECLARE', 'EN_TRAITEMENT', 'CLOTURE') NOT NULL DEFAULT 'DECLARE',
    `date_declaration` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `date_cloture` DATETIME(3) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `evenements_indesirables_organisation_id_idx`(`organisation_id`),
    INDEX `evenements_indesirables_service_id_idx`(`service_id`),
    INDEX `evenements_indesirables_statut_idx`(`statut`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `evenement_transitions` (
    `id` VARCHAR(191) NOT NULL,
    `evenement_id` VARCHAR(191) NOT NULL,
    `ancien_statut` ENUM('DECLARE', 'EN_TRAITEMENT', 'CLOTURE') NOT NULL,
    `nouveau_statut` ENUM('DECLARE', 'EN_TRAITEMENT', 'CLOTURE') NOT NULL,
    `utilisateur_id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `evenement_transitions_evenement_id_idx`(`evenement_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `causes` (
    `id` VARCHAR(191) NOT NULL,
    `evenement_id` VARCHAR(191) NOT NULL,
    `type` ENUM('IMMEDIATE', 'PROFONDE') NOT NULL,
    `description` TEXT NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `causes_evenement_id_idx`(`evenement_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `actions_correctives` (
    `id` VARCHAR(191) NOT NULL,
    `evenement_id` VARCHAR(191) NOT NULL,
    `description` TEXT NOT NULL,
    `responsable_id` VARCHAR(191) NOT NULL,
    `echeance` DATETIME(3) NOT NULL,
    `statut` ENUM('A_FAIRE', 'EN_COURS', 'REALISEE') NOT NULL DEFAULT 'A_FAIRE',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `actions_correctives_evenement_id_idx`(`evenement_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pieces_jointes` (
    `id` VARCHAR(191) NOT NULL,
    `evenement_id` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `cloudinary_id` VARCHAR(191) NOT NULL,
    `nom_fichier` VARCHAR(191) NOT NULL,
    `type_mime` VARCHAR(191) NULL,
    `taille_octets` INTEGER NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `pieces_jointes_evenement_id_idx`(`evenement_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `evenements_indesirables` ADD CONSTRAINT `evenements_indesirables_organisation_id_fkey` FOREIGN KEY (`organisation_id`) REFERENCES `organisations`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `evenements_indesirables` ADD CONSTRAINT `evenements_indesirables_type_ei_id_fkey` FOREIGN KEY (`type_ei_id`) REFERENCES `types_ei`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `evenements_indesirables` ADD CONSTRAINT `evenements_indesirables_service_id_fkey` FOREIGN KEY (`service_id`) REFERENCES `services`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `evenements_indesirables` ADD CONSTRAINT `evenements_indesirables_critere_id_fkey` FOREIGN KEY (`critere_id`) REFERENCES `criteres`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `evenements_indesirables` ADD CONSTRAINT `evenements_indesirables_declare_par_id_fkey` FOREIGN KEY (`declare_par_id`) REFERENCES `utilisateurs`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `evenement_transitions` ADD CONSTRAINT `evenement_transitions_evenement_id_fkey` FOREIGN KEY (`evenement_id`) REFERENCES `evenements_indesirables`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `evenement_transitions` ADD CONSTRAINT `evenement_transitions_utilisateur_id_fkey` FOREIGN KEY (`utilisateur_id`) REFERENCES `utilisateurs`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `causes` ADD CONSTRAINT `causes_evenement_id_fkey` FOREIGN KEY (`evenement_id`) REFERENCES `evenements_indesirables`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `actions_correctives` ADD CONSTRAINT `actions_correctives_evenement_id_fkey` FOREIGN KEY (`evenement_id`) REFERENCES `evenements_indesirables`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `actions_correctives` ADD CONSTRAINT `actions_correctives_responsable_id_fkey` FOREIGN KEY (`responsable_id`) REFERENCES `utilisateurs`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pieces_jointes` ADD CONSTRAINT `pieces_jointes_evenement_id_fkey` FOREIGN KEY (`evenement_id`) REFERENCES `evenements_indesirables`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
