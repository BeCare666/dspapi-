-- Conformité CDC — Phase 3 (module Événements indésirables, §8, §12.4, §13.4).
-- Migration écrite à la main : elle reprend les données existantes avant de
-- supprimer l'ancienne colonne `gravite` et l'ancien statut `EN_TRAITEMENT`.

-- §8.1 / §12.4 — échelle de gravité paramétrable. Valeurs initiales = exemples
-- d'échelle donnés par le CDC (§8.1) ; « critique » = gravité élevée (§8.3).
CREATE TABLE `niveaux_gravite_ei` (
    `id` VARCHAR(191) NOT NULL,
    `libelle` VARCHAR(191) NOT NULL,
    `ordre` INTEGER NOT NULL,
    `critique` BOOLEAN NOT NULL DEFAULT false,
    `actif` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `niveaux_gravite_ei_libelle_key`(`libelle`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

INSERT INTO `niveaux_gravite_ei` (`id`, `libelle`, `ordre`, `critique`, `actif`, `created_at`, `updated_at`) VALUES
  ('gravite-sans-consequence', 'Incident sans conséquence', 1, false, true, NOW(3), NOW(3)),
  ('gravite-consequence-mineure', 'Incident avec conséquence mineure', 2, false, true, NOW(3), NOW(3)),
  ('gravite-eig', 'Événement indésirable grave', 3, true, true, NOW(3), NOW(3)),
  ('gravite-deces', 'Décès', 4, true, true, NOW(3), NOW(3));

-- §8.1 — liste de types d'EI citée par le CDC, paramétrable ensuite par l'admin.
INSERT IGNORE INTO `types_ei` (`id`, `libelle`, `actif`, `created_at`, `updated_at`) VALUES
  ('type-ei-chute', 'Chute', true, NOW(3), NOW(3)),
  ('type-ei-erreur-medicamenteuse', 'Erreur médicamenteuse', true, NOW(3), NOW(3)),
  ('type-ei-ias', 'Infection associée aux soins', true, NOW(3), NOW(3)),
  ('type-ei-identification', 'Erreur d''identification du patient', true, NOW(3), NOW(3)),
  ('type-ei-equipement', 'Incident lié à un équipement', true, NOW(3), NOW(3)),
  ('type-ei-autre', 'Autre', true, NOW(3), NOW(3));

-- Nouveaux champs de la fiche (§8.1) et priorisation (§8.2), d'abord nullables.
ALTER TABLE `evenements_indesirables`
    ADD COLUMN `date_survenue` DATETIME(3) NULL,
    ADD COLUMN `lieu` VARCHAR(191) NULL,
    ADD COLUMN `niveau_gravite_id` VARCHAR(191) NULL,
    ADD COLUMN `personnes_impliquees` TEXT NULL,
    ADD COLUMN `priorite` ENUM('BASSE', 'NORMALE', 'HAUTE') NULL;

-- Reprise des fiches existantes :
-- - date de survenue inconnue → date de déclaration ;
-- - personnes impliquées non saisies à l'époque → mention explicite ;
-- - ancienne gravité FAIBLE / MODEREE / ELEVEE → niveaux 1 / 2 / 3 de l'échelle.
UPDATE `evenements_indesirables` SET `date_survenue` = `date_declaration` WHERE `date_survenue` IS NULL;
UPDATE `evenements_indesirables`
SET `personnes_impliquees` = 'Non renseigné (déclaration antérieure à la mise en conformité CDC)'
WHERE `personnes_impliquees` IS NULL;
UPDATE `evenements_indesirables` SET `niveau_gravite_id` = 'gravite-sans-consequence' WHERE `gravite` = 'FAIBLE';
UPDATE `evenements_indesirables` SET `niveau_gravite_id` = 'gravite-consequence-mineure' WHERE `gravite` = 'MODEREE';
UPDATE `evenements_indesirables` SET `niveau_gravite_id` = 'gravite-eig' WHERE `gravite` = 'ELEVEE';

ALTER TABLE `evenements_indesirables`
    MODIFY `date_survenue` DATETIME(3) NOT NULL,
    MODIFY `personnes_impliquees` TEXT NOT NULL;

-- §8.5 — circuit à 5 statuts. Passage par un enum « superset », reprise, puis
-- enum final : EN_TRAITEMENT → EN_ANALYSE ; un EI encore DECLARE mais déjà
-- qualifié (gravité renseignée) → QUALIFIE.
ALTER TABLE `evenements_indesirables`
    MODIFY `statut` ENUM('DECLARE', 'EN_TRAITEMENT', 'QUALIFIE', 'EN_ANALYSE', 'PLAN_ACTION', 'CLOTURE') NOT NULL DEFAULT 'DECLARE';
ALTER TABLE `evenement_transitions`
    MODIFY `ancien_statut` ENUM('DECLARE', 'EN_TRAITEMENT', 'QUALIFIE', 'EN_ANALYSE', 'PLAN_ACTION', 'CLOTURE') NOT NULL,
    MODIFY `nouveau_statut` ENUM('DECLARE', 'EN_TRAITEMENT', 'QUALIFIE', 'EN_ANALYSE', 'PLAN_ACTION', 'CLOTURE') NOT NULL;

UPDATE `evenements_indesirables` SET `statut` = 'EN_ANALYSE' WHERE `statut` = 'EN_TRAITEMENT';
UPDATE `evenements_indesirables` SET `statut` = 'QUALIFIE' WHERE `statut` = 'DECLARE' AND `gravite` IS NOT NULL;
UPDATE `evenement_transitions` SET `ancien_statut` = 'EN_ANALYSE' WHERE `ancien_statut` = 'EN_TRAITEMENT';
UPDATE `evenement_transitions` SET `nouveau_statut` = 'EN_ANALYSE' WHERE `nouveau_statut` = 'EN_TRAITEMENT';

ALTER TABLE `evenements_indesirables`
    MODIFY `statut` ENUM('DECLARE', 'QUALIFIE', 'EN_ANALYSE', 'PLAN_ACTION', 'CLOTURE') NOT NULL DEFAULT 'DECLARE';
ALTER TABLE `evenement_transitions`
    MODIFY `ancien_statut` ENUM('DECLARE', 'QUALIFIE', 'EN_ANALYSE', 'PLAN_ACTION', 'CLOTURE') NOT NULL,
    MODIFY `nouveau_statut` ENUM('DECLARE', 'QUALIFIE', 'EN_ANALYSE', 'PLAN_ACTION', 'CLOTURE') NOT NULL;

-- L'ancienne colonne a été reprise dans niveau_gravite_id : suppression.
ALTER TABLE `evenements_indesirables` DROP COLUMN `gravite`;

-- §8.2 — causes guidées (« 5 pourquoi »).
ALTER TABLE `causes` ADD COLUMN `pourquois` JSON NULL;

-- §13.4 — corrections tracées des fiches EI.
CREATE TABLE `corrections_ei` (
    `id` VARCHAR(191) NOT NULL,
    `evenement_id` VARCHAR(191) NOT NULL,
    `auteur_id` VARCHAR(191) NOT NULL,
    `motif` TEXT NOT NULL,
    `valeurs_avant` JSON NOT NULL,
    `valeurs_apres` JSON NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `corrections_ei_evenement_id_idx`(`evenement_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE INDEX `evenements_indesirables_niveau_gravite_id_idx` ON `evenements_indesirables`(`niveau_gravite_id`);

ALTER TABLE `evenements_indesirables` ADD CONSTRAINT `evenements_indesirables_niveau_gravite_id_fkey` FOREIGN KEY (`niveau_gravite_id`) REFERENCES `niveaux_gravite_ei`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE `corrections_ei` ADD CONSTRAINT `corrections_ei_evenement_id_fkey` FOREIGN KEY (`evenement_id`) REFERENCES `evenements_indesirables`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE `corrections_ei` ADD CONSTRAINT `corrections_ei_auteur_id_fkey` FOREIGN KEY (`auteur_id`) REFERENCES `utilisateurs`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
