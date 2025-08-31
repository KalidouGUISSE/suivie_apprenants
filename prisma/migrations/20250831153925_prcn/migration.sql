/*
  Warnings:

  - You are about to drop the `_CompetenceNiveaux` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[libellet]` on the table `Niveau` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `_CompetenceNiveaux` DROP FOREIGN KEY `_CompetenceNiveaux_A_fkey`;

-- DropForeignKey
ALTER TABLE `_CompetenceNiveaux` DROP FOREIGN KEY `_CompetenceNiveaux_B_fkey`;

-- DropIndex
DROP INDEX `Niveau_rang_key` ON `Niveau`;

-- DropTable
DROP TABLE `_CompetenceNiveaux`;

-- CreateTable
CREATE TABLE `_CompetenceToNiveau` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_CompetenceToNiveau_AB_unique`(`A`, `B`),
    INDEX `_CompetenceToNiveau_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Niveau_libellet_key` ON `Niveau`(`libellet`);

-- AddForeignKey
ALTER TABLE `_CompetenceToNiveau` ADD CONSTRAINT `_CompetenceToNiveau_A_fkey` FOREIGN KEY (`A`) REFERENCES `Competence`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CompetenceToNiveau` ADD CONSTRAINT `_CompetenceToNiveau_B_fkey` FOREIGN KEY (`B`) REFERENCES `Niveau`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
