// app/campeonato/[id]/equipos/cargar/page.js
import { prisma } from "@/libs/prisma";
import SideBar from "@/app/components/sideBar";
import FileUploadArea from "@/app/components/fileUploadArea";

export default async function CargarEquiposPage({ params }) {
    const { idCategoria } = await params;
    const categoria = await prisma.categoria.findUnique({
        where: { id: Number(idCategoria) },
    });

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="flex">
                {/* <SideBar campeonatoId={id} /> */}
                <div className="flex-1 px-4 py-6 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">Cargar Equipos</h1>
                            <p className="text-gray-600 mt-1">Categoría: {categoria.nombre}</p>
                        </div>
                    </div>

                    <div className="">
                        {/* Panel de carga principal */}
                        <div className="lg:col-span-2">
                            <div className="bg-white shadow rounded-lg overflow-hidden">
                                <div className="px-6 py-4 border-b border-gray-100">
                                    <h2 className="text-lg font-semibold text-gray-800">Subir archivo de equipos</h2>
                                </div>

                                <div className="p-6">
                                    <FileUploadArea campeonato={categoria.idCampeonato} categoria={categoria.id}/>

                                    <div className="mt-8">
                                        <h3 className="text-md font-medium text-gray-700 mb-3">Instrucciones:</h3>
                                        <ul className="list-disc pl-5 text-gray-600 space-y-1">
                                            <li>El archivo debe estar en formato Excel</li>
                                            <li>La primera fila debe contener los encabezados: nombre, abreviatura, email, telefono y logo.</li>
                                            <li>El tamaño máximo del archivo es de 5MB</li>
                                            
                                        </ul>

                                        <div className="mt-4 flex items-center text-sm text-blue-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                            </svg>
                                            <a href="/plantilla-equipos.xlsx" download className="hover:underline">
                                                Descargar plantilla de ejemplo
                                            </a>
                                        </div>
                                    </div>
                                </div>

                               
                            </div>
                        </div>

                        {/* Panel de resumen */}
                        {/* <div>
              <div className="bg-white shadow rounded-lg overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100">
                  <h2 className="text-lg font-semibold text-gray-800">Resumen de carga</h2>
                </div>
                
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="bg-blue-100 p-3 rounded-full mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Archivo cargado</p>
                        <p className="font-medium">equipos_torneo_2023.csv</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="bg-green-100 p-3 rounded-full mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Equipos detectados</p>
                        <p className="font-medium">24 equipos</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="bg-purple-100 p-3 rounded-full mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Categorías detectadas</p>
                        <p className="font-medium">3 categorías</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h3 className="text-md font-medium text-gray-700 mb-3">Progreso de validación:</h3>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-green-600 h-2.5 rounded-full" style={{width: '75%'}}></div>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">24 de 32 registros validados</p>
                  </div>
                  
                  <div className="mt-6 p-3 bg-yellow-50 rounded-md border border-yellow-200">
                    <div className="flex">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <p className="text-sm text-yellow-700">
                        Se encontraron 8 registros con problemas. Revise antes de continuar.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
                    </div>

                    {/* Vista previa de datos */}
                    
                </div>
            </div>
        </div>
    );
}