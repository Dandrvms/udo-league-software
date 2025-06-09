// app/campeonato/[id]/page.js
import { prisma } from "@/libs/prisma";
import InfoCampeonato from "@/app/components/infocampeonato";


export default async function CampeonatoPage({ params }) {
  const { id } = await params;
  const campeonato = await prisma.campeonato.findUnique({
    where: { id: Number(id) },
    include: {
      categorias: {
        include: {
          equipos: true
        }
      }
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
       
        <div className="flex-1 px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Campeonato {campeonato.nombre}</h1>
              <p className="text-gray-600 mt-1">Detalles del campeonato</p>
            </div>
            <div className="mt-3 sm:mt-0 flex space-x-3">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                Editar
              </button>
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                Eliminar
              </button>
            </div>
          </div>

          <div className="mt-5">
            <InfoCampeonato campeonato={campeonato} />
          </div>
        </div>
      </div>
    </div>
  );
}