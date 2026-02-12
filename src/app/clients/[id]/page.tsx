
"use client";

import { ArrowLeft, User, DollarSign, ShoppingBag, Receipt, Trash2, Calendar, Search, Download } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function ClientDetailPage() {
    const { id } = useParams();

    const client = {
        name: 'JULIANA Y MARCELA CANO',
        id: '62',
        email: 'A@HOTMAIL.COM',
        phone: '424-4561668',
        company: 'SANTA CRUZ',
        address: 'SANTA CRUZ',
        metrics: {
            balance: '-$ 78,99',
            debt: '$ 78,99',
            totalSales: '1',
            totalSpent: '$ 0,00'
        },
        salesHistory: [
            { order: '#10272', date: '20/01/2026, 07:37 a. m.', status: 'Pendiente de pago', total: '$ 78,99', balance: '$ 0,00', responsible: 'Usuario Demo Pro' }
        ],
        boughtProducts: [
            { name: 'Cafetera programable Oster® de 12 tazascon auto apagado', qty: 1, price: '$ 78,99', date: '20/01/2026, 07:36 a. m.', order: '#10272' }
        ]
    };

    return (
        <div className="space-y-6 pb-20">
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
                <Link href="/clients" className="w-10 h-10 bg-gray-100 text-gray-500 rounded flex items-center justify-center hover:bg-gray-200 transition-colors">
                    <ArrowLeft className="w-5 h-5" />
                </Link>
                <h1 className="text-3xl font-bold text-gray-800">{client.name} <span className="text-gray-400 font-normal lg:inline hidden">- Ficha del Cliente</span></h1>
            </div>

            {/* Basic Info Grid */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-12">
                    <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Nombre</p>
                        <p className="font-bold text-gray-800">{client.name}</p>
                    </div>
                    <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Nombre de Empresa</p>
                        <p className="font-bold text-gray-800">{client.company}</p>
                    </div>
                    <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Identificación</p>
                        <p className="font-bold text-gray-800">{client.id}</p>
                    </div>
                    <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Dirección</p>
                        <p className="font-bold text-gray-800">{client.address}</p>
                    </div>
                    <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Correo Electrónico</p>
                        <p className="font-bold text-gray-800">{client.email}</p>
                    </div>
                    <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Teléfono</p>
                        <p className="font-bold text-gray-800">{client.phone}</p>
                    </div>
                </div>
            </div>

            {/* Metrics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <p className="text-xs font-bold text-gray-400 mb-2">BALANCE</p>
                    <p className="text-2xl font-black text-red-500">{client.metrics.balance}</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <p className="text-xs font-bold text-gray-400 mb-2">DEUDA</p>
                    <p className="text-2xl font-black text-red-500">{client.metrics.debt}</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <p className="text-xs font-bold text-gray-400 mb-2">TOTAL VENTAS</p>
                    <p className="text-2xl font-black text-blue-600">{client.metrics.totalSales}</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <p className="text-xs font-bold text-gray-400 mb-2">TOTAL GASTADO</p>
                    <p className="text-2xl font-black text-green-500">{client.metrics.totalSpent}</p>
                </div>
            </div>

            {/* Sales History */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden text-sm">
                <div className="px-6 py-4 bg-gray-50/50 border-b border-gray-100 font-bold text-gray-700">
                    Historial de Ventas
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-[#fcfcfc] text-gray-400 font-bold text-[11px] uppercase border-b border-gray-100">
                            <tr>
                                <th className="px-8 py-4"># Orden</th>
                                <th className="px-8 py-4">Fecha</th>
                                <th className="px-8 py-4">Estado</th>
                                <th className="px-8 py-4">Total</th>
                                <th className="px-8 py-4">Balance</th>
                                <th className="px-8 py-4">Responsable</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {client.salesHistory.map((s, i) => (
                                <tr key={i} className="hover:bg-gray-50/50">
                                    <td className="px-8 py-4 font-bold text-blue-600">
                                        <Link href={`/orders/${s.order.replace('#', '')}`}>{s.order}</Link>
                                    </td>
                                    <td className="px-8 py-4 text-gray-500">{s.date}</td>
                                    <td className="px-8 py-4 text-gray-500 italic">{s.status}</td>
                                    <td className="px-8 py-4 font-bold text-gray-700">{s.total}</td>
                                    <td className="px-8 py-4 font-bold text-green-600">{s.balance}</td>
                                    <td className="px-8 py-4 text-gray-400 uppercase text-xs font-bold">{s.responsible}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Registrar Pago */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                <h3 className="font-bold text-gray-700 mb-6">Registrar pago</h3>
                <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
                    {['Efectivo Dolar', 'Zelle', 'Transferencia Bs', 'Efectivo Bs', 'Pago Móvil', 'Punto de Venta'].map((m) => (
                        <button key={m} className="px-4 py-3 bg-white border border-gray-200 text-gray-500 rounded font-bold text-xs hover:bg-gray-50 transition-all text-center">
                            {m}
                        </button>
                    ))}
                </div>
            </div>

            {/* Products Bought */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden text-sm">
                <div className="px-6 py-4 bg-gray-50/50 border-b border-gray-100 flex justify-between items-center">
                    <span className="font-bold text-gray-700">Productos comprados</span>
                    <div className="flex gap-2">
                        <div className="relative">
                            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input type="text" placeholder="Desde" className="pl-10 pr-4 py-1.5 border border-gray-100 rounded text-xs bg-[#fcfcfc]" />
                        </div>
                        <div className="relative">
                            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input type="text" placeholder="Hasta" className="pl-10 pr-4 py-1.5 border border-gray-100 rounded text-xs bg-[#fcfcfc]" />
                        </div>
                        <button className="px-4 py-1.5 bg-white border border-gray-100 rounded text-xs font-bold text-gray-400"><Search className="w-3 h-3 inline mr-1" /> Buscar</button>
                        <button className="px-4 py-1.5 bg-white border border-gray-100 rounded text-xs font-bold text-gray-400"><Download className="w-3 h-3 inline mr-1" /> Exportar PDF</button>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-[#fcfcfc] text-gray-400 font-bold text-[11px] uppercase border-b border-gray-100">
                            <tr>
                                <th className="px-8 py-4">Producto</th>
                                <th className="px-8 py-4 text-center">Cantidad</th>
                                <th className="px-8 py-4">Precio</th>
                                <th className="px-8 py-4">Fecha</th>
                                <th className="px-8 py-4">Orden</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {client.boughtProducts.map((p, i) => (
                                <tr key={i}>
                                    <td className="px-8 py-4 font-bold text-gray-700">{p.name}</td>
                                    <td className="px-8 py-4 text-center font-bold text-gray-800">{p.qty}</td>
                                    <td className="px-8 py-4 font-bold text-gray-700">{p.price}</td>
                                    <td className="px-8 py-4 text-gray-400">{p.date}</td>
                                    <td className="px-8 py-4 font-bold text-blue-600">
                                        <Link href={`/orders/${p.order.replace('#', '')}`}>{p.order}</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Footer Actions */}
            <div className="flex justify-start">
                <button className="flex items-center gap-2 text-red-400 text-xs font-bold hover:text-red-600 transition-colors uppercase tracking-widest">
                    <Trash2 className="w-4 h-4" /> Borrar historial de cliente
                </button>
            </div>
        </div>
    );
}
