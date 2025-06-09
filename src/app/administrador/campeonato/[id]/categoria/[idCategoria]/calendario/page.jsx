import CalendarioC from "@/app/components/CalendarioC"
import SideBar from "@/app/components/sideBar";
import {prisma} from "@/libs/prisma"
export default async function CalendarioPage({ params }) {

  const { id, idCategoria } = await params
  
  const categoria = await prisma.categoria.findUnique({
    where: {
      id: Number(idCategoria)
    },
    include: {
      jornadas: {
        include: {
          local: true,
          visitante: true
        }
      }
    }
  })


  return (
  <div className="flex">
    <div className="w-64"> {/* Sidebar con ancho fijo */}
      <SideBar categoria={categoria} />
    </div>
    <div className="flex-1"> {/* Tabla ocupa el resto */}
      <CalendarioC categoria={categoria}/>
    </div>
  </div>
)

}