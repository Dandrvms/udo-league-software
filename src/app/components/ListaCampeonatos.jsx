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
                    <div key={campeonato.id} className="relative bg-gray-100 text-gray-800 shadow-md p-6 rounded-lg cursor-pointer overflow-hidden transition duration-200 hover:scale-105 hover:font-bold"
                        
                    onClick={() => window.location.href = `/administrador/campeonato/${campeonato.id}`}
                    >
                        {/* <span className="text-gray-600 text-xs px-2">{campeonato.id}</span> */}
                        <span className="text-sm font-medium">{campeonato.nombre}</span>
                    </div>
                ))}
            
        </div>
    );
}
