-- AlterTable
ALTER TABLE `mesures_news` ADD COLUMN `frequence_surveillance` VARCHAR(191) NULL;

-- AlterTable
-- §7.1 — fiche patient minimale. Ajout en trois temps pour les fiches déjà
-- existantes : colonne nullable, reprise du numéro de dossier (ou marqueur
-- explicite ANCIEN-<fin d'id> si absent), puis passage en NOT NULL.
ALTER TABLE `patients` ADD COLUMN `identifiant_interne` VARCHAR(191) NULL,
    ADD COLUMN `numero_lit` VARCHAR(191) NULL,
    MODIFY `nom` VARCHAR(191) NULL,
    MODIFY `prenom` VARCHAR(191) NULL;

UPDATE `patients`
SET `identifiant_interne` = COALESCE(NULLIF(TRIM(`numero_dossier`), ''), CONCAT('ANCIEN-', RIGHT(`id`, 8)))
WHERE `identifiant_interne` IS NULL;

ALTER TABLE `patients` MODIFY `identifiant_interne` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `corrections_mesures_news` (
    `id` VARCHAR(191) NOT NULL,
    `mesure_id` VARCHAR(191) NOT NULL,
    `auteur_id` VARCHAR(191) NOT NULL,
    `motif` TEXT NOT NULL,
    `valeurs_avant` JSON NOT NULL,
    `valeurs_apres` JSON NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `corrections_mesures_news_mesure_id_idx`(`mesure_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `patients_organisation_id_identifiant_interne_idx` ON `patients`(`organisation_id`, `identifiant_interne`);

-- AddForeignKey
ALTER TABLE `corrections_mesures_news` ADD CONSTRAINT `corrections_mesures_news_mesure_id_fkey` FOREIGN KEY (`mesure_id`) REFERENCES `mesures_news`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `corrections_mesures_news` ADD CONSTRAINT `corrections_mesures_news_auteur_id_fkey` FOREIGN KEY (`auteur_id`) REFERENCES `utilisateurs`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- §12.3 — seuils de niveau de risque et fréquences de surveillance NEWS,
-- valeurs par défaut reprises du CDC (§7.3), modifiables depuis /admin/parametres.
INSERT IGNORE INTO `parametres_plateforme` (`id`, `cle`, `valeur`, `type`, `description`, `valeur_defaut`, `created_at`, `updated_at`) VALUES
  ('param-news-seuil-moyen', 'news_seuil_moyen', '5', 'entier', 'Score NEWS total à partir duquel le risque est moyen (un paramètre isolé à 3 donne aussi un risque moyen).', '5', NOW(3), NOW(3)),
  ('param-news-seuil-eleve', 'news_seuil_eleve', '7', 'entier', 'Score NEWS total à partir duquel le risque est élevé.', '7', NOW(3), NOW(3)),
  ('param-news-frequence-bas', 'news_frequence_bas', 'Toutes les 12 heures', 'texte', 'Fréquence de surveillance suggérée en risque faible.', 'Toutes les 12 heures', NOW(3), NOW(3)),
  ('param-news-frequence-moyen', 'news_frequence_moyen', 'Toutes les 4 à 6 heures', 'texte', 'Fréquence de surveillance suggérée en risque moyen.', 'Toutes les 4 à 6 heures', NOW(3), NOW(3)),
  ('param-news-frequence-eleve', 'news_frequence_eleve', 'Surveillance continue', 'texte', 'Fréquence de surveillance suggérée en risque élevé.', 'Surveillance continue', NOW(3), NOW(3));
