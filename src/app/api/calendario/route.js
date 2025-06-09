import { NextResponse } from "next/server"
import { prisma } from "@/libs/prisma"

export async function POST(request){
    
    const body = await request.json()
    console.log(body)
    // Crear el calendario con los datos recibidos
    // const calendario = await prisma.calendario.create({
    //     data: {
    //         idCampeonato: body.idCampeonato,
    //         idCategoria: body.idCategoria,
    //         jornada: body.jornada,
    //         local: body.local,
    //         visitante: body.visitante,
    //     }
    // })

    return NextResponse.json("HAHA")

}