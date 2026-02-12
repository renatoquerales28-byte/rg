
"use client";

import { Check, X, CreditCard, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function SubscriptionPage() {
    const features = [
        "Hasta 3 usuarios",
        "Modulo de clientes",
        "Modulo de productos",
        "Catalogo online de productos",
        "Modulo de ventas",
        "Modulo de compras",
        "Modulo de proveedores",
        "Modulo de gastos",
        "Modulo de inventario",
        "Modulo de reportes",
        "Soporte por chat"
    ];

    return (
        <div className="space-y-6 pb-20">
            <div className="flex items-center gap-4 mb-8">
                <Link href="/" className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-500">
                    <ArrowLeft className="w-5 h-5" />
                </Link>
                <h1 className="text-2xl font-bold text-[#1e3a8a]">Mi Suscripción</h1>
            </div>

            <div className="max-w-4xl bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden relative">
                <div className="p-12">
                    <div className="flex justify-between items-start mb-12">
                        <div>
                            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Plan Actual</h2>
                            <h3 className="text-3xl font-black text-[#1e3a8a]">Emprendedor</h3>
                            <p className="text-gray-500 font-bold mt-1">$15/mes</p>
                            <p className="text-gray-400 text-sm mt-4 italic">Sin suscripción activa</p>
                        </div>
                        <div className="bg-amber-50 text-amber-600 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-amber-100">
                            Inactivo
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-xs font-bold text-gray-800 uppercase tracking-widest border-b pb-2">Características Incluidas</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                                    <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500">
                                        <Check className="w-3 h-3" />
                                    </div>
                                    {feature}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-16 flex justify-between items-center border-t pt-8">
                        <button className="text-sm font-bold text-gray-400 hover:text-blue-600 transition-colors uppercase tracking-widest">
                            Cambiar Plan
                        </button>
                        <button className="text-sm font-bold text-gray-400 hover:text-red-500 transition-colors uppercase tracking-widest">
                            Cancelar Suscripción
                        </button>
                    </div>
                </div>

                {/* Decorative background element */}
                <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
                    <CreditCard className="w-64 h-64 text-[#1e3a8a]" />
                </div>
            </div>
        </div>
    );
}
