/*
  Warnings:

  - A unique constraint covering the columns `[libelle]` on the table `Promo` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE `Competence` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `libelle` VARCHAR(191) NOT NULL,
    `niveau` INTEGER NOT NULL,

    UNIQUE INDEX `Competence_libelle_key`(`libelle`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Promo_libelle_key` ON `Promo`(`libelle`);
