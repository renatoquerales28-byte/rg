
import React from 'react';
import { TrendingUp, AlertCircle, ArrowRight, User, Clock } from 'lucide-react';
import Link from 'next/link';

// 1. Weekly Sales Chart (SVG/CSS Hybrid for Premium Feel without extra deps)
const WeeklySalesChart = () => {
    const data = [
        { day: 'Lun', amount: 1200, isToday: false },
        { day: 'Mar', amount: 1500, isToday: false },
        { day: 'Mie', amount: 900, isToday: false },
        { day: 'Jue', amount: 1800, isToday: false },
        { day: 'Vie', amount: 2100, isToday: false },
        { day: 'Sab', amount: 2500, isToday: true }, // Today
        { day: 'Dom', amount: 1800, isToday: false },
    ];

    const maxAmount = Math.max(...data.map(d => d.amount));

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 h-full">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest">Pulso Semanal</h3>
                    <p className="text-[11px] text-gray-400 font-bold uppercase mt-0.5">Ventas Netas (USD)</p>
                </div>
                <div className="flex items-center text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md text-[10px] font-black uppercase tracking-tighter">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    +15% vs media
                </div>
            </div>

            <div className="flex items-end justify-between h-48 gap-2 pt-4">
                {data.map((d) => (
                    <div key={d.day} className="flex-1 flex flex-col items-center group">
                        <div
                            className={`w-full rounded-t-lg transition-all duration-500 relative ${d.isToday ? 'bg-[#EF6820] shadow-lg shadow-orange-200' : 'bg-slate-100 group-hover:bg-slate-200'}`}
                            style={{ height: `${(d.amount / maxAmount) * 100}%` }}
                        >
                            <div className="opacity-0 group-hover:opacity-100 absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] font-bold py-1 px-2 rounded whitespace-nowrap transition-opacity shadow-xl z-10">
                                ${d.amount}
                            </div>
                        </div>
                        <span className={`text-[10px] font-black mt-3 uppercase tracking-tighter ${d.isToday ? 'text-[#EF6820]' : 'text-gray-400'}`}>
                            {d.day}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

// 2. Top Products Ranking
const TopProducts = () => {
    const products = [
        { name: 'Harina Pan 1kg', sales: 145, movement: 'high' },
        { name: 'Arroz Mary Silver 1kg', sales: 98, movement: 'medium' },
        { name: 'Aceite Vatel 1L', sales: 74, movement: 'medium' },
        { name: 'Pasta Primor 500g', sales: 62, movement: 'low' },
    ];

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 h-full">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest">Top Movimiento</h3>
                <Link href="/reports" className="text-[10px] font-black text-[#EF6820] hover:underline uppercase tracking-widest">Reporte Completo</Link>
            </div>

            <div className="space-y-5">
                {products.map((p, i) => (
                    <div key={p.name} className="flex flex-col gap-2">
                        <div className="flex justify-between items-center">
                            <span className="text-xs font-bold text-gray-700">{i + 1}. {p.name}</span>
                            <span className="text-[10px] font-black text-gray-400">{p.sales} unids</span>
                        </div>
                        <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                            <div
                                className={`h-full rounded-full transition-all duration-1000 ${i === 0 ? 'bg-emerald-500' : 'bg-slate-300'}`}
                                style={{ width: `${(p.sales / products[0].sales) * 100}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// 3. Overdue Receivables (The Red Alert)
const OverdueReceivables = () => {
    const receivables = [
        { client: 'Distribuidora Global', amount: 'USD 850,00', days: 12 },
        { client: 'Supermercado Central', amount: 'USD 420,50', days: 5 },
        { client: 'Panadería La Joya', amount: 'USD 125,00', days: 45 },
    ];

    return (
        <div className="bg-white rounded-xl shadow-sm border-2 border-red-50 p-6 h-full">
            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></div>
                    <h3 className="text-sm font-black text-red-600 uppercase tracking-widest">CxC Vencidas</h3>
                </div>
                <div className="text-xs font-black text-red-600 bg-red-50 px-2 py-1 rounded-md">
                    ALERTA CRÍTICA
                </div>
            </div>

            <div className="space-y-4">
                {receivables.map((r) => (
                    <div key={r.client} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 border border-gray-100 hover:border-red-200 transition-colors group">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-400">
                                <User className="w-4 h-4" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs font-bold text-gray-800">{r.client}</span>
                                <div className="flex items-center gap-1 text-[9px] font-bold text-red-500 uppercase tracking-tighter">
                                    <Clock className="w-2.5 h-2.5" />
                                    {r.days} días de atraso
                                </div>
                            </div>
                        </div>
                        <div className="text-right">
                            <span className="text-xs font-black text-gray-900 block">{r.amount}</span>
                            <button className="text-[9px] font-black text-blue-600 hover:underline flex items-center justify-end uppercase mt-0.5">
                                Cobrar
                                <ArrowRight className="w-2 h-2 ml-0.5" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <button className="w-full mt-6 py-3 bg-red-600 hover:bg-red-700 text-white text-[10px] font-black uppercase tracking-widest rounded-xl shadow-lg shadow-red-100 transition-all active:scale-95">
                Gestionar Cartera Morosa
            </button>
        </div>
    );
};

export default function DashboardInsights() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <WeeklySalesChart />
            <TopProducts />
            <OverdueReceivables />
        </div>
    );
}
