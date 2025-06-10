
import {prisma} from "@/libs/prisma"

import ListaCampeonatos from "@/app/components/ListaCampeonatos";
export default async function AdministradorPage() {
    
    const campeonatos = await prisma.campeonato.findMany({
        include: {
            categorias: true
        }
    })

    return (
        <>
            <div className="px-5">
                <div className="mt-5 flex justify-between font-semibold text-xl text-gray-800 border-b-2 border-gray-400 pb-2 tracking-wide hover:text-gray-600 transition duration-300">Mis Campeonatos</div>

                <div >
                    
                        <ListaCampeonatos camps={campeonatos} />
                    
                </div>
                
            </div>

        </>
    )
}