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
                <div className="mt-5 justify-between  font-bold text-xl border-b">Mis campeonatos</div>
                <div >
                    
                        <ListaCampeonatos camps={[]} />
                    
                </div>
                <div>
                    <button className="cursor-pointer mt-5 bg-emerald-500 text-white px-4 py-2 rounded-md hover:bg-emerald-600 transition duration-300"
                        onClick={handleCreateCampeonato}
                    >
                        Crear Campeonato
                    </button>
                </div>
            </div>

        </>
    )
}