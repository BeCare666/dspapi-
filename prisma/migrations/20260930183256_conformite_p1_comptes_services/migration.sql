-- AlterTable
ALTER TABLE `organisations` ADD COLUMN `pays` VARCHAR(191) NULL,
    ADD COLUMN `raison_sociale` VARCHAR(191) NULL,
    ADD COLUMN `type_structure` ENUM('HOPITAL', 'CLINIQUE', 'LABORATOIRE', 'PHARMACIE', 'CABINET_MEDICAL', 'AUTRE') NULL,
    ADD COLUMN `ville` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `services` ADD COLUMN `actif` BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE `utilisateurs` ADD COLUMN `civilite` ENUM('M', 'MME') NULL;
