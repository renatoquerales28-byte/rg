
"use client";

import { ArrowLeft, MessageCircle, Mail, FileText, FileSpreadsheet, Trash2, User, DollarSign, Info, Box } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function OrderDetailPage() {
    const { id } = useParams();

    const sale = {
        number: id || '00013',
        customer: {
            name: 'Cliente por defecto',
            id: '0000-15',
            phone: '0414409888391',
            email: '-'
        },
        totals: {
            balance: { usd: '2.64', bs: '1010.15' },
            debt: { usd: '162.10', bs: '62024.61' },
            subtotal: '164.74',
            total: { usd: '164.74', bs: '63034.76' }
        },
        details: {
            date: '2026-02-06T02:10:18',
            orderNum: '-',
            observations: 'Compra rápida!',
            modality: 'Contado',
            status: 'PENDIENTE POR PAGO',
            seller: 'Usuario Demo Pro'
        },
        products: [
            { code: 'HO18457', name: 'Cafetería programable Oster® de 12 tazas con auto apagado', desc: 'BVSTDCP12B', qty: 1, price: '78.99', fee: '0.00', total: '78.99' },
            { code: 'CFR1500', name: 'Caucho Firestone 195/60 R15 Firehawk 900', desc: 'Firehawk 900', qty: 1, price: '85.75', fee: '0.00', total: '85.75' },
        ],
        payments: [
            { method: 'Pago Móvil', amount: '2.64', bsAmount: '1000', date: '5 de febrero de 2026', ref: '22215451323', status: 'Aprobado' }
        ]
    };

    return (
        <div className="space-y-6 pb-20">
            {/* Header with Actions */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6">
                <div className="flex items-center gap-4">
                    <Link href="/orders" className="w-10 h-10 bg-[#004d40] text-white rounded flex items-center justify-center hover:bg-[#003d33] transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                    </Link>
                    <h1 className="text-3xl font-bold text-gray-800">Venta <span className="text-gray-400 font-normal">#{sale.number}</span></h1>
                </div>

                <div className="flex flex-wrap gap-2">
                    <button className="px-4 py-2 bg-[#2563eb] text-white rounded font-bold text-sm shadow-sm hover:bg-blue-700 transition-all">
                        Nueva venta
                    </button>
                    <button className="px-4 py-2 bg-[#25d366] text-white rounded font-bold text-sm shadow-sm hover:bg-[#20bd5a] transition-all flex items-center gap-2">
                        <MessageCircle className="w-4 h-4" /> Compartir WhatsApp
                    </button>
                    <button className="px-4 py-2 bg-[#4285f4] text-white rounded font-bold text-sm shadow-sm hover:bg-[#3367d6] transition-all flex items-center gap-2">
                        <Mail className="w-4 h-4" /> Compartir Email
                    </button>
                    <button className="px-4 py-2 bg-[#1e3a8a] text-white rounded font-bold text-sm shadow-sm hover:bg-[#1e3a8a]/90 transition-all">
                        Presupuesto
                    </button>
                    <button className="px-4 py-2 bg-[#1e3a8a] text-white rounded font-bold text-sm shadow-sm hover:bg-[#1e3a8a]/90 transition-all">
                        Nota de entrega
                    </button>
                </div>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Cliente */}
                <div className="bg-white border border-[#e5f6f3] rounded-xl p-6 shadow-sm">
                    <div className="flex items-center gap-2 text-[#00a680] font-bold border-b border-gray-50 pb-3 mb-4">
                        <div className="w-8 h-8 rounded-full bg-[#e5f6f3] flex items-center justify-center">
                            <User className="w-4 h-4" />
                        </div>
                        <span className="text-sm uppercase tracking-tight">Cliente</span>
                    </div>
                    <div className="space-y-3">
                        <p className="font-bold text-gray-700 text-lg">{sale.customer.name}</p>
                        <div className="space-y-1 text-gray-500 text-sm">
                            <p className="flex items-center gap-2"><span className="w-4 h-4">🆔</span> {sale.customer.id}</p>
                            <p className="flex items-center gap-2"><span className="w-4 h-4">✉️</span> {sale.customer.email}</p>
                            <p className="flex items-center gap-2"><span className="w-4 h-4">📞</span> {sale.customer.phone}</p>
                        </div>
                    </div>
                </div>

                {/* Totales */}
                <div className="bg-white border border-[#eef2ff] rounded-xl p-6 shadow-sm">
                    <div className="flex items-center gap-2 text-[#4f46e5] font-bold border-b border-gray-50 pb-3 mb-4">
                        <div className="w-8 h-8 rounded-full bg-[#eef2ff] flex items-center justify-center">
                            <DollarSign className="w-4 h-4" />
                        </div>
                        <span className="text-sm uppercase tracking-tight">Totales</span>
                    </div>
                    <div className="space-y-3">
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-500 flex items-center gap-2">📄 Balance:</span>
                            <span className="font-bold text-gray-700">${sale.totals.balance.usd} / <span className="text-gray-400 font-normal">Bs. {sale.totals.balance.bs}</span></span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-500 flex items-center gap-2">💰 Deuda:</span>
                            <span className="font-bold text-gray-700">${sale.totals.debt.usd} / <span className="text-gray-400 font-normal">Bs. {sale.totals.debt.bs}</span></span>
                        </div>
                        <div className="flex justify-between items-center text-sm border-t border-gray-50 pt-3">
                            <span className="text-gray-500">Subtotal:</span>
                            <span className="font-bold text-gray-700">${sale.totals.subtotal}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-500 font-bold">Total:</span>
                            <span className="font-bold text-gray-800 text-base">${sale.totals.total.usd} / <span className="text-gray-400 font-normal text-sm">Bs. {sale.totals.total.bs}</span></span>
                        </div>
                    </div>
                </div>

                {/* Detalles */}
                <div className="bg-white border border-[#eef2ff] rounded-xl p-6 shadow-sm">
                    <div className="flex items-center gap-2 text-[#EF6820] font-bold border-b border-gray-50 pb-3 mb-4">
                        <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center">
                            <Info className="w-4 h-4" />
                        </div>
                        <span className="text-sm uppercase tracking-tight">Detalles</span>
                    </div>
                    <div className="space-y-3 text-sm">
                        <div className="flex gap-2">
                            <span className="text-gray-500">📅 Fecha:</span>
                            <span className="font-medium text-gray-700">2026-02-06 02:10:18.000000Z</span>
                        </div>
                        <div className="flex gap-2">
                            <span className="text-gray-500">📑 Orden compra:</span>
                            <span className="font-medium text-gray-700">{sale.details.orderNum}</span>
                        </div>
                        <div className="flex gap-2">
                            <span className="text-gray-500">💬 Observaciones:</span>
                            <span className="font-medium text-gray-700">{sale.details.observations}</span>
                        </div>
                        <div className="flex gap-2">
                            <span className="text-gray-500">💳 Modalidad:</span>
                            <span className="font-medium text-gray-700">{sale.details.modality}</span>
                        </div>
                        <div className="flex gap-2">
                            <span className="text-gray-500">⚡ Estado:</span>
                            <span className="font-bold text-slate-500">{sale.details.status}</span>
                        </div>
                        <div className="pt-2 border-t border-gray-50 mt-2 text-right">
                            <div className="flex items-center justify-end gap-2 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">👤</div>
                                Vendedor
                            </div>
                            <span className="font-bold text-[#00a680] text-sm uppercase">{sale.details.seller}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Productos List */}
            <div className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden">
                <div className="px-6 py-4 bg-gray-50/50 border-b border-gray-100 flex items-center gap-2 font-bold text-gray-700">
                    <Box className="w-4 h-4 text-[#00a680]" />
                    <span>Productos</span>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm whitespace-nowrap">
                        <thead className="bg-[#fcfcfc] text-gray-400 font-bold border-b border-gray-100 text-[11px] uppercase tracking-tighter">
                            <tr>
                                <th className="px-8 py-4">Código</th>
                                <th className="px-8 py-4">Producto</th>
                                <th className="px-8 py-4">Descripción</th>
                                <th className="px-8 py-4 text-center">Cantidad</th>
                                <th className="px-8 py-4">Precio</th>
                                <th className="px-8 py-4">Fee</th>
                                <th className="px-8 py-4 text-right">Total</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50 font-medium text-gray-700">
                            {sale.products.map((p, i) => (
                                <tr key={i} className="hover:bg-gray-50/50">
                                    <td className="px-8 py-4 text-xs font-mono text-gray-400">{p.code}</td>
                                    <td className="px-8 py-4 font-bold text-gray-800">{p.name}</td>
                                    <td className="px-8 py-4 text-gray-400">{p.desc}</td>
                                    <td className="px-8 py-4 text-center">{p.qty}</td>
                                    <td className="px-8 py-4">${p.price}</td>
                                    <td className="px-8 py-4">${p.fee}</td>
                                    <td className="px-8 py-4 text-right font-bold text-blue-600">${p.total}</td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot className="bg-gray-50/50 border-t border-gray-100 italic">
                            <tr>
                                <td colSpan={6} className="px-8 py-3 text-right text-gray-500 font-bold">Subtotal</td>
                                <td className="px-8 py-3 text-right font-bold text-gray-800">${sale.totals.subtotal}</td>
                            </tr>
                            <tr>
                                <td colSpan={6} className="px-8 py-3 text-right text-gray-500 font-bold italic">Total</td>
                                <td className="px-8 py-3 text-right font-bold text-blue-600 text-lg border-l border-gray-100">${sale.totals.subtotal}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>

            {/* Pagos Section */}
            <div className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden">
                <div className="px-6 py-4 bg-gray-50/50 border-b border-gray-100 font-bold text-gray-700">
                    Pagos
                </div>
                <div className="p-6">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
                        {['Efectivo Dolar', 'Zelle', 'Transferencia Bs', 'Efectivo Bs', 'Pago Móvil', 'Punto de Venta'].map((m) => (
                            <button key={m} className="px-4 py-3 bg-[#1e3a8a] text-white rounded font-bold text-xs hover:bg-blue-900 transition-all text-center">
                                {m}
                            </button>
                        ))}
                    </div>

                    <div className="border border-gray-100 rounded-lg overflow-hidden">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-[#fcfcfc] text-gray-400 font-bold text-[11px] uppercase border-b border-gray-100">
                                <tr>
                                    <th className="px-8 py-3">Método</th>
                                    <th className="px-8 py-3">Monto</th>
                                    <th className="px-8 py-3">Fecha</th>
                                    <th className="px-8 py-3">Referencia</th>
                                    <th className="px-8 py-3">Estatus</th>
                                    <th className="px-8 py-3">Voucher</th>
                                    <th className="px-8 py-3 text-right">Acciones</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {sale.payments.map((p, i) => (
                                    <tr key={i} className="text-gray-700">
                                        <td className="px-8 py-4 font-bold">{p.method}</td>
                                        <td className="px-8 py-4 font-mono">{p.amount} (BsD. {p.bsAmount})</td>
                                        <td className="px-8 py-4 text-gray-400">{p.date}</td>
                                        <td className="px-8 py-4 text-gray-400">{p.ref}</td>
                                        <td className="px-8 py-4">
                                            <span className="text-[#00a680] font-bold">Aprobado</span>
                                        </td>
                                        <td className="px-8 py-4 text-gray-400">-</td>
                                        <td className="px-8 py-4 text-right">
                                            <button className="p-2 text-gray-300 hover:text-red-500 transition-colors">
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
