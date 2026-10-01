-- Conformité CDC — Phase 7 (tableau de bord administrateur, §9, §12.5).

-- §9 — objectifs de la formation, présentés au catalogue.
ALTER TABLE `formations` ADD COLUMN `objectifs` TEXT NULL;

-- §12.5 — suivi des présences : nombre de participants présents à la session.
ALTER TABLE `reservations` ADD COLUMN `participants_presents` INTEGER NULL;
