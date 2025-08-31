/*
  Warnings:

  - You are about to drop the column `niveau` on the `Competence` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Competence` DROP COLUMN `niveau`;

-- CreateTable
CREATE TABLE `Niveau` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `niveau` INTEGER NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `competenceId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Niveau` ADD CONSTRAINT `Niveau_competenceId_fkey` FOREIGN KEY (`competenceId`) REFERENCES `Competence`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
