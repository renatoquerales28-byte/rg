
import PageHeader from '@/components/PageHeader';
import DataTable from '@/components/DataTable';

export default function SpentsPage() {
    const headers = ['Fecha', 'Concepto', 'Categoría', 'Método Pago', 'Monto', 'Referencia'];
    const rows = [
        ['06/02/2026', 'Pago Alquiler Local', 'Infraestructura', 'Transferencia', 'USD 800,00', '#TX-9981'],
        ['04/02/2026', 'Compra Insumos Oficina', 'Administrativo', 'Efectivo', 'USD 45,50', '#EF-012'],
        ['01/02/2026', 'Servicio Internet', 'Servicios', 'Zelle', 'USD 60,00', '#ZE-441'],
    ];

    const actions = [
        { name: 'Libro de Gastos' },
        { name: 'Registrar Gasto', primary: true },
    ];

    return (
        <div className="space-y-6">
            <PageHeader title="Gastos" actions={actions} />
            <DataTable headers={headers} rows={rows} />
        </div>
    );
}
