-- CreateTable
CREATE TABLE "Jornada" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "jornada" INTEGER NOT NULL,
    "idLocal" INTEGER NOT NULL,
    "idVisitante" INTEGER NOT NULL,
    CONSTRAINT "Jornada_idLocal_fkey" FOREIGN KEY ("idLocal") REFERENCES "Equipo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Jornada_idVisitante_fkey" FOREIGN KEY ("idVisitante") REFERENCES "Equipo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
