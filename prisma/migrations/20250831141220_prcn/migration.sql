/*
  Warnings:

  - You are about to drop the column `competenceId` on the `Niveau` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Niveau` table. All the data in the column will be lost.
  - You are about to drop the column `niveau` on the `Niveau` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[rang]` on the table `Niveau` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `libellet` to the `Niveau` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rang` to the `Niveau` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Niveau` DROP FOREIGN KEY `Niveau_competenceId_fkey`;

-- DropIndex
DROP INDEX `Competence_libelle_key` ON `Competence`;

-- DropIndex
DROP INDEX `Niveau_competenceId_fkey` ON `Niveau`;

-- AlterTable
ALTER TABLE `Niveau` DROP COLUMN `competenceId`,
    DROP COLUMN `description`,
    DROP COLUMN `niveau`,
    ADD COLUMN `libellet` VARCHAR(191) NOT NULL,
    ADD COLUMN `rang` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Referentiel` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `libelle` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_CompetenceNiveaux` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_CompetenceNiveaux_AB_unique`(`A`, `B`),
    INDEX `_CompetenceNiveaux_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ReferentielCompetences` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ReferentielCompetences_AB_unique`(`A`, `B`),
    INDEX `_ReferentielCompetences_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Niveau_rang_key` ON `Niveau`(`rang`);

-- AddForeignKey
ALTER TABLE `_CompetenceNiveaux` ADD CONSTRAINT `_CompetenceNiveaux_A_fkey` FOREIGN KEY (`A`) REFERENCES `Competence`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CompetenceNiveaux` ADD CONSTRAINT `_CompetenceNiveaux_B_fkey` FOREIGN KEY (`B`) REFERENCES `Niveau`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ReferentielCompetences` ADD CONSTRAINT `_ReferentielCompetences_A_fkey` FOREIGN KEY (`A`) REFERENCES `Competence`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ReferentielCompetences` ADD CONSTRAINT `_ReferentielCompetences_B_fkey` FOREIGN KEY (`B`) REFERENCES `Referentiel`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
