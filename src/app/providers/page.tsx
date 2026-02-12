
import PageHeader from '@/components/PageHeader';
import DataTable from '@/components/DataTable';

export default function ProvidersPage() {
    const headers = ['Nombre', 'RIF', 'Teléfono', 'Email', 'Categoría', 'Acciones'];
    const rows = [
        ['Proveedor Demo 1', 'J-00000001', '0424-1111111', 'ventas@prov1.com', 'Materia Prima', '📝 🗑️'],
        ['Proveedor Demo 2', 'J-00000002', '0412-2222222', 'info@prov2.com', 'Servicios', '📝 🗑️'],
    ];

    const actions = [
        { name: 'Directorio de Proveedores' },
        { name: 'Crear Proveedor', primary: true },
    ];

    return (
        <div className="space-y-6">
            <PageHeader title="Proveedores" actions={actions} />
            <DataTable headers={headers} rows={rows} />
        </div>
    );
}
