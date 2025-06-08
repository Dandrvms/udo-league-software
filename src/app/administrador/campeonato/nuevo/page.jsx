"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Formulario() {
  const router = useRouter();
  const [categorias, setCategorias] = useState(1); // Valor por defecto
  const [formData, setFormData] = useState({
    nombreCompeticion: "",
    categorias: [],
  });

  // Maneja cambios en el input principal
  const handleChangeCompeticion = (e) => {
    setFormData({ ...formData, nombreCompeticion: e.target.value });
  };

  // Maneja cambios en la cantidad de categorías
  const handleChangeCategorias = (e) => {
    const cantidad = parseInt(e.target.value, 10);
    setCategorias(cantidad);

    // Generar estructura para las categorías
    setFormData({
      ...formData,
      categorias: Array.from({ length: cantidad }, (_, index) => ({
        nombreCategoria: "",
        nEquipos: 4, // Valor por defecto
      })),
    });
  };

  // Maneja cambios en los formularios dinámicos
  const handleChangeCategoria = (index, campo, valor) => {
    const nuevasCategorias = formData.categorias.map((categoria, i) =>
      i === index ? { ...categoria, [campo]: valor } : categoria
    );
    setFormData({ ...formData, categorias: nuevasCategorias });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Enviar la competición y obtener el ID generado
      const resCompeticion = await fetch("/api/campeonato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre: formData.nombreCompeticion }),
      });

      const competicionGuardada = await resCompeticion.json();
      const competicionId = competicionGuardada.id;

      // Enviar cada categoría con el ID de la competición
      await Promise.all(
        formData.categorias.map(async (categoria) => {
        await fetch("/api/categoria", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
            idCampeonato: competicionId, // Enviar ID correcto
            nombre: categoria.nombreCategoria,
            nEquipos: parseInt(categoria.nEquipos, 10),
      }),
    });
  })
);


      console.log("Datos enviados correctamente!");
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
    router.back()
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md space-y-4">
        <h2 className="text-2xl font-semibold text-gray-700 text-center">Registro de Campeonato</h2>

        {/* Nombre de la competición */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-600">Nombre de la competición:</label>
          <input
            type="text"
            name="nombreCompeticion"
            className="text-black w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            value={formData.nombreCompeticion}
            onChange={handleChangeCompeticion}
            required
          />
        </div>

        {/* Selección de cantidad de categorías */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-600">Cantidad de categorías:</label>
          <select
            name="cantidadCategorias"
            className="text-black w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            value={categorias}
            onChange={handleChangeCategorias}
          >
            {Array.from({ length: 4 }, (_, i) => 1 + i).map((num) => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
        </div>

        {/* Formularios dinámicos para categorías */}
        {formData.categorias.map((categoria, index) => (
          <div key={index} className="border p-4 rounded-md bg-gray-50">
            <label className="text-sm font-medium text-gray-600">Nombre de la categoría {index + 1}:</label>
            <input
              type="text"
              className="text-black w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              value={categoria.nombreCategoria}
              onChange={(e) => handleChangeCategoria(index, "nombreCategoria", e.target.value)}
              required
            />

            <label className="text-sm font-medium text-gray-600 mt-2">Cantidad de equipos:</label>
            <select
              className="text-black w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              value={categoria.nEquipos}
              onChange={(e) => handleChangeCategoria(index, "equipos", e.target.value)}
            >
              {Array.from({ length: 13 }, (_, i) => 4 + i).map((num) => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>
        ))}

        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
          Guardar
        </button>
      </form>
    </div>
  );
}