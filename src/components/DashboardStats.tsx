
import React from 'react';
import { ArrowUpRight, ArrowDownRight, Package, Wallet, AlertCircle, ShoppingCart, LogOut, Download, MinusCircle, TrendingUp } from 'lucide-react';

interface StatCardProps {
    title: string;
    value: string;
    description?: string;
    trend?: {
        value: string;
        isPositive: boolean;
    };
    icon: any;
    status?: 'normal' | 'warning' | 'critical';
}

export function StatCard({ title, value, description, trend, icon: Icon, status = 'normal' }: StatCardProps) {
    const statusClasses = {
        normal: 'border-gray-100',
        warning: 'border-amber-200 bg-amber-50/50',
        critical: 'border-red-200 bg-red-50/50',
    };

    return (
        <div className={`bg-white shadow-sm border rounded-xl p-5 flex flex-col justify-between h-full transition-all hover:shadow-md ${statusClasses[status]}`}>
            <div className="flex justify-between items-start mb-4">
                <div className={`p-2 rounded-lg ${status === 'critical' ? 'bg-red-100 text-red-600' : status === 'warning' ? 'bg-amber-100 text-amber-600' : 'bg-blue-50 text-blue-600'}`}>
                    <Icon className="w-5 h-5" />
                </div>
                {trend && (
                    <div className={`flex items-center text-xs font-bold ${trend.isPositive ? 'text-emerald-600' : 'text-rose-600'}`}>
                        {trend.isPositive ? <ArrowUpRight className="w-3 h-3 mr-0.5" /> : <ArrowDownRight className="w-3 h-3 mr-0.5" />}
                        {trend.value}
                    </div>
                )}
            </div>
            <div>
                <h5 className="text-gray-500 text-[10px] font-black uppercase tracking-widest mb-1">{title}</h5>
                <h3 className="text-2xl font-bold text-gray-900 tracking-tight">{value}</h3>
                {description && <p className="text-[11px] text-gray-400 mt-1 font-medium">{description}</p>}
            </div>
        </div>
    );
}

export default function DashboardStats() {
    return (
        <div className="space-y-8">
            <section>
                <div className="flex justify-between items-end mb-6">
                    <div>
                        <h1 className="text-2xl font-black text-gray-900 tracking-tight">Centro de Mando</h1>
                        <p className="text-sm text-gray-500 font-medium">Monitor de salud del negocio en tiempo real</p>
                    </div>
                    <div className="text-right">
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block">Última actualización</span>
                        <span className="text-xs font-bold text-gray-900">Hoy, 03:25 AM</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    <StatCard
                        title="Ventas Hoy"
                        value="USD 1.250,00"
                        trend={{ value: '12%', isPositive: true }}
                        description="vs. ayer: USD 1.116,00"
                        icon={ShoppingCart}
                    />
                    <StatCard
                        title="Ticket Promedio"
                        value="USD 42,50"
                        trend={{ value: '3.5%', isPositive: false }}
                        description="Poder de compra del cliente"
                        icon={TrendingUp}
                    />
                    <StatCard
                        title="Alertas de Stock"
                        value="5 Productos"
                        status="critical"
                        description="Harina Pan, Arroz Mary, +3"
                        icon={AlertCircle}
                    />
                    <StatCard
                        title="Liquidez en Caja"
                        value="USD 840,00"
                        description="BsD 32.400,00 | USD 450,00"
                        icon={Wallet}
                    />
                </div>
            </section>
        </div>
    );
}
