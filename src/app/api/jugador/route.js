import { NextResponse } from "next/server"
import { prisma } from "@/libs/prisma"

export async function POST(request){
    const body = await request.json()

    const res = await prisma.jugador.createMany({
        data: body.jugadores
    })

    return NextResponse.json(res)
}

// export async function GET()