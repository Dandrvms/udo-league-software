/*
  Warnings:

  - You are about to drop the `Calendario` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `idCategoria` to the `Jornada` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Calendario_idCategoria_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Calendario";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Jornada" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "jornada" INTEGER NOT NULL,
    "idLocal" INTEGER NOT NULL,
    "idVisitante" INTEGER NOT NULL,
    "idCategoria" INTEGER NOT NULL,
    CONSTRAINT "Jornada_idCategoria_fkey" FOREIGN KEY ("idCategoria") REFERENCES "Categoria" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Jornada_idLocal_fkey" FOREIGN KEY ("idLocal") REFERENCES "Equipo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Jornada_idVisitante_fkey" FOREIGN KEY ("idVisitante") REFERENCES "Equipo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Jornada" ("id", "idLocal", "idVisitante", "jornada") SELECT "id", "idLocal", "idVisitante", "jornada" FROM "Jornada";
DROP TABLE "Jornada";
ALTER TABLE "new_Jornada" RENAME TO "Jornada";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
