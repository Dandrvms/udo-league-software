"use client"
import { useRouter } from "next/navigation"


export default function JugadoresList({ equipo }) {
    const router = useRouter()
    return (
        <>
            <div className="bg-white m-3 ">
                <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-800">Jugadores de {equipo.nombre}</h3>
                </div>
                {equipo.jugadores.length === 0 ? (
                    <>

                        <div className="flex mt-20 justify-center">
                            <p>No hay jugadores cargados</p>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-blue-300">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">Id</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">Nombre</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">Apellido</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">Edad</th>
                                        {/* <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">Categoria</th> */}
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">Posición</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">Dorsal</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {equipo.jugadores.map(jugador => (
                                        <tr className="hover:bg-blue-50" key={jugador.id}>

                                            <td className="px-6 py-4 whitespace-nowrap ">
                                                <div className=" text-gray-600 text-sm">{jugador.id}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap ">
                                                <div className=" text-gray-600 text-sm">{jugador.nombre}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap ">
                                                <div className=" text-gray-600 text-sm">{jugador.apellido}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap  text-gray-600 text-sm">
                                                {jugador.edad}
                                            </td>
                                            {/* <td className="px-6 py-4 whitespace-nowrap text-gray-600 text-sm">
                                        {categoria.nombre}
                                    </td> */}
                                            <td className="px-6 py-4 whitespace-nowrap text-gray-600 text-sm">
                                                {jugador.posicion}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-gray-600 text-sm">
                                                {jugador.dorsal}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                    </>
                )}
            </div>
        </>
    )
}