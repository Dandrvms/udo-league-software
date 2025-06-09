/*
  Warnings:

  - You are about to drop the column `idEquipo` on the `Jugador` table. All the data in the column will be lost.
  - Added the required column `equipo` to the `Jugador` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Jugador" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "equipo" INTEGER NOT NULL,
    "idCategoria" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "edad" INTEGER NOT NULL,
    "posicion" TEXT NOT NULL,
    "dorsal" INTEGER NOT NULL,
    CONSTRAINT "Jugador_equipo_fkey" FOREIGN KEY ("equipo") REFERENCES "Equipo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Jugador" ("apellido", "dorsal", "edad", "id", "idCategoria", "nombre", "posicion") SELECT "apellido", "dorsal", "edad", "id", "idCategoria", "nombre", "posicion" FROM "Jugador";
DROP TABLE "Jugador";
ALTER TABLE "new_Jugador" RENAME TO "Jugador";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
