"use client"

import { useState, useEffect } from "react";
import Loader from "@/app/components/Loader";
import {useRouter} from "next/navigation";

export default function ListaCampeonatos({ camps }) {
    const [campeonatos, setCampeonatos] = useState(camps); 
    const [cargando, setCargando] = useState(true);
    const [hoveredCard, setHoveredCard] = useState(null);
    const router = useRouter();
    const refreshCampeonatos = async () => {
        setCargando(true);
        try {
            const res = await fetch("/api/campeonato");
            const data = await res.json();
            setCampeonatos(data);
        } catch (error) {
            console.error("Error al cargar campeonatos:", error);
        } finally {
            setCargando(false);
        }
    };

    useEffect(() => {
        refreshCampeonatos();
    }, []);

    const getEstadoColor = (estado) => {
        switch(estado) {
            case 'activo': return 'bg-green-100 text-green-800';
            case 'finalizado': return 'bg-blue-100 text-blue-800';
            case 'pendiente': return 'bg-yellow-100 text-yellow-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const handleCrearCampeonato = () => {
        router.push("/administrador/campeonato/nuevo");
    };

    if (cargando) return <Loader/>;

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 flex items-center">
                        
                        Campeonatos
                    </h1>
                    <p className="mt-2 text-gray-600">
                        Administra todos los campeonatos de tu organización
                    </p>
                </div>
                
                <button 
                    onClick={handleCrearCampeonato}
                    className="cursor-pointer mt-4 md:mt-0 flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm transition duration-200 ease-in-out transform hover:scale-[1.02]"
                >
                    
                    Crear nuevo campeonato
                </button>
            </div>

            {campeonatos.length === 0 ? (
                <div className="text-center py-16 bg-white rounded-xl shadow-sm border border-gray-200">
                   
                    <h3 className="mt-4 text-xl font-medium text-gray-900">No hay campeonatos</h3>
                    <p className="mt-2 text-gray-500 max-w-md mx-auto">
                        Aún no has creado ningún campeonato. Empieza creando tu primer torneo.
                    </p>
                    <div className="mt-6">
                        <button
                            onClick={handleCrearCampeonato}
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            
                            Crear campeonato
                        </button>
                    </div>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {campeonatos.map((campeonato) => (
                        <div
                            key={campeonato.id}
                            className={`relative bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transition-all duration-300 transform ${
                                hoveredCard === campeonato.id 
                                    ? 'ring-2 ring-indigo-500 scale-105 shadow-lg z-10' 
                                    : 'hover:shadow-lg hover:scale-[1.03]'
                            }`}
                            onClick={() => window.location.href = `/administrador/campeonato/${campeonato.id}`}
                            onMouseEnter={() => setHoveredCard(campeonato.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div className="p-6">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-lg font-semibold text-gray-900 truncate">
                                        {campeonato.nombre}
                                    </h3>
                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getEstadoColor(campeonato.estado)}`}>
                                        {campeonato.estado || 'activo'}
                                    </span>
                                </div>
                                
                                <div className="mt-4 flex items-center text-sm text-gray-500">
                                    <p>
                                        {campeonato.fechaInicio 
                                            ? `Inicio: ${new Date(campeonato.fechaInicio).toLocaleDateString()}` 
                                            : 'Sin fecha definida'}
                                    </p>
                                </div>
                                
                                {/* <div className="mt-2 flex items-center text-sm text-gray-500">
                                    <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                    </svg>
                                    <p>
                                        {campeonato.categorias.length || '0'} equipos
                                    </p>
                                </div> */}
                                
                                <div className="mt-5">
                                    <div className="relative pt-1">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <span className="text-xs font-semibold inline-block text-indigo-600">
                                                    Progreso
                                                </span>
                                            </div>
                                            <div className="text-right">
                                                <span className="text-xs font-semibold inline-block text-indigo-600">
                                                    {campeonato.progreso || '0'}%
                                                </span>
                                            </div>
                                        </div>
                                        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-indigo-200">
                                            <div 
                                                style={{ width: `${campeonato.progreso || 0}%` }} 
                                                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500"
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="bg-gray-50 px-6 py-3 border-t border-gray-200">
                                <div className="text-sm flex justify-between">
                                    <span className="text-gray-500">Ver detalles</span>
                                    <span className="text-indigo-600 font-medium">→</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}