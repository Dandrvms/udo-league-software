"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gradient-to-r from-blue-700 to-blue-900 text-white shadow-lg fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                <div className="flex justify-between items-center h-5">
                    <div className="flex-shrink-0">
                        {/* <h1 className="text-2xl font-extrabold tracking-tight">
                            {window.location.pathname === "/" ? (
                                <Link href="/administrador" className="bg-blue-700 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center transition">

                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="white">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>

                                </Link>
                            ) : (


                                <Link href="/" className="hover:text-blue-100 transition-colors duration-200">
                                    UDO League Software
                                </Link>
                            )}
                        </h1> */}
                    </div>

                    <div className="flex items-center">
                        <ul className="hidden md:flex items-baseline space-x-8">
                            <li>
                                <Link
                                    href="/"
                                    className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition-all duration-200 ease-in-out relative group"
                                >
                                    Inicio
                                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/administrador"
                                    className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition-all duration-200 ease-in-out relative group"
                                >
                                    Panel
                                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                                </Link>
                            </li>
                        </ul>

                        <div className="-mr-2 flex items-center md:ml-4">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="inline-flex items-center justify-center p-2 rounded-md text-blue-100 hover:text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors duration-200"
                                aria-controls="mobile-menu"
                                aria-expanded={isOpen}
                            >
                                <span className="sr-only">Abrir menú principal</span>
                                {isOpen ? (
                                    // Ícono de cerrar (X)
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                ) : (
                                    // Ícono de hamburguesa (≡)
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={` ${isOpen ? 'block' : 'hidden'} px-2 pt-2 pb-3 space-y-1 sm:px-3`}>
                <Link
                    href="/"
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-600 transition-colors duration-200"
                >
                    Inicio
                </Link>
                <Link
                    href="/administrador"
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-600 transition-colors duration-200"
                >
                    Panel
                </Link>
            </div>
        </nav>
    );
}