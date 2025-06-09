// components/fileUploadArea.js
"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import * as XLSX from "xlsx";





export default function EquipoFileUpload({ campeonato, categoria }) {
    const router = useRouter()
    const [file, setFile] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
    const [error, setError] = useState("")
    const [excelData, setExcelData] = useState(null)
    const [success, setSuccess] = useState("")
    const REQUIRED_COLUMNS = ["equipo", "nombre", "apellido", "edad", "posicion", "dorsal"]



    const handleDragOver = useCallback((e) => {
        e.preventDefault();
        setIsDragging(true);
    }, []);

    const handleDragLeave = useCallback(() => {
        setIsDragging(false);
    }, []);

    const handleDrop = useCallback((e) => {
        e.preventDefault();
        setIsDragging(false);
        const droppedFile = e.dataTransfer.files[0];
        if (droppedFile && isValidFileType(droppedFile)) {
            validateAndSetFile(droppedFile);
        }
    }, []);

    useEffect(() => {
        if (file) {
            handleFileUpload(file)
        }
    }, [file])

    const validateAndSetFile = (selectedFile) => {
        setError("")
        if (!isValidFileType(selectedFile)) {
            setError("El archivo debe ser Excel (.xlsx o xls) ")
            setTimeout(() => setError(""), 2500)
            return
        }
        if (selectedFile.size > 5 * 1024 * 1024) {
            setError("El archivo no debe superar lso 5MB")
            setTimeout(() => setError(""), 2500)
            return
        }
        setFile(selectedFile)
    }

    const handleFileUpload = (file) => {

        const reader = new FileReader()
        reader.onload = (e) => {
            try {

                const data = new Uint8Array(e.target.result)
                const workbook = XLSX.read(data, { type: "array" })
                const sheetName = workbook.SheetNames[0]
                const worksheet = workbook.Sheets[sheetName]
                const json = XLSX.utils.sheet_to_json(worksheet)


                // Validar columnas
                const headers = json[0] ? Object.keys(json[0]).map(h => String(h).trim().toLowerCase().normalize("NFKC")) : [];
                const missing = REQUIRED_COLUMNS.filter(
                    col => !headers.includes(col.toLowerCase())
                )
                if (missing.length > 0) {
                    setError(`Faltan columnas requeridas: ${missing.join(", ")}`)
                    setTimeout(() => setError(""), 2500)
                    setExcelData(null)
                    return
                }
                setExcelData(json)
                setError("")
            } catch (err) {
                setError("No se pudo cargar el archivo")
                setTimeout(() => setError(""), 2500)
                setExcelData(null)
            }
        }
        reader.readAsArrayBuffer(file)
    }

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile && isValidFileType(selectedFile)) {
            validateAndSetFile(selectedFile);
        }
        e.target.value = ""
    };

    const isValidFileType = (file) => {
        const validTypes = [

            'application/vnd.ms-excel',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        ];
        return validTypes.includes(file.type);
    };

    const removeFile = () => {
        setFile(null);
        setExcelData(null)
        setError("")
    };

    const handleSubmit = async () => {
        if (!excelData) return;

        // Ordena por la columna 'nombre' 
        const sortedData = [...excelData].sort((a, b) => {
            if (Number(a.equipo) < Number(b.equipo)) return -1;
            if (Number(a.equipo) > Number(b.equipo)) return 1;
            return 0;
        })
            .map(equipo => ({
                ...equipo,
                idCategoria: categoria
            }));


        try {
            const res = await fetch("/api/jugador", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ jugadores: sortedData })
            });

            if (!res.ok) {
                setError("Error al enviar los datos");
                setTimeout(() => setError(""), 2500)
            } else {
                setError("")
                setFile(null)
                setExcelData(null)
                setSuccess("Jugadores cargados con éxito")
                setTimeout(() => router.push(`/administrador/campeonato/${campeonato}/categoria/${categoria}/equipos`), 2500)
            }
        } catch (err) {
            setError("Error de red al enviar los datos");
            setTimeout(() => setError(""), 2500)
        }
    };

    return (<>
        {error && (
            <div className="fixed top-6 left-1/2 -translate-x-1/2 bg-red-600 text-white px-4 py-2 rounded shadow-lg z-50">
                {error}
            </div>
        )}

        {success && (
            <div className="fixed top-6 left-1/2 -translate-x-1/2 bg-green-600 text-white px-4 py-2 rounded shadow-lg z-50">
                {success}
            </div>
        )}

        <div className="space-y-4">
            <div
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
                    }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <p className="mt-2 text-sm text-gray-600">
                    <span className="font-medium text-blue-600">Haz clic para cargar</span> o arrastra y suelta un archivo
                </p>
                <p className="text-xs text-gray-500 mt-1">Excel (máx. 5MB)</p>
                <input
                    type="file"
                    className="hidden"
                    id="file-upload"
                    accept=".xlsx, .xls"
                    onChange={handleFileChange}
                />
                <button
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm"
                    onClick={() => document.getElementById('file-upload').click()}

                >
                    Seleccionar archivo
                </button>
            </div>

            {file && (
                <div className="border border-gray-200 rounded-md p-4 bg-gray-50">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <span className="ml-2 text-sm font-medium text-gray-700">{file.name}</span>
                            <span className="ml-2 text-xs text-gray-500">({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
                        </div>
                        <button
                            className="text-gray-500 hover:text-gray-700"
                            onClick={removeFile}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}

            {!file && (
                <div className="flex items-center justify-center text-sm text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    Ningún archivo seleccionado
                </div>
            )}
        </div>


        {/* Vista previa */}
        {excelData && (
            <>
                <div className="mt-6 bg-white shadow rounded-lg overflow-auto">
                    <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
                        <h2 className="text-lg font-semibold text-gray-800">Vista previa de jugadores</h2>
                        {/* <span className="text-sm text-gray-500">Mostrando 10 de 24 registros</span> */}
                    </div>
                </div>
                    <div className="overflow-x-auto h-100">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Equipo</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Apellido</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Edad</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Posición</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dorsal</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {excelData.slice(0, 40).map((row, index) => (
                                    <tr key={index} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="font-medium text-gray-900">{row.equipo}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-gray-900">{row.nombre}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-gray-900">{row.apellido}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-gray-900">{row.edad}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-gray-900">{row.posicion}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-gray-900">{row.dorsal}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                Válido
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
               
                <div className="bg-gray-50 px-6 py-4 border-t border-gray-100 flex justify-end space-x-3">
                    <button
                        onClick={removeFile}
                        className="px-4 py-2 cursor-pointer border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                        Cancelar
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="px-4 py-2 cursor-pointer bg-blue-600 text-white rounded-md hover:bg-blue-700">
                        Cargar Jugadores
                    </button>
                </div>
            </>
        )}

    </>
    );
}