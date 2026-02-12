
import React from 'react';
import Link from 'next/link';
import { ShoppingCart, LogOut, Download, MinusCircle, Plus } from 'lucide-react';

const actions = [
    {
        name: 'Nueva Venta (POS)',
        href: '/orders',
        icon: ShoppingCart,
        color: 'bg-blue-600 hover:bg-blue-700',
        description: 'Facturación inmediata'
    },
    {
        name: 'Realizar Cierre de Caja',
        href: '/cash',
        icon: LogOut,
        color: 'bg-slate-800 hover:bg-slate-900',
        description: 'Arqueo de fin de jornada'
    },
    {
        name: 'Recepción de Mercancía',
        href: '/shoppings',
        icon: Download,
        color: 'bg-emerald-600 hover:bg-emerald-700',
        description: 'Entrada de stock'
    },
    {
        name: 'Registrar Egreso',
        href: '/spents',
        icon: MinusCircle,
        color: 'bg-rose-600 hover:bg-rose-700',
        description: 'Gastos menores'
    },
];

export default function DashboardQuickAccess() {
    return (
        <div className="mt-8">
            <h2 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-4">Acciones Directas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {actions.map((action) => (
                    <Link
                        key={action.name}
                        href={action.href}
                        className={`group flex items-center p-4 rounded-xl transition-all shadow-sm hover:shadow-md ${action.color}`}
                    >
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/20 text-white mr-4 group-hover:scale-110 transition-transform">
                            <action.icon className="w-5 h-5" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-white font-bold text-sm leading-tight">{action.name}</span>
                            <span className="text-white/70 text-[10px] uppercase font-bold tracking-tighter mt-0.5">{action.description}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
