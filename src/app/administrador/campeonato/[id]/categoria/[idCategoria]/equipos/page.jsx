import EquiposList from "@/app/components/EquiposList"
import { prisma } from "@/libs/prisma"

export default async function Equipos({params}){

  const {id, idCategoria} = await params

  const categoria = await prisma.categoria.findUnique({
    where: {
      id: Number(idCategoria)
    },
    include: {
      equipos: true
    }
  })
 
  return(
    <EquiposList categoria={categoria}/>
  )}