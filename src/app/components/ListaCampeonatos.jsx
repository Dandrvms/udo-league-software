"use client"

import { useState, useEffect } from "react";

export default function ListaCampeonatos({ camps }) {

    const [campeonatos, setCampeonatos] = useState(camps); 

    const refreshCampeonatos = async () => {
        const res = await fetch("/api/campeonato");
        const data = await res.json();
        setCampeonatos(data);
    };

    useEffect(() => {
        refreshCampeonatos();
    }, []);


    return (
        <div className="mt-5 grid grid-cols-4 gap-4">
           
                {campeonatos.map((campeonato) => (
                    <div key={campeonato.id} className="bg-blue-500 text-white border p-4 rounded-md cursor-pointer hover:bg-blue-700 transition duration-300">
                        {/* <span className="text-gray-600 text-xs px-2">{campeonato.id}</span> */}
                        <span className="font-bold text-sm">{campeonato.nombre}</span>
                    </div>
                ))}
            
        </div>
    );
}
