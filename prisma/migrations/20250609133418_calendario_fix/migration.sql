-- CreateTable
CREATE TABLE "Calendario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "idCategoria" INTEGER NOT NULL,
    "jornada" INTEGER NOT NULL,
    "fecha" DATETIME,
    "local" INTEGER NOT NULL,
    "visitante" INTEGER NOT NULL,
    "estado" TEXT NOT NULL DEFAULT 'pendiente',
    CONSTRAINT "Calendario_idCategoria_fkey" FOREIGN KEY ("idCategoria") REFERENCES "Categoria" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Calendario_idCategoria_key" ON "Calendario"("idCategoria");
