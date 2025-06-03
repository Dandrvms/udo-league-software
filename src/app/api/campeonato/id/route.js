import { NextRequest } from "next/server";
import { prisma } from "@/libs/prisma";


export async function GET(request, { params }) {
    const campeonato = await prisma.campeonato.findUnique({
        where: {
            id: Number(params.id),
        },
    });

    return NextRequest.json(campeonato);
}

export async function PUT(request, { params }) {
    const datos = await request.json();
    const campeonatoActualizado = await prisma.campeonato.update({
        where: {
            id: Number(params.id),
        },
        datos:datos,
    });
    return NextRequest.json(campeonatoActualizado);
}

export async function DELETE(request, { params }) {
    try {
        const campeonatoEliminado = await prisma.campeonato.delete({
        where: {
            id: Number(params.id),
        },
    });
    return NextRequest.json(campeonatoEliminado);

    } catch (error) {
        return NextRequest.json(error.message)
    }
}

