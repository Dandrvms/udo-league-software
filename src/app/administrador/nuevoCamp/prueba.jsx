"use client";

export default function Formulario() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const datos = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/administrador/api/campeonato', {
        method: 'POST',
        body: JSON.stringify(datos),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      const resultado = await response.json();
      console.log("Datos guardados:", resultado);

    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <form 
        onSubmit={handleSubmit} 
        className="p-6 rounded-lg  w-full max-w-md space-y-4 mt-10
        items-left" 
      >
        <h2 className="text-2xl font-semibold text-gray-700 text-left">Registro de Campeonato</h2>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-600">Nombre:</label>
          <input
            type="text"
            name="nombre"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-600">Categorías:</label>
          <select
            name="categorias"
            className="px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 w-20"
          >
            {Array.from({ length: 4 }, (_, i) => 1 + i).map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>

        

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition w-20"
        >
          Enviar
        </button>
      </form>
    </div>
  );



}