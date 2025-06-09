import { NextResponse } from "next/server";
import { prisma } from '@/libs/prisma';

export async function GET(request, { params }) {
  const { idCategoria } = await params;

  try {

    // Busca la categoría
    const categoria = await prisma.categoria.findUnique({
        where: { id: Number(idCategoria) },
        include: {
        equipos: true, // Incluye los equipos de la categoría
        jornadas: true
        },
    });

    if (!categoria) {
        return NextResponse.json({ error: "Categoría no encontrada" }, { status: 404 });
    }

    // Busca si ya existe un calendario para esta categoría
    // const calendario = await prisma.calendario.findFirst({
    //     where: { idCategoria: Number(idCategoria) },
    // });

    // return NextResponse.json({
    //     id: categoria.id,
    //     nombre: categoria.nombre,
    //     nEquipos: categoria.nEquipos,
    //     equipos: categoria.equipos.map(e => ({ id: e.id, nombre: e.nombre })),
    //     calendario: calendario ? calendario : null,
    // });

    return NextResponse.json(categoria)
    }
    catch (error) {
    console.error("Error al obtener la categoría:", error);
        return NextResponse.json({ error: "Error al obtener la categoría" }, { status: 500 });
    }
}