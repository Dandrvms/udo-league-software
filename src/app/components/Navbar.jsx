import Link from 'next/link';

export default function Navbar() {
    return(
        <nav className="navbar py-2 px-3 bg-blue-700 text-white">
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold" >
                    <Link href="/">UDO League Software</Link>
                </h1>
                <ul className="flex space-x-4">
                    <li className="hover:text-cyan-600"><Link href="/">Inicio</Link></li>
                    <li className="hover:text-cyan-600"><Link href="/">Panel</Link></li>
                    <li className="hover:text-cyan-600"><Link href="/">Salir</Link></li>
                </ul>
            </div>
        </nav>
    )
}