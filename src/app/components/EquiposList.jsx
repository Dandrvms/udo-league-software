"use client"
import { useRouter } from "next/navigation"

export default function EquiposList({ categoria }) {
    const router = useRouter()
    return (
        <>
        <div className="bg-white m-3 ">
                <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-800">Equipos de la categoría {categoria.nombre}</h3>
                </div>
            {categoria.equipos.length === 0 ? (
                <>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200 shadow-xl">
                            <thead className="bg-blue-300 ">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Logo</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Abreviatura</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Categoria</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Telefono</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">


                                <tr className="hover:bg-blue-50">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="bg-blue-100 rounded-full p-2 mr-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                                                </svg>
                                            </div>
                                            {/* <div className="font-medium  text-gray-400 text-sm">vacío</div> */}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-gray-400 text-sm">
                                        vacío
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap  text-gray-400 text-sm">
                                        vacío
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-gray-400 text-sm">
                                        vacío
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap  text-gray-400 text-sm">
                                        vacío
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-gray-400 text-sm">
                                        vacío
                                    </td>
                                </tr>



                                {/* {(campeonato.categorias ?? []).map(categoria => (
                                            <tr key={categoria.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                            <div className="bg-blue-100 rounded-full p-2 mr-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                                                </svg>
                                            </div>
                                            <div className="font-medium text-gray-900">{categoria.nombre}</div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-gray-900">{categoria.equipos}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                            Activa
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            <button className="text-blue-600 hover:text-blue-900 mr-3">Editar</button>
                                            <button className="text-red-600 hover:text-red-900">Eliminar</button>
                                        </td>
                                            </tr>
                                            ))} */}
                            </tbody>
                        </table>
                    </div>
                    <div className="flex mt-20 justify-center">
                    <button className=" flex items-center justify-center px-3 py-2 bg-green-600 cursor-pointer text-white rounded-md font-medium hover:bg-green-700 transition hover:scale-110"
                    onClick={() => router.push(`/administrador/campeonato/${categoria.idCampeonato}/categoria/${categoria.id}/equipos/cargar`)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        Cargar Equipos
                    </button>
                    </div>
                </>
            ) : (

                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-blue-300">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">Logo</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">Nombre</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">Abreviatura</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">Categoria</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">Email</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">Telefono</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {categoria.equipos.map(equipo => (
                                <tr className="hover:bg-blue-50" key={equipo.id}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="bg-blue-100 rounded-full p-2 mr-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                                                </svg>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap ">
                                        <div className=" text-gray-600 text-sm">{equipo.nombre}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap  text-gray-600 text-sm">
                                        {equipo.abreviatura}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-gray-600 text-sm">
                                        {categoria.nombre}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-gray-600 text-sm">
                                        {equipo.email}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-gray-600 text-sm">
                                        {equipo.telefono}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
            </div>
        </>
    )
}