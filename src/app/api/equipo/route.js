import { NextResponse } from "next/server"
import { prisma } from "@/libs/prisma"

export async function POST(request){
    const body = await request.json()
    
    const res = await prisma.equipo.createMany({
        data: body.equipos
    })

    return NextResponse.json(res)
}


export async function GET(request){
    const idCategoria = request.headers.get("idCategoria")

    const res = await prisma.equipo.findMany({
        where: {
            idCategoria: Number(idCategoria)
        }
    })

    return NextResponse.json(res)
}