import Link from 'next/link';

export default function Navbar() {
    return(
        <nav className="navbar py-3 px-6 bg-blue-800 text-white shadow-md">
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold" >
                    <Link href="/">UDO League Software</Link>
                </h1>
                <ul className="flex space-x-4">
                    <li className="relative group transition-all duration-300">
                        <Link href="/" className="text-white group-hover:text-gray-200 group-hover:font-semibold group-hover:tracking-wide transition-all duration-200">
                            Inicio
                        </Link>
                        <div className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-200 group-hover:w-full transition-all duration-300"></div>
                    </li>

                    <li className="relative group transition-all duration-300">
                        <Link href="/administrador" className="text-white group-hover:text-gray-200 group-hover:font-semibold group-hover:tracking-wide transition-all duration-200">
                            Panel
                        </Link>
                        <div className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-200 group-hover:w-full transition-all duration-300"></div>
                    </li>

                    <li className="relative group transition-all duration-300">
                        <Link href="/" className="text-white group-hover:text-gray-200 group-hover:font-semibold group-hover:tracking-wide transition-all duration-200">
                            Salir
                        </Link>
                        <div className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-200 group-hover:w-full transition-all duration-300"></div>
                    </li>

                </ul>
            </div>
        </nav>
    )
}