
import PageHeader from '@/components/PageHeader';
import DataTable from '@/components/DataTable';

export default function ShoppingsPage() {
    const headers = ['Fecha', 'Número', 'Proveedor', 'Estado', 'Monto', 'Abonado', 'Saldo'];
    const rows = [
        ['04/02/2026', 'CMP-001', 'Proveedor Demo 1', 'PAGADA', 'USD 1.500,00', 'USD 1.500,00', 'USD 0,00'],
        ['15/01/2026', 'CMP-002', 'Proveedor Demo 2', 'PENDIENTE', 'USD 2.450,00', 'USD 1.000,00', 'USD 1.450,00'],
    ];

    const actions = [
        { name: 'Cuentas por Pagar' },
        { name: 'Nueva Compra', primary: true },
    ];

    return (
        <div className="space-y-6">
            <PageHeader title="Compras" actions={actions} />
            <DataTable headers={headers} rows={rows} />
        </div>
    );
}
