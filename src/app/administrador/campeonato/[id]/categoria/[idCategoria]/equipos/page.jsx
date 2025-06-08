import EquiposList from "@/app/components/EquiposList"
import { prisma } from "@/libs/prisma"

export default async function Equipos({params}){

  const {id, idCategoria} = await params
  console.log("idCampeonato: ", id)
  console.log("idCategoria: ", idCategoria)

  const categoria = await prisma.categoria.findUnique({
    where: {
      id: Number(idCategoria)
    },
    include: {
      equipos: true
    }
  })
  console.log(categoria)
  return(
    <EquiposList categoria={categoria}/>
  )}