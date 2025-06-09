import { prisma } from "@/libs/prisma"
import { NextResponse } from "next/server"
export async function POST(request){
    const body = await request.json()
        console.log(body)
        try{
        const jornada = await prisma.jornada.createMany({
            data: body.partidos
        })
        return NextResponse.json(jornada)
    }catch (err) {return NextResponse.json({ error: err.message }, { status: 500 });}
    
        
}