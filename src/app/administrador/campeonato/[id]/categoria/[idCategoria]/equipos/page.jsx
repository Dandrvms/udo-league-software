import EquiposList from "@/app/components/EquiposList"
import { prisma } from "@/libs/prisma"
import SideBar from "@/app/components/sideBar";
export default async function Equipos({ params }) {

  const { id, idCategoria } = await params

  const categoria = await prisma.categoria.findUnique({
    where: {
      id: Number(idCategoria)
    },
    include: {
      equipos: {
        include: {
          jugadores: true
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
        <EquiposList categoria={categoria} />
      </div>
    </div>
  )
}