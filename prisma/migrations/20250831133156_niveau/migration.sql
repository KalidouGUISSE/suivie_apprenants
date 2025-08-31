/*
  Warnings:

  - You are about to drop the `Promo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `Promo`;

-- CreateTable
CREATE TABLE `Niveau` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `libelle` VARCHAR(191) NOT NULL,
    `rang` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
