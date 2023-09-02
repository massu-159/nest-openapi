/*
  Warnings:

  - You are about to drop the column `attributes` on the `Weapon` table. All the data in the column will be lost.
  - Added the required column `attribute` to the `Weapon` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Weapon" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "attackPower" INTEGER NOT NULL,
    "attribute" TEXT NOT NULL
);
INSERT INTO "new_Weapon" ("attackPower", "id", "name") SELECT "attackPower", "id", "name" FROM "Weapon";
DROP TABLE "Weapon";
ALTER TABLE "new_Weapon" RENAME TO "Weapon";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
