import { NextResponse } from "next/server";
import { prisma } from '@/libs/prisma';

export async function GET() {
    const campeonatos = await prisma.campeonato.findMany({
        include: {
            categorias: true,
        }
    });
    return NextResponse.json(campeonatos)
}

export async function POST(request) {
    try {
        const { nombre } = await request.json();
        const Nuevocampeonato = await prisma.campeonato.create({
            data: {
                nombre
            }
        });
        return NextResponse.json(Nuevocampeonato);
    } catch (error) {
        return NextResponse.json(
            { error: error.message || "Error interno del servidor" },
            { status: 500 }
        );
    }
}