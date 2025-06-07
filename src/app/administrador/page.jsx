"use client";
import {useRouter} from "next/navigation";

import ListaCampeonatos from "@/app/components/ListaCampeonatos";
export default function AdministradorPage() {
    const router = useRouter();

    const handleCreateCampeonato = () => {
        router.push("/administrador/campeonato/nuevo");
    };

    return (
        <>
            <div className="px-5">
                <div className="mt-5 flex justify-between font-semibold text-xl text-gray-800 border-b-2 border-gray-400 pb-2 tracking-wide hover:text-gray-600 transition duration-300">Mis Campeonatos</div>

                <div >
                    
                        <ListaCampeonatos camps={[]} />
                    
                </div>
                <div>
                    <button className="cursor-pointer mt-5 bg-emerald-600 text-white px-5 py-3 rounded-lg shadow-md font-medium tracking-wide hover:bg-emerald-700 hover:scale-104 transition duration-200"
                        onClick={handleCreateCampeonato}
                    >
                        Crear Campeonato
                    </button>
                </div>
            </div>

        </>
    )
}