import { prisma } from "@/libs/prisma";
export default async function CampeonatoPage({ params }) {

    const { id } = await params;
    const campeonato = await prisma.campeonato.findUnique({
        where: { id: Number(id) },
    });


    return (
        <div className="px-5">
            <div className="mt-5 justify-between flex font-bold text-xl border-b">
                <span>Campeonato {campeonato.nombre}</span>
                <button>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        className="inline-block align-middle text-gray-500"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 7h11M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2m2 0v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7m3 4v6m4-6v6"
                        />
                    </svg>
                </button>

            </div>
            <div className="mt-5">
                <p>Detalles del campeonato</p>


                {/* Aquí puedes agregar más detalles del campeonato */}
            </div>
        </div>
    );
}