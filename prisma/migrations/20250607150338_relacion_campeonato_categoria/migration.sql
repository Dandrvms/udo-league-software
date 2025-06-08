/*
  Warnings:

  - You are about to drop the column `categorias` on the `Campeonato` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Campeonato" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "creacion" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Campeonato" ("creacion", "id", "nombre") SELECT "creacion", "id", "nombre" FROM "Campeonato";
DROP TABLE "Campeonato";
ALTER TABLE "new_Campeonato" RENAME TO "Campeonato";
CREATE TABLE "new_Categoria" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "idCampeonato" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,
    "equipos" INTEGER NOT NULL,
    "creacion" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Categoria_idCampeonato_fkey" FOREIGN KEY ("idCampeonato") REFERENCES "Campeonato" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Categoria" ("creacion", "equipos", "id", "idCampeonato", "nombre") SELECT "creacion", "equipos", "id", "idCampeonato", "nombre" FROM "Categoria";
DROP TABLE "Categoria";
ALTER TABLE "new_Categoria" RENAME TO "Categoria";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
