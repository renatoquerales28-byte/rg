
"use client";

import DataTable from '@/components/DataTable';
import { Search, Plus, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function BrandsPage() {
    const headers = ['Nombre', 'Código', 'Fecha creación'];
    const rows = [
        ['Hamilton', 'HU25732145', '6/5/2025'],
        ['Oster', 'HO5249', '6/5/2025'],
        ['ConexiónCreativa', 'CC*#4685', '6/5/2025'],
        ['Firestone', 'F#48775', '6/5/2025'],
    ];

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-4 mb-8">
                <Link href="/" className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-500">
                    <ArrowLeft className="w-5 h-5" />
                </Link>
                <h1 className="text-3xl font-bold text-gray-800">Marcas</h1>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-bold text-blue-600 hover:bg-gray-50 transition-all">
                    <Plus className="w-4 h-4" /> Crear Marca
                </button>

                <div className="relative w-full md:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Buscar"
                        className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-sm"
                    />
                </div>
            </div>

            <DataTable headers={headers} rows={rows} />
        </div>
    );
}
