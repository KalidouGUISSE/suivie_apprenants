/*
  Warnings:

  - You are about to drop the column `libelle` on the `Niveau` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[libellet]` on the table `Niveau` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `libellet` to the `Niveau` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Niveau` DROP COLUMN `libelle`,
    ADD COLUMN `libellet` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Competence` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `libelle` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Promo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `libelle` VARCHAR(191) NOT NULL,
    `dateDebut` DATETIME(3) NOT NULL,
    `dateFin` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Referentiel` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `libelle` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_CompetenceToNiveau` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_CompetenceToNiveau_AB_unique`(`A`, `B`),
    INDEX `_CompetenceToNiveau_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ReferentielCompetences` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ReferentielCompetences_AB_unique`(`A`, `B`),
    INDEX `_ReferentielCompetences_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Niveau_libellet_key` ON `Niveau`(`libellet`);

-- AddForeignKey
ALTER TABLE `_CompetenceToNiveau` ADD CONSTRAINT `_CompetenceToNiveau_A_fkey` FOREIGN KEY (`A`) REFERENCES `Competence`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CompetenceToNiveau` ADD CONSTRAINT `_CompetenceToNiveau_B_fkey` FOREIGN KEY (`B`) REFERENCES `Niveau`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ReferentielCompetences` ADD CONSTRAINT `_ReferentielCompetences_A_fkey` FOREIGN KEY (`A`) REFERENCES `Competence`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ReferentielCompetences` ADD CONSTRAINT `_ReferentielCompetences_B_fkey` FOREIGN KEY (`B`) REFERENCES `Referentiel`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
