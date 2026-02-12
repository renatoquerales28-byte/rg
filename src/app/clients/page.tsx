
import PageHeader from '@/components/PageHeader';
import DataTable from '@/components/DataTable';
import { Search, Filter, Download, FileText, Upload, Plus } from 'lucide-react';
import Link from 'next/link';

export default function ClientsPage() {
    const headers = ['Empresa', 'Nombre', 'Alias o Cédula', 'Correo electrónico', 'Dirección', 'Adeudado', 'Teléfono', 'Acciones'];

    // Updated rows to be ReactNodes for linking
    const rows = [
        [
            'SANTA CRUZ',
            <Link key="1-name" href="/clients/62" className="text-blue-600 font-bold hover:underline">JULIANA Y MARCELA CANO</Link>,
            '62',
            'A@HOTMAIL.COM',
            'SANTA CRUZ',
            <span key="1-debt" className="text-red-600 font-bold">$ 78,99</span>,
            '424-4561668',
            <Link key="1-link" href="/clients/62" className="text-blue-600">➡️</Link>
        ],
        [
            'SANTA CRUZ',
            <Link key="2-name" href="/clients/62" className="text-blue-600 font-bold hover:underline">JULIANA Y MARCELA CANO</Link>,
            'S62-1',
            'A@HOTMAIL.COM',
            'SANTA CRUZ',
            '$ 0,00',
            '424-4561668',
            <Link key="2-link" href="/clients/62" className="text-blue-600">➡️</Link>
        ],
        [
            '-',
            <Link key="3-name" href="/clients/EP000" className="text-blue-600 font-bold hover:underline">Elena Payares</Link>,
            'EP000',
            'elep@gmail.com',
            'Trigal Norte',
            '$ 0,00',
            '04245658742',
            '➡️'
        ],
        [
            '-',
            <Link key="4-name" href="/clients/0000-15" className="text-blue-600 font-bold hover:underline">Cliente por defecto</Link>,
            '0000-15',
            '-',
            'San diego',
            <span key="4-debt" className="text-red-600 font-bold">$ 2.139,05</span>,
            '0414409888391',
            '➡️'
        ],
    ];

    const actions = [
        { name: 'Importar', icon: Upload },
        { name: 'PDF', icon: FileText },
        { name: 'Excel', icon: Download },
        { name: 'Crear Cliente', primary: true, icon: Plus, href: '/clients/create' },
    ];

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <h1 className="text-3xl font-bold text-gray-800">Clientes</h1>
                <div className="flex flex-wrap gap-2">
                    <button className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50">
                        <Upload className="w-4 h-4" /> Importar
                    </button>
                    <button className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50">
                        <FileText className="w-4 h-4" /> PDF
                    </button>
                    <button className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50">
                        <Download className="w-4 h-4" /> Excel
                    </button>
                    <Link href="/clients/create" className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-bold hover:bg-blue-700 shadow-sm">
                        <Plus className="w-4 h-4" /> Crear Cliente
                    </Link>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Buscar..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    />
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50">
                    <Filter className="w-4 h-4" /> Filtrar
                </button>
                <button className="text-sm font-medium text-blue-600 hover:underline">Reiniciar</button>
            </div>

            <DataTable headers={headers} rows={rows} />
        </div>
    );
}
