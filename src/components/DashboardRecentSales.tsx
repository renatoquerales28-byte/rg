
import React from 'react';
import Link from 'next/link';
import { SaleData } from '@/types';

const recentSales: SaleData[] = [
    { id: '10883', date: '05/02/2026, 22:12', number: '00013', customer: 'Cliente por defecto', status: 'PENDIENTE POR PAGO', seller: 'Usuario Demo Pro', paid: 'USD 2,64', total: 'USD 164,74' },
    { id: '10272', date: '20/01/2026, 07:37', number: '00012', customer: 'JULIANA Y MARCELA CANO', status: 'PENDIENTE POR PAGO', seller: 'Usuario Demo Pro', paid: 'USD 0,00', total: 'USD 78,99' },
    { id: '6287', date: '17/11/2025, 12:48', number: '00011', customer: 'Cliente por defecto', status: 'PENDIENTE POR PAGO', seller: 'Usuario Demo Pro', paid: 'USD 0,00', total: 'USD 78,99' },
    { id: '6201', date: '03/11/2025, 13:54', number: '00009', customer: 'Cliente por defecto', status: 'PENDIENTE POR PAGO', seller: 'Usuario Demo Pro', paid: 'USD 0,00', total: 'USD 1.816,77' },
    { id: '66', date: '10/05/2025, 16:50', number: '00006', customer: 'Cliente por defecto', status: 'PENDIENTE POR PAGO', seller: 'Usuario Demo Pro', paid: 'USD 1,10', total: 'USD 1,10' },
];

export default function DashboardRecentSales() {
    return (
        <div className="bg-white rounded shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-8 py-5 border-b border-gray-50 flex justify-between items-center bg-[#fcfcfc]">
                <h2 className="text-lg font-bold text-gray-800 tracking-tight">Últimas Ventas</h2>
                <Link href="/orders" className="text-xs font-bold text-blue-600 hover:underline transition-colors uppercase tracking-wider">Ver todas las ventas</Link>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full whitespace-nowrap text-left text-sm">
                    <thead className="bg-[#fcfcfc] text-gray-400 font-bold border-b border-gray-100 uppercase text-[11px] tracking-tighter">
                        <tr>
                            <th className="px-8 py-4">Fecha</th>
                            <th className="px-8 py-4">Número</th>
                            <th className="px-8 py-4">Cliente</th>
                            <th className="px-8 py-4">Estado</th>
                            <th className="px-8 py-4">Vendedor</th>
                            <th className="px-8 py-4">Abonado</th>
                            <th className="px-8 py-4 text-right">Total</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {recentSales.map((sale) => (
                            <tr key={sale.id} className="hover:bg-gray-50/50 transition-all group cursor-pointer">
                                <td className="px-8 py-4 text-gray-500 font-medium">{sale.date}</td>
                                <td className="px-8 py-4 font-bold text-gray-600 group-hover:text-blue-600 transition-colors">
                                    <Link href={`/orders/${sale.id}`}>{sale.number}</Link>
                                </td>
                                <td className="px-8 py-4 text-blue-600 font-bold hover:underline transition-all">
                                    <Link href={`/clients/${sale.id}`}>{sale.customer}</Link>
                                </td>
                                <td className="px-8 py-4">
                                    <span className="font-bold text-slate-500 text-[11px] uppercase tracking-tight">
                                        {sale.status}
                                    </span>
                                </td>
                                <td className="px-8 py-4 text-gray-400 font-medium text-xs uppercase">{sale.seller}</td>
                                <td className="px-8 py-4 text-gray-500 font-bold">{sale.paid}</td>
                                <td className="px-8 py-4 font-bold text-gray-800 text-right">{sale.total}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
