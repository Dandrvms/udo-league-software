import JugadoresList from "@/app/components/JugadoresList"
import { prisma } from "@/libs/prisma"

export default async function Jugadores({params}){

  const {idEquipo} = await params

  const equipo = await prisma.equipo.findUnique({
    where: {
      id: Number(idEquipo)
    },
    include: {
      jugadores: true
    }
  })
 
  return(
    <JugadoresList equipo={equipo}/>
  )}