-- CreateTable
CREATE TABLE `organisations` (
    `id` VARCHAR(191) NOT NULL,
    `nom` VARCHAR(191) NOT NULL,
    `ifu` VARCHAR(191) NOT NULL,
    `type` ENUM('EH', 'ESPC') NOT NULL,
    `adresse` VARCHAR(191) NULL,
    `telephone` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `actif` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `organisations_ifu_key`(`ifu`),
    UNIQUE INDEX `organisations_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `utilisateurs` (
    `id` VARCHAR(191) NOT NULL,
    `organisation_id` VARCHAR(191) NULL,
    `type_compte` ENUM('ORGANISATION', 'INDIVIDUEL', 'ADMIN_PLATEFORME') NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `mot_de_passe_hash` VARCHAR(191) NOT NULL,
    `nom` VARCHAR(191) NOT NULL,
    `prenom` VARCHAR(191) NOT NULL,
    `telephone` VARCHAR(191) NULL,
    `actif` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `utilisateurs_email_key`(`email`),
    INDEX `utilisateurs_organisation_id_idx`(`organisation_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `utilisateur_roles` (
    `id` VARCHAR(191) NOT NULL,
    `utilisateur_id` VARCHAR(191) NOT NULL,
    `role` ENUM('RESPONSABLE_COMPTE', 'RESP_QUALITE', 'PERSONNEL_SOIGNANT', 'GESTIONNAIRE_FORMATION', 'ADMIN_PLATEFORME') NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `utilisateur_roles_utilisateur_id_role_key`(`utilisateur_id`, `role`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `services` (
    `id` VARCHAR(191) NOT NULL,
    `organisation_id` VARCHAR(191) NOT NULL,
    `nom` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `services_organisation_id_idx`(`organisation_id`),
    UNIQUE INDEX `services_organisation_id_nom_key`(`organisation_id`, `nom`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `journal_audit` (
    `id` VARCHAR(191) NOT NULL,
    `organisation_id` VARCHAR(191) NULL,
    `utilisateur_id` VARCHAR(191) NULL,
    `action` VARCHAR(191) NOT NULL,
    `entite` VARCHAR(191) NOT NULL,
    `entite_id` VARCHAR(191) NULL,
    `donnees_avant` JSON NULL,
    `donnees_apres` JSON NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `journal_audit_organisation_id_idx`(`organisation_id`),
    INDEX `journal_audit_entite_entite_id_idx`(`entite`, `entite_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `grilles` (
    `id` VARCHAR(191) NOT NULL,
    `nom` VARCHAR(191) NOT NULL,
    `type` ENUM('EH', 'ESPC') NOT NULL,
    `version` INTEGER NOT NULL,
    `statut` ENUM('BROUILLON', 'PUBLIEE', 'ARCHIVEE') NOT NULL DEFAULT 'BROUILLON',
    `publiee_le` DATETIME(3) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `grilles_nom_version_key`(`nom`, `version`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `domaines` (
    `id` VARCHAR(191) NOT NULL,
    `grille_id` VARCHAR(191) NOT NULL,
    `nom` VARCHAR(191) NOT NULL,
    `ordre` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `domaines_grille_id_idx`(`grille_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `normes` (
    `id` VARCHAR(191) NOT NULL,
    `domaine_id` VARCHAR(191) NOT NULL,
    `code` VARCHAR(191) NOT NULL,
    `libelle` VARCHAR(191) NOT NULL,
    `ordre` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `normes_domaine_id_idx`(`domaine_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `criteres` (
    `id` VARCHAR(191) NOT NULL,
    `norme_id` VARCHAR(191) NOT NULL,
    `code` VARCHAR(191) NOT NULL,
    `libelle` VARCHAR(191) NOT NULL,
    `ordre` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `criteres_norme_id_idx`(`norme_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `elements_mesurables` (
    `id` VARCHAR(191) NOT NULL,
    `critere_id` VARCHAR(191) NOT NULL,
    `libelle` VARCHAR(191) NOT NULL,
    `type_reponse` ENUM('OUI_NON', 'TEXTE', 'CHOIX') NOT NULL DEFAULT 'OUI_NON',
    `options_choix` JSON NULL,
    `ordre` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `elements_mesurables_critere_id_idx`(`critere_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sessions_evaluation` (
    `id` VARCHAR(191) NOT NULL,
    `organisation_id` VARCHAR(191) NOT NULL,
    `grille_id` VARCHAR(191) NOT NULL,
    `demarree_par_id` VARCHAR(191) NOT NULL,
    `soumise_par_id` VARCHAR(191) NULL,
    `statut` ENUM('EN_COURS', 'SOUMISE') NOT NULL DEFAULT 'EN_COURS',
    `score_global` DOUBLE NULL,
    `date_debut` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `date_soumission` DATETIME(3) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `sessions_evaluation_organisation_id_idx`(`organisation_id`),
    INDEX `sessions_evaluation_grille_id_idx`(`grille_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `reponses` (
    `id` VARCHAR(191) NOT NULL,
    `session_id` VARCHAR(191) NOT NULL,
    `element_mesurable_id` VARCHAR(191) NOT NULL,
    `valeur` JSON NOT NULL,
    `commentaire` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `reponses_session_id_idx`(`session_id`),
    UNIQUE INDEX `reponses_session_id_element_mesurable_id_key`(`session_id`, `element_mesurable_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rapports_pdf` (
    `id` VARCHAR(191) NOT NULL,
    `session_id` VARCHAR(191) NOT NULL,
    `statut` ENUM('EN_COURS', 'DISPONIBLE', 'ECHEC') NOT NULL DEFAULT 'EN_COURS',
    `url` VARCHAR(191) NULL,
    `genere_le` DATETIME(3) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `rapports_pdf_session_id_key`(`session_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `utilisateurs` ADD CONSTRAINT `utilisateurs_organisation_id_fkey` FOREIGN KEY (`organisation_id`) REFERENCES `organisations`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `utilisateur_roles` ADD CONSTRAINT `utilisateur_roles_utilisateur_id_fkey` FOREIGN KEY (`utilisateur_id`) REFERENCES `utilisateurs`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `services` ADD CONSTRAINT `services_organisation_id_fkey` FOREIGN KEY (`organisation_id`) REFERENCES `organisations`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `journal_audit` ADD CONSTRAINT `journal_audit_organisation_id_fkey` FOREIGN KEY (`organisation_id`) REFERENCES `organisations`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `journal_audit` ADD CONSTRAINT `journal_audit_utilisateur_id_fkey` FOREIGN KEY (`utilisateur_id`) REFERENCES `utilisateurs`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `domaines` ADD CONSTRAINT `domaines_grille_id_fkey` FOREIGN KEY (`grille_id`) REFERENCES `grilles`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `normes` ADD CONSTRAINT `normes_domaine_id_fkey` FOREIGN KEY (`domaine_id`) REFERENCES `domaines`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `criteres` ADD CONSTRAINT `criteres_norme_id_fkey` FOREIGN KEY (`norme_id`) REFERENCES `normes`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `elements_mesurables` ADD CONSTRAINT `elements_mesurables_critere_id_fkey` FOREIGN KEY (`critere_id`) REFERENCES `criteres`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sessions_evaluation` ADD CONSTRAINT `sessions_evaluation_organisation_id_fkey` FOREIGN KEY (`organisation_id`) REFERENCES `organisations`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sessions_evaluation` ADD CONSTRAINT `sessions_evaluation_grille_id_fkey` FOREIGN KEY (`grille_id`) REFERENCES `grilles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sessions_evaluation` ADD CONSTRAINT `sessions_evaluation_demarree_par_id_fkey` FOREIGN KEY (`demarree_par_id`) REFERENCES `utilisateurs`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sessions_evaluation` ADD CONSTRAINT `sessions_evaluation_soumise_par_id_fkey` FOREIGN KEY (`soumise_par_id`) REFERENCES `utilisateurs`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `reponses` ADD CONSTRAINT `reponses_session_id_fkey` FOREIGN KEY (`session_id`) REFERENCES `sessions_evaluation`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `reponses` ADD CONSTRAINT `reponses_element_mesurable_id_fkey` FOREIGN KEY (`element_mesurable_id`) REFERENCES `elements_mesurables`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `rapports_pdf` ADD CONSTRAINT `rapports_pdf_session_id_fkey` FOREIGN KEY (`session_id`) REFERENCES `sessions_evaluation`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
