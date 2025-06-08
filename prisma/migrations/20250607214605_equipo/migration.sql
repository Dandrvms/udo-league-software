/*
  Warnings:

  - You are about to drop the column `equipos` on the `Categoria` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "Equipo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "abreviatura" TEXT NOT NULL,
    "idCategoria" INTEGER NOT NULL,
    "idCampeonato" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "url_logo" TEXT NOT NULL,
    CONSTRAINT "Equipo_idCategoria_fkey" FOREIGN KEY ("idCategoria") REFERENCES "Categoria" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Equipo_idCampeonato_fkey" FOREIGN KEY ("idCampeonato") REFERENCES "Campeonato" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Categoria" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "idCampeonato" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,
    "nEquipos" INTEGER NOT NULL DEFAULT 0,
    "creacion" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Categoria_idCampeonato_fkey" FOREIGN KEY ("idCampeonato") REFERENCES "Campeonato" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Categoria" ("creacion", "id", "idCampeonato", "nombre") SELECT "creacion", "id", "idCampeonato", "nombre" FROM "Categoria";
DROP TABLE "Categoria";
ALTER TABLE "new_Categoria" RENAME TO "Categoria";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
