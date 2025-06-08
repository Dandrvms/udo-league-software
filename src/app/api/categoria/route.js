import { NextResponse } from "next/server";
import { prisma } from '@/libs/prisma';

export async function GET() {
    const categorias = await prisma.categoria.findMany();
    return NextResponse.json(categorias)
}

export async function POST(request) {
    const {idCampeonato, nombre, nEquipos}= await request.json();
    const nuevaCategoria = await prisma.categoria.create({
        data: {
            idCampeonato: idCampeonato,
            nombre: nombre,
            nEquipos: nEquipos
        }
    });
    return NextResponse.json(nuevaCategoria)
}