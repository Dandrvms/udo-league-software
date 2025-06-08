import { NextResponse } from "next/server"
import { prisma } from "@/libs/prisma"

export async function POST(request){
    const body = await request.json()
    

    const res = await prisma.equipo.createMany({
        data: body.equipos
    })

    return NextResponse.json("HAHA")
}