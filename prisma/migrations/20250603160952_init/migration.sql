/*
  Warnings:

  - Added the required column `idCampeonato` to the `Categoria` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Categoria" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "idCampeonato" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,
    "equipos" INTEGER NOT NULL,
    "creacion" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Categoria" ("creacion", "equipos", "id", "nombre") SELECT "creacion", "equipos", "id", "nombre" FROM "Categoria";
DROP TABLE "Categoria";
ALTER TABLE "new_Categoria" RENAME TO "Categoria";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
