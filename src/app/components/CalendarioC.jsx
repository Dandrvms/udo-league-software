"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loader from "@/app/components/Loader";

export default function CalendarioC({ categoria }) {
    const router = useRouter();
    const [mostrarPanel, setMostrarPanel] = useState(false);
    const [formatoSeleccionado, setFormatoSeleccionado] = useState("");
    const [opcionesFormato, setOpcionesFormato] = useState([]);
    const [nEquipos, setNEquipos] = useState(categoria?.nEquipos || 0);
    const [equipos, setEquipos] = useState(categoria?.equipos || []);
    const [cargando, setCargando] = useState(false);
    const [error, setError] = useState(null);

    // Obtener datos reales de la API si no vienen en la categoría
    useEffect(() => {
        const cargarEquipos = async () => {
            if (!categoria?.equipos) {
                try {
                    setCargando(true);
                    const res = await fetch(`/api/equipo`,{
                        headers: {
                            "idCategoria": categoria.id
                        }
                    });
                    if (!res.ok) throw new Error("Error al cargar equipos");
                    const data = await res.json();
                    setEquipos(data);
                    setNEquipos(data.length);
                } catch (err) {
                    setError("No se pudieron cargar los equipos");
                    console.error(err);
                } finally {
                    setCargando(false);
                }
            }
        };

        cargarEquipos();
    }, [categoria]);

    // Opciones de formato según cantidad de equipos
    useEffect(() => {
        if (nEquipos > 0) {
            let opciones = [];
            if (nEquipos <= 6) {
                opciones = ["Liga"];
            } else if (nEquipos === 7 || nEquipos === 9 || nEquipos === 11) {
                opciones = ["Liga", "Liga y Semifinal"];
            } else if (nEquipos === 8 || nEquipos === 10) {
                opciones = ["Liga", "Liga y Semifinal", "2 Grupos y Semifinal"];
            } else if (nEquipos === 12) {
                opciones = ["Liga", "Liga y Cuartos", "2 Grupos y Semifinal"];
            } else if (nEquipos === 13 || nEquipos === 15) {
                opciones = ["Liga", "Liga y Cuartos de final"];
            } else if (nEquipos === 14 || nEquipos === 16) {
                opciones = ["Liga", "Liga y Cuartos", "4 Grupos y Cuartos de final"];
            }
            setOpcionesFormato(opciones);
        }
    }, [nEquipos]);

    // Algoritmo de emparejamiento (round robin) mejorado
    function generarCalendario(equiposArr) {
        if (!Array.isArray(equiposArr)) {
            throw new Error("equiposArr debe ser un array");
        }
        
        // Crear copia para no modificar el original
        let equipos = [...equiposArr];
        let N = equipos.length;
        
        // Si es impar, agregar un equipo ficticio
        if (N % 2 !== 0) {
            equipos.push({ id: null, nombre: "Descansa" });
            N += 1;
        }
        
        const calendario = [];
        for (let jornada = 1; jornada < N; jornada++) {
            const partidos = [];
            for (let i = 0; i < N / 2; i++) {
                const local = equipos[i];
                const visitante = equipos[N - 1 - i];
                
                // Si alguno es el equipo de descanso
                if (local.nombre === "Descansa") {
                    partidos.push({ 
                        jornada, 
                        local: null, 
                        visitante: visitante.id, 
                        descanso: visitante.nombre 
                    });
                } else if (visitante.nombre === "Descansa") {
                    partidos.push({ 
                        jornada, 
                        local: local.id, 
                        visitante: null, 
                        descanso: local.nombre 
                    });
                } else {
                    partidos.push({ 
                        jornada, 
                        local: local.id, 
                        visitante: visitante.id 
                    });
                }
            }
            calendario.push(partidos);
            // Rotar equipos sin afectar al primero
            equipos.splice(1, 0, equipos.pop());
        }
        return calendario;
    }

    // Función para generar y guardar el calendario
    const handleGenerarCalendario = async () => {
        try {
            setCargando(true);
            setError(null);
            
            // Validar que tenemos equipos
            if (!equipos || equipos.length === 0) {
                throw new Error("No hay equipos para generar el calendario");
            }
            
            // Generar calendario
            const calendarioGenerado = generarCalendario(equipos);
            
            // Aplanar los partidos y preparar para guardar en la BD
            const partidos = calendarioGenerado.flat().map(partido => ({
                jornada: partido.jornada,
                idLocal: partido.local,
                idVisitante: partido.visitante,
                idCategoria: Number(categoria.id)
            }));

            // Guardar en la base de datos
            const res = await fetch(`/api/jornada`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ partidos }),
            });
            
            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.message || "Error al guardar el calendario");
            }
            
            setMostrarPanel(false);
            // Recargar la página para mostrar el nuevo calendario
            router.refresh();
        } catch (error) {
            console.error(error);
            setError(error.message || "Error al generar el calendario");
        } finally {
            setCargando(false);
        }
    };

    const tieneJornadas = categoria?.jornadas?.length > 0;

    return (
        <div className="flex-1 p-6 bg-gray-50 rounded-xl shadow-md">
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">
                        Calendario de {categoria?.nombre || "Categoría"}
                    </h1>
                    <p className="text-gray-600 mt-1">
                        {categoria?.descripcion || "Calendario de partidos"}
                    </p>
                </div>
                
                {!tieneJornadas && !mostrarPanel && (
                    <button
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center"
                        onClick={() => setMostrarPanel(true)}
                        disabled={cargando}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        Generar calendario
                    </button>
                )}
            </div>

            {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex items-center text-red-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        <span className="font-medium">{error}</span>
                    </div>
                </div>
            )}

            {cargando && (
                <Loader/>
            )}

            {tieneJornadas ? (
                <div className="bg-white rounded-xl shadow overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-blue-600 text-white">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Jornada</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Local</th>
                                    <th scope="col" className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">VS</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Visitante</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {categoria.jornadas.map(jornada => (
                                    <tr key={jornada.id} className="hover:bg-blue-50 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center font-medium">
                                                {jornada.jornada}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="bg-gray-100 rounded-full mr-3 w-8 h-8 flex items-center justify-center">
                                                    {jornada.local?.url_logo ? (
                                                        <img 
                                                            src={jornada.local.url_logo} 
                                                            alt={jornada.local.nombre} 
                                                            className="rounded-full w-8 h-8 object-cover"
                                                        />
                                                    ) : (
                                                        <span className="text-xs font-medium text-gray-500">L</span>
                                                    )}
                                                </div>
                                                <p className="font-medium text-gray-800">{jornada.local?.nombre || "Equipo local"}</p>
                                            </div>
                                        </td>
                                        <td className="py-4 whitespace-nowrap text-center text-gray-500">vs</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="bg-gray-100 rounded-full mr-3 w-8 h-8 flex items-center justify-center">
                                                    {jornada.visitante?.url_logo ? (
                                                        <img 
                                                            src={jornada.visitante.url_logo} 
                                                            alt={jornada.visitante.nombre} 
                                                            className="rounded-full w-8 h-8 object-cover"
                                                        />
                                                    ) : (
                                                        <span className="text-xs font-medium text-gray-500">V</span>
                                                    )}
                                                </div>
                                                <p className="font-medium text-gray-800">{jornada.visitante?.nombre || "Equipo visitante"}</p>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ) : mostrarPanel ? (
                <div className="bg-white rounded-xl shadow p-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Configurar calendario</h2>
                    
                    <div className="mb-6">
                        <h3 className="text-lg font-medium text-gray-700 mb-3">Información de la categoría</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <p className="text-sm text-gray-500">Equipos registrados</p>
                                <p className="text-xl font-bold">{equipos.length} equipos</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <p className="text-sm text-gray-500">Formato seleccionado</p>
                                <p className="text-xl font-bold">{formatoSeleccionado || "No seleccionado"}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mb-6">
                        <h3 className="text-lg font-medium text-gray-700 mb-3">Selecciona el formato de competición:</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {opcionesFormato.map((opcion) => (
                                <button
                                    key={opcion}
                                    className={`p-4 border rounded-lg text-left transition-colors ${
                                        formatoSeleccionado === opcion 
                                            ? "border-blue-500 bg-blue-50" 
                                            : "border-gray-300 hover:bg-gray-50"
                                    }`}
                                    onClick={() => setFormatoSeleccionado(opcion)}
                                >
                                    <div className="flex items-center">
                                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 ${
                                            formatoSeleccionado === opcion 
                                                ? "border-blue-500 bg-blue-500" 
                                                : "border-gray-400"
                                        }`}>
                                            {formatoSeleccionado === opcion && (
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            )}
                                        </div>
                                        <span className="font-medium">{opcion}</span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                    
                    <div className="flex justify-end space-x-3">
                        <button
                            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                            onClick={() => setMostrarPanel(false)}
                            disabled={cargando}
                        >
                            Cancelar
                        </button>
                        <button
                            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center"
                            disabled={!formatoSeleccionado || cargando}
                            onClick={handleGenerarCalendario}
                        >
                            {cargando ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Generando...
                                </>
                            ) : (
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Confirmar y generar
                                </>
                            )}
                        </button>
                    </div>
                </div>
            ) : (
                <div className="bg-white rounded-xl shadow p-8 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <h3 className="mt-4 text-xl font-medium text-gray-900">Calendario no generado</h3>
                    <p className="mt-2 text-gray-500">
                        Aún no se ha generado un calendario para esta categoría.
                    </p>
                    <div className="mt-6">
                        <button
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center mx-auto"
                            onClick={() => setMostrarPanel(true)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                            Generar calendario
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}