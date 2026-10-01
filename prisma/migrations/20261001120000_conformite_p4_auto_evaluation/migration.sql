-- Conformité CDC — Phase 4 (module Auto-évaluation, §6).

-- §6.6 — catégorie du critère et §6.4 recommandation synthétique.
ALTER TABLE `criteres` ADD COLUMN `categorie` VARCHAR(191) NULL,
    ADD COLUMN `recommandation` TEXT NULL;

-- §6.2 / §6.6 — nature de l'élément mesurable et participation au score.
-- Valeurs par défaut (document à examiner, entre dans le score) = comportement
-- antérieur : les scores déjà calculés restent identiques.
ALTER TABLE `elements_mesurables` ADD COLUMN `entre_dans_score` BOOLEAN NOT NULL DEFAULT true,
    ADD COLUMN `type_element` ENUM('DOCUMENT_A_EXAMINER', 'ENTRETIEN', 'OBSERVATION') NOT NULL DEFAULT 'DOCUMENT_A_EXAMINER';

-- §6.4 / §6.6 — rapport PDF généré en tâche asynchrone (file d'attente en base).
ALTER TABLE `rapports_pdf` ADD COLUMN `contenu` LONGBLOB NULL,
    ADD COLUMN `erreur` TEXT NULL,
    ADD COLUMN `tentatives` INTEGER NOT NULL DEFAULT 0;

-- Les évaluations déjà soumises n'ont jamais eu de rapport : mise en file.
INSERT INTO `rapports_pdf` (`id`, `session_id`, `statut`, `tentatives`, `created_at`, `updated_at`)
SELECT CONCAT('rapport-', s.`id`), s.`id`, 'EN_COURS', 0, NOW(3), NOW(3)
FROM `sessions_evaluation` s
LEFT JOIN `rapports_pdf` r ON r.`session_id` = s.`id`
WHERE s.`statut` = 'SOUMISE' AND r.`id` IS NULL;
