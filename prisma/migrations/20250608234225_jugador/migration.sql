-- CreateTable
CREATE TABLE "Jugador" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "idEquipo" INTEGER NOT NULL,
    "idCategoria" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "edad" INTEGER NOT NULL,
    "posicion" TEXT NOT NULL,
    "dorsal" INTEGER NOT NULL,
    CONSTRAINT "Jugador_idEquipo_fkey" FOREIGN KEY ("idEquipo") REFERENCES "Equipo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
