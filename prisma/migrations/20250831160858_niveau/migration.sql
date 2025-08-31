/*
  Warnings:

  - You are about to drop the column `libellet` on the `Niveau` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[libelle]` on the table `Niveau` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `libelle` to the `Niveau` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Niveau_libellet_key` ON `Niveau`;

-- AlterTable
ALTER TABLE `Niveau` DROP COLUMN `libellet`,
    ADD COLUMN `libelle` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Niveau_libelle_key` ON `Niveau`(`libelle`);
