// components/sideBar.js
"use client"
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import Link from "next/link";
export default function SideBar({ campeonatoId }) {

    const pathname = usePathname()

    const selected = useMemo(() => {
        if (pathname.includes("/equipos")) return "equipos";
        if (pathname.includes("/calendario")) return "calendario";
        if (pathname.includes("/resultados")) return "resultados";
        return "info";
    }, [pathname])
  

    return (
        <div className="w-full sm:w-64 bg-white shadow-md h-full min-h-screen">
            <div className="p-4 border-b border-gray-200">
                <h1 className="font-bold text-xl text-blue-700">Gestor de Torneos</h1>
            </div>

            <div className="p-2">
                <div className="mt-4">
                    <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 mb-2">Administrar Campeonato</h2>

                    <nav className="space-y-1">
                        <Link href={`/administrador/campeonato/${campeonatoId}`} className={`flex items-center px-3 py-2 rounded-md font-medium ${selected === "info" ? "bg-blue-50 text-blue-700" : "text-gray-700"}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            Información General
                       
                        </Link>
                        {/* <a href="#" className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              Categorías
            </a> */}
                        <Link href="#" className={`flex items-center px-3 py-2 rounded-md font-medium ${selected === "equipos" ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:bg-gray-100"}`}>                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            Equipos
                        
                        </Link>
                        <Link href={`/administrador/campeonato/${campeonatoId}/calendario`} className={`flex items-center px-3 py-2 rounded-md font-medium ${selected === "calendario" ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:bg-gray-100"}`}>                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            Calendario
                        
                        </Link>
                        <Link href={`/administrador/campeonato/${campeonatoId}/resultados`} className={`flex items-center px-3 py-2 rounded-md font-medium ${selected === "resultados" ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:bg-gray-100"}`}>                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                            Resultados
                        
                        </Link>
                    </nav>
                </div>

                <div className="mt-8">
                    <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 mb-2">Acciones Rápidas</h2>

                    <div className="space-y-2">
                        {/* <button className="w-full flex items-center justify-center px-3 py-2 bg-green-600 text-white rounded-md font-medium hover:bg-green-700 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Nueva Categoría
            </button> */}
                        <button className="w-full flex items-center justify-center px-3 py-2 bg-purple-600 text-white rounded-md font-medium hover:bg-purple-700 transition">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            Publicar Resultados
                        </button>
                    </div>
                </div>

                <div className="mt-8 p-3 bg-blue-50 rounded-md">
                    <p className="text-sm text-blue-700">
                        <span className="font-semibold">Creado:</span> {new Date().toLocaleDateString()}
                    </p>
                    <p className="text-sm text-blue-700 mt-1">
                        <span className="font-semibold">ID:</span> {campeonatoId}
                    </p>
                </div>
            </div>
        </div>
    );
}