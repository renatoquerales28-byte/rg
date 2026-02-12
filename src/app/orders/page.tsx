
import PageHeader from '@/components/PageHeader';
import DataTable from '@/components/DataTable';

export default function OrdersPage() {
    const headers = ['Fecha', 'Número', 'Cliente', 'Estado', 'Vendedor', 'Abonado', 'Total'];
    const rows = [
        ['05/02/2026, 22:12', '00013', 'Cliente por defecto', 'PENDIENTE', 'Usuario Demo', 'USD 2,64', 'USD 164,74'],
        ['20/01/2026, 07:37', '00012', 'JULIANA Y MARCELA CANO', 'PENDIENTE', 'Usuario Demo', 'USD 0,00', 'USD 78,99'],
        ['17/11/2025, 12:48', '00011', 'Cliente por defecto', 'FINALIZADA', 'Usuario Demo', 'USD 78,99', 'USD 78,99'],
    ];

    const actions = [
        { name: 'Reporte de Ventas' },
        { name: 'Nueva Venta POS', primary: true },
    ];

    return (
        <div className="space-y-6">
            <PageHeader title="Ventas" actions={actions} />
            <DataTable headers={headers} rows={rows} />
        </div>
    );
}
