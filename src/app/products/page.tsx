
import DataTable from '@/components/DataTable';
import { Search, Plus, Download, Upload, Tag, Layers } from 'lucide-react';
import Link from 'next/link';

export default function ProductsPage() {
    const headers = ['Código', 'Nombre', 'Categoría', 'Marca', 'Cantidades', 'Costo', 'Precio', 'Precio Bs', 'Ganancia'];
    const rows = [
        ['SE05665', 'Diseño de Página Web', 'Plantillas', 'Generico', 'Depósito Principal: 101', 'USD 350,00', 'USD 350,00', 'VEF 133.700,00', 'USD 0,00'],
        ['HO18457', 'Cafetera programable Oster®', 'Electrodomésticos', 'Oster', 'Depósito Principal: 10', 'USD 53,99', 'USD 78,99', 'VEF 30.174,18', 'USD 25,00'],
        ['CFR1500', 'Caucho Firestone 195/60 R15', 'Repuestos de Carros', 'Firestone', 'Depósito Principal: 76', 'USD 85,75', 'USD 85,75', 'VEF 32.756,50', 'USD 0,00'],
        ['A01', 'INICIADOR VITAMINADO ALIPA', 'Granja', 'Firestone', 'Depósito Principal: 106.5', 'USD 0,70', 'USD 1,10', 'VEF 420,20', 'USD 0,40'],
        ['1234a', 'Zapatos RS21', 'Zapatos RS21', 'Hamilton', 'Depósito Principal: 1', 'USD 78,00', 'USD 101,40', 'VEF 38.734,80', 'USD 23,40'],
        ['App0215', 'Iphone 45', 'Electrodomésticos', 'Oster', '-', 'USD 25,00', 'USD 1.250,00', 'VEF 477.500,00', 'USD 1.225,00'],
    ];

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <h1 className="text-3xl font-bold text-gray-800">Productos</h1>
                <div className="flex flex-wrap gap-2">
                    <button className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50">
                        <Upload className="w-4 h-4" /> Importar
                    </button>
                    <button className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50">
                        <Download className="w-4 h-4" /> Exportar
                    </button>
                    <Link href="/products/create" className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-bold hover:bg-blue-700 shadow-sm">
                        <Plus className="w-4 h-4" /> Crear Producto
                    </Link>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
                <div className="flex gap-4">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50">
                        <Layers className="w-4 h-4 text-blue-600" /> Categorías
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50">
                        <Tag className="w-4 h-4 text-blue-600" /> Marcas
                    </button>
                </div>
                <div className="relative w-full md:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Buscar..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    />
                </div>
            </div>

            <DataTable headers={headers} rows={rows} />
        </div>
    );
}
