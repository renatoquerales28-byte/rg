
import PageHeader from '@/components/PageHeader';
import { BarChart3, PieChart, LineChart, Download } from 'lucide-react';

const reportTypes = [
    { name: 'Reporte de Ventas Anual', type: 'Financiero', icon: BarChart3 },
    { name: 'Costo vs Utilidad Mensual', type: 'Financiero', icon: LineChart },
    { name: 'Inventario por Categoría', type: 'Stock', icon: PieChart },
    { name: 'Balance de Proveedores', type: 'Compras', icon: BarChart3 },
];

export default function ReportsPage() {
    const actions = [
        { name: 'Reporte Personalizado' },
        { name: 'Descargar Catálogo PDF', primary: true },
    ];

    return (
        <div className="space-y-6">
            <PageHeader title="Reportes y Estadísticas" actions={actions} />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reportTypes.map((report) => (
                    <div key={report.name} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all cursor-pointer group">
                        <div className="flex items-start justify-between mb-4">
                            <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                                <report.icon className="w-6 h-6 text-blue-600" />
                            </div>
                            <button className="text-gray-400 hover:text-blue-600">
                                <Download className="w-5 h-5" />
                            </button>
                        </div>
                        <h3 className="font-bold text-gray-800 mb-1">{report.name}</h3>
                        <p className="text-sm text-gray-500">{report.type}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
