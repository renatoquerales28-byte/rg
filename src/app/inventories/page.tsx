
import PageHeader from '@/components/PageHeader';
import DataTable from '@/components/DataTable';

export default function InventoriesPage() {
    const headers = ['Producto', 'SKU', 'F. Inicial', 'Entradas', 'Salidas', 'Devoluciones', 'Saldo Actual'];
    const rows = [
        ['Producto Demo 1', 'PRD-001', '10', '20', '5', '0', '25'],
        ['Producto Demo 2', 'PRD-002', '100', '50', '40', '0', '110'],
        ['Producto Demo 3', 'PRD-003', '5', '10', '10', '0', '5'],
    ];

    const actions = [
        { name: 'Ajuste de Inventario' },
        { name: 'Kardex Detallado', primary: true },
    ];

    return (
        <div className="space-y-6">
            <PageHeader title="Inventario" actions={actions} />
            <DataTable headers={headers} rows={rows} />
        </div>
    );
}
