
"use client";

import { ArrowLeft, Upload as UploadIcon } from 'lucide-react';
import Link from 'next/link';

export default function CreateProductPage() {
    return (
        <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
                <Link href="/products" className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-500">
                    <ArrowLeft className="w-5 h-5" />
                </Link>
                <h1 className="text-3xl font-bold text-gray-800">Productos <span className="text-gray-400 font-normal">/ Crear</span></h1>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-8 space-y-10">

                    {/* Información básica */}
                    <section className="space-y-6">
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-blue-600 pl-4">Información básica</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">Código *:</label>
                                <input
                                    type="text"
                                    placeholder="Ingrese el código del producto"
                                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">Nombre *:</label>
                                <input
                                    type="text"
                                    placeholder="Ingrese el nombre del producto"
                                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700">Tipo de producto *:</label>
                            <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                                <option>Producto</option>
                                <option>Servicio</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700">Descripción:</label>
                            <textarea
                                rows={3}
                                placeholder="Ingrese una descripción"
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </section>

                    {/* Precios y costos */}
                    <section className="space-y-6">
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-blue-600 pl-4">Precios y costos</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">Costo *:</label>
                                <input
                                    type="number"
                                    placeholder="0"
                                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">Precio A *:</label>
                                <input
                                    type="number"
                                    placeholder="0"
                                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Categorización */}
                    <section className="space-y-6">
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-blue-600 pl-4">Categorización</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">Marca *:</label>
                                <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                                    <option>Seleccionar marca</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">Categoría *:</label>
                                <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                                    <option>Seleccionar categoría</option>
                                </select>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">¿Es contable? *:</label>
                                <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                                    <option>Sí</option>
                                    <option>No</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">Foto del producto:</label>
                                <div className="border-2 border-dashed border-gray-200 rounded-xl p-4 flex flex-col items-center justify-center text-gray-400 hover:text-blue-500 hover:border-blue-400 cursor-pointer transition-all">
                                    <UploadIcon className="w-8 h-8 mb-2" />
                                    <span className="text-sm">Browse</span>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="p-8 bg-gray-50 border-t border-gray-100 flex justify-end">
                    <button className="px-8 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-md active:scale-95">
                        Crear producto
                    </button>
                </div>
            </div>
        </div>
    );
}
