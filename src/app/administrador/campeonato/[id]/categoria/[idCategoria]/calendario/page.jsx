"use client";
import { use, useEffect, useState } from "react";

export default function CalendarioPage({ params }) {
  const { id, idCategoria } = use(params);
  const [calendario, setCalendario] = useState(null);
  const [mostrarPanel, setMostrarPanel] = useState(false);
  const [formatoSeleccionado, setFormatoSeleccionado] = useState("");
  const [opcionesFormato, setOpcionesFormato] = useState([]);
  const [nEquipos, setNEquipos] = useState(null);
  const [equipos, setEquipos] = useState([]);

  // Obtener datos reales de la API
  useEffect(() => {
    const fetchDatos = async () => {
      try {
        // 1. Obtener datos de la categoría (incluye equipos)
        const res = await fetch(`/api/categoria/${idCategoria}`);
        if (!res.ok) throw new Error("No se pudo obtener la categoría");
        const data = await res.json();
        setCalendario(data.calendario); // null si no existe, objeto si ya hay calendario
        setNEquipos(data.nEquipos);     // cantidad de equipos en la categoría
        setEquipos(data.equipos);       // array de equipos [{id, nombre}, ...]
      } catch (error) {
        setCalendario(null);
        setNEquipos(null);
        setEquipos([]);
        alert("Error al obtener datos de la categoría");
      }
    };
    fetchDatos();
  }, [idCategoria]);

  // Opciones de formato según cantidad de equipos
  useEffect(() => {
    if (nEquipos) {
      let opciones = [];
      if (nEquipos <= 6) {
        opciones = ["Liga"];
      } else if (nEquipos == 7 || nEquipos == 9 || nEquipos == 11) {
        opciones = ["Liga", "Liga y Semifinal"];
      } else if (nEquipos == 8 || nEquipos == 10) {
        opciones = ["Liga", "Liga y Semifinal", "2 Grupos y Semifinal"];
      } else if (nEquipos == 12) {
        opciones = ["Liga", "Liga y Cuartos", "2 Grupos y Semifinal"];
      } else if (nEquipos == 13 || nEquipos == 15) {
        opciones = ["Liga", "Liga y Cuartos de final"];
      } else if (nEquipos == 14 || nEquipos == 16) {
        opciones = ["Liga", "Liga y Cuartos", "4 Grupos y Cuartos de final"];
      }
      setOpcionesFormato(opciones);
    }
  }, [nEquipos]);

  // Algoritmo de emparejamiento (round robin)
  function generarCalendario(equiposArr) {
    let N = equiposArr.length;
    let equipos = [...equiposArr];
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
        if (local.nombre === "Descansa") {
          partidos.push({ jornada, local: null, visitante: visitante.id, descanso: visitante.nombre });
        } else if (visitante.nombre === "Descansa") {
          partidos.push({ jornada, local: local.id, visitante: null, descanso: local.nombre });
        } else {
          partidos.push({ jornada, local: local.id, visitante: visitante.id });
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
      // 1. Generar calendario con los equipos reales
      const calendarioGenerado = generarCalendario(equipos);

      // 2. Aplanar los partidos y preparar para guardar en la BD
      const partidos = calendarioGenerado.flat().map(partido => ({
        idCampeonato: id,
        idCategoria,
        jornada: partido.jornada,
        local: partido.local,
        visitante: partido.visitante,
        // fecha: null, // Puedes asignar fechas si lo deseas
        // estado: "pendiente" // Se asigna por defecto en la BD
      }));

      // 3. Guardar en la base de datos
      const res = await fetch(`/api/calendario`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ partidos }),
      });
      if (!res.ok) throw new Error("No se pudo guardar el calendario");
      const data = await res.json();
      setCalendario(data.calendario); // Actualiza el estado con el calendario generado
      setMostrarPanel(false);
      alert("¡Calendario generado exitosamente!");
    } catch (error) {
      alert("Error al generar el calendario");
    }
  };

  return (
    <div className="flex-1 p-6">
      <h1 className="text-2xl font-bold mb-4">
        Calendario de la Categoría {idCategoria}
      </h1>
      <p>
        Contenido del calendario para el campeonato {id} y categoría {idCategoria}.
      </p>

      {calendario ? (
        <div className="mt-6">
          <p className="text-green-700 font-semibold">Ya existe un calendario generado.</p>
          {/* Aquí puedes mostrar el calendario existente */}
        </div>
      ) : (
        <div className="mt-6">
          {!mostrarPanel ? (
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              onClick={() => setMostrarPanel(true)}
            >
              Generar calendario
            </button>
          ) : (
            <div className="mt-4">
              <h2 className="text-lg font-medium mb-2">Selecciona el formato de competición:</h2>
              <div className="space-y-2">
                {opcionesFormato.map((opcion) => (
                  <label key={opcion} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="formato"
                      value={opcion}
                      checked={formatoSeleccionado === opcion}
                      onChange={() => setFormatoSeleccionado(opcion)}
                      className="text-blue-600 border-gray-300 focus:ring-blue-500 scale-150"
                    />
                    <span>{opcion}</span>
                  </label>
                ))}
              </div>
              <button
                className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                disabled={!formatoSeleccionado}
                onClick={handleGenerarCalendario}
              >
                Confirmar y generar
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}