import Link from 'next/link';

export default function Navbar() {
    return(
        <nav className="navbar py-5 px-10 ">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold" >
                    <Link href="/">UDO Software League</Link>
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