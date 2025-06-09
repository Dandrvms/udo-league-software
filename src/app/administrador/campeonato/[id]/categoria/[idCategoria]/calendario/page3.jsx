
export default function CalendarioPage({ params }) {
    const { id, idCategoria } = params;

    return (
        <div className="flex-1 p-6">
            <h1 className="text-2xl font-bold mb-4">Calendario de la Categoría {idCategoria}</h1>
            <p>Contenido del calendario para el campeonato {id} y categoría {idCategoria}.</p>
            {/* Aquí puedes agregar el componente de calendario o cualquier otro contenido relevante */}
        </div>
    );
}