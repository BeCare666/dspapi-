-- CreateTable
CREATE TABLE `abonnements_module` (
    `id` VARCHAR(191) NOT NULL,
    `organisation_id` VARCHAR(191) NOT NULL,
    `module` ENUM('NEWS', 'EI') NOT NULL,
    `statut` ENUM('ESSAI', 'ACTIF', 'EXPIRE') NOT NULL DEFAULT 'ESSAI',
    `essai_debut` DATETIME(3) NOT NULL,
    `essai_fin` DATETIME(3) NOT NULL,
    `active_le` DATETIME(3) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `abonnements_module_organisation_id_module_key`(`organisation_id`, `module`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `patients` (
    `id` VARCHAR(191) NOT NULL,
    `organisation_id` VARCHAR(191) NOT NULL,
    `service_id` VARCHAR(191) NULL,
    `nom` VARCHAR(191) NOT NULL,
    `prenom` VARCHAR(191) NOT NULL,
    `date_naissance` DATETIME(3) NULL,
    `sexe` VARCHAR(191) NULL,
    `numero_dossier` VARCHAR(191) NULL,
    `statut` ENUM('HOSPITALISE', 'SORTI') NOT NULL DEFAULT 'HOSPITALISE',
    `date_admission` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `date_sortie` DATETIME(3) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `patients_organisation_id_idx`(`organisation_id`),
    INDEX `patients_service_id_idx`(`service_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mesures_news` (
    `id` VARCHAR(191) NOT NULL,
    `patient_id` VARCHAR(191) NOT NULL,
    `saisie_par_id` VARCHAR(191) NOT NULL,
    `frequence_respiratoire` INTEGER NOT NULL,
    `saturation_oxygene` INTEGER NOT NULL,
    `oxygeno_supplementation` BOOLEAN NOT NULL,
    `temperature` DOUBLE NOT NULL,
    `pression_arterielle_systolique` INTEGER NOT NULL,
    `frequence_cardiaque` INTEGER NOT NULL,
    `niveau_conscience` ENUM('ALERTE', 'CONFUSION', 'VOIX', 'DOULEUR', 'INCONSCIENT') NOT NULL,
    `score_total` INTEGER NOT NULL,
    `niveau_risque` ENUM('BAS', 'MOYEN', 'ELEVE') NOT NULL,
    `date_mesure` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `mesures_news_patient_id_idx`(`patient_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `alertes` (
    `id` VARCHAR(191) NOT NULL,
    `organisation_id` VARCHAR(191) NOT NULL,
    `patient_id` VARCHAR(191) NOT NULL,
    `mesure_id` VARCHAR(191) NOT NULL,
    `niveau_risque` ENUM('BAS', 'MOYEN', 'ELEVE') NOT NULL,
    `statut` ENUM('OUVERTE', 'EN_COURS', 'CLOTUREE') NOT NULL DEFAULT 'OUVERTE',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `alertes_mesure_id_key`(`mesure_id`),
    INDEX `alertes_organisation_id_idx`(`organisation_id`),
    INDEX `alertes_patient_id_idx`(`patient_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `interventions` (
    `id` VARCHAR(191) NOT NULL,
    `alerte_id` VARCHAR(191) NOT NULL,
    `utilisateur_id` VARCHAR(191) NOT NULL,
    `note` TEXT NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `interventions_alerte_id_idx`(`alerte_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `abonnements_module` ADD CONSTRAINT `abonnements_module_organisation_id_fkey` FOREIGN KEY (`organisation_id`) REFERENCES `organisations`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `patients` ADD CONSTRAINT `patients_organisation_id_fkey` FOREIGN KEY (`organisation_id`) REFERENCES `organisations`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `patients` ADD CONSTRAINT `patients_service_id_fkey` FOREIGN KEY (`service_id`) REFERENCES `services`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `mesures_news` ADD CONSTRAINT `mesures_news_patient_id_fkey` FOREIGN KEY (`patient_id`) REFERENCES `patients`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `mesures_news` ADD CONSTRAINT `mesures_news_saisie_par_id_fkey` FOREIGN KEY (`saisie_par_id`) REFERENCES `utilisateurs`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `alertes` ADD CONSTRAINT `alertes_organisation_id_fkey` FOREIGN KEY (`organisation_id`) REFERENCES `organisations`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `alertes` ADD CONSTRAINT `alertes_patient_id_fkey` FOREIGN KEY (`patient_id`) REFERENCES `patients`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `alertes` ADD CONSTRAINT `alertes_mesure_id_fkey` FOREIGN KEY (`mesure_id`) REFERENCES `mesures_news`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `interventions` ADD CONSTRAINT `interventions_alerte_id_fkey` FOREIGN KEY (`alerte_id`) REFERENCES `alertes`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `interventions` ADD CONSTRAINT `interventions_utilisateur_id_fkey` FOREIGN KEY (`utilisateur_id`) REFERENCES `utilisateurs`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
