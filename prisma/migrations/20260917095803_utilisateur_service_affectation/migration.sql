-- AlterTable
ALTER TABLE `utilisateurs` ADD COLUMN `service_id` VARCHAR(191) NULL;

-- CreateIndex
CREATE INDEX `utilisateurs_service_id_idx` ON `utilisateurs`(`service_id`);

-- AddForeignKey
ALTER TABLE `utilisateurs` ADD CONSTRAINT `utilisateurs_service_id_fkey` FOREIGN KEY (`service_id`) REFERENCES `services`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
