"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import {
    LayoutDashboard,
    ShoppingCart,
    History,
    RotateCcw,
    Users,
    Boxes,
    Truck,
    BarChart3,
    Wallet,
    TrendingUp,
    TrendingDown,
    Settings,
    FilePieChart,
    ChevronDown,
    Menu,
    Warehouse,
    Monitor,
    Building2,
    ShieldCheck,
    Receipt
} from 'lucide-react';

interface SubMenuItem {
    name: string;
    href: string;
}

interface MenuGroup {
    name: string;
    icon: any;
    items?: SubMenuItem[];
    href?: string;
}

const menuGroups: MenuGroup[] = [
    { name: 'DASHBOARD', href: '/', icon: LayoutDashboard },
    {
        name: 'COMERCIAL',
        icon: ShoppingCart,
        items: [
            { name: 'Punto de Venta (POS)', href: '/orders' },
            { name: 'Ventas', href: '/billing' },
            { name: 'Gestión de Devoluciones', href: '/returns' },
            { name: 'Directorio de Clientes', href: '/clients' },
        ]
    },
    {
        name: 'LOGÍSTICA',
        icon: Boxes,
        items: [
            { name: 'Inventario', href: '/inventories' },
            { name: 'Gestión de Compras', href: '/shoppings' },
            { name: 'Proveedores', href: '/providers' },
        ]
    },
    {
        name: 'FINANZAS',
        icon: BarChart3,
        items: [
            { name: 'Caja y Arqueo', href: '/cash' },
            { name: 'Cuentas por Cobrar', href: '/receivables' },
            { name: 'Cuentas por Pagar', href: '/payables' },
            { name: 'Egresos y Gastos', href: '/spents' },
        ]
    },
    {
        name: 'GESTIÓN',
        icon: Settings,
        items: [
            { name: 'Centro de Reportes', href: '/reports' },
            { name: 'Ajustes de Sistema', href: '/settings' },
            { name: 'Gestión de Usuarios', href: '/users' },
        ]
    },
];

interface SidebarProps {
    isCollapsed: boolean;
    onToggle: () => void;
}

export default function Sidebar({ isCollapsed, onToggle }: SidebarProps) {
    const pathname = usePathname();
    const [openGroups, setOpenGroups] = useState<string[]>([]);

    // Automatically open the group that contains the active path
    useEffect(() => {
        menuGroups.forEach(group => {
            if (group.items?.some(item => pathname === item.href || pathname.startsWith(item.href + '/'))) {
                setOpenGroups(prev => prev.includes(group.name) ? prev : [...prev, group.name]);
            }
        });
    }, [pathname]);

    const toggleGroup = (name: string) => {
        if (isCollapsed) {
            onToggle();
            setOpenGroups([name]);
            return;
        }
        setOpenGroups(prev =>
            prev.includes(name) ? prev.filter(g => g !== name) : [...prev, name]
        );
    };

    return (
        <div
            className={`relative flex flex-col h-full shadow-sm z-20 transition-all duration-300 bg-[#f3f4f6] border-r border-gray-200/50 ${isCollapsed ? 'w-16' : 'w-56'}`}
        >
            {/* Logo Section */}
            <div className="flex items-center h-[60px] overflow-hidden px-4">
                <div className="flex items-center gap-2 flex-shrink-0">
                    <div className="w-8 h-8 bg-[#EF6820] rounded flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                        R
                    </div>
                    <span className={`text-lg font-bold text-gray-800 tracking-tight transition-all duration-300 origin-left ${isCollapsed ? 'opacity-0 w-0 scale-x-0' : 'opacity-100 w-auto scale-x-100'}`}>
                        RealGestion
                    </span>
                </div>
            </div>

            {/* Menu Toggle Button */}
            <div className="h-12 flex items-center justify-start px-4 flex-shrink-0">
                <button
                    onClick={onToggle}
                    className="w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full shadow-sm flex items-center justify-center text-gray-400 hover:text-blue-600 transition-all border border-gray-200 z-50 hover:scale-110 active:scale-95"
                >
                    <Menu className="w-4 h-4" />
                </button>
            </div>

            {/* Navigation groups */}
            <div className="flex-1 overflow-y-auto pt-2 custom-scrollbar">
                <div className="space-y-1">
                    {menuGroups.map((group) => {
                        const isGroupOpen = openGroups.includes(group.name);
                        const isAnySubActive = group.items?.some(item => pathname === item.href || pathname.startsWith(item.href + '/'));
                        const isDirectActive = group.href && (pathname === group.href);
                        const isActive = isDirectActive || isAnySubActive;

                        return (
                            <div key={group.name} className="px-2">
                                {group.href ? (
                                    <Link
                                        href={group.href}
                                        className={`flex items-center w-full px-3 py-2.5 transition-all rounded-lg group ${isDirectActive ? 'bg-white shadow-sm' : 'hover:bg-gray-200/50'}`}
                                    >
                                        <div className={`flex justify-center flex-shrink-0 transition-colors ${isDirectActive ? 'text-[#EF6820]' : 'text-gray-400 group-hover:text-gray-600'} w-6`}>
                                            <group.icon className={`w-5 h-5 ${isDirectActive ? 'stroke-[2.5px]' : 'stroke-[2px]'}`} />
                                        </div>
                                        {!isCollapsed && (
                                            <span className={`ml-3 text-[13px] font-bold transition-all ${isDirectActive ? 'text-gray-900' : 'text-gray-500 group-hover:text-gray-800'}`}>
                                                {group.name}
                                            </span>
                                        )}
                                    </Link>
                                ) : (
                                    <>
                                        <button
                                            onClick={() => toggleGroup(group.name)}
                                            className={`flex items-center w-full px-3 py-2.5 transition-all rounded-lg group ${isAnySubActive && !isGroupOpen ? 'bg-white/50' : 'hover:bg-gray-200/50'}`}
                                        >
                                            <div className={`flex justify-center flex-shrink-0 transition-colors ${isAnySubActive ? 'text-[#EF6820]' : 'text-gray-400 group-hover:text-gray-600'} w-6`}>
                                                <group.icon className={`w-5 h-5 ${isAnySubActive ? 'stroke-[2.5px]' : 'stroke-[2px]'}`} />
                                            </div>
                                            {!isCollapsed && (
                                                <>
                                                    <span className={`ml-3 text-[13px] font-bold flex-1 text-left transition-all ${isAnySubActive ? 'text-gray-900' : 'text-gray-500 group-hover:text-gray-800'}`}>
                                                        {group.name}
                                                    </span>
                                                    <ChevronDown className={`w-3.5 h-3.5 text-gray-400 transition-transform duration-200 ${isGroupOpen ? 'rotate-180' : ''}`} />
                                                </>
                                            )}
                                        </button>

                                        {/* Sub-menu items */}
                                        {!isCollapsed && isGroupOpen && group.items && (
                                            <div className="mt-1 ml-4 border-l border-gray-200/80 space-y-0.5">
                                                {group.items.map((item) => {
                                                    const isSubActive = pathname === item.href || pathname.startsWith(item.href + '/');
                                                    return (
                                                        <Link
                                                            key={item.name}
                                                            href={item.href}
                                                            className={`flex items-center w-full pl-6 pr-3 py-2 text-[12px] font-semibold transition-all rounded-r-lg border-l-2 ${isSubActive ? 'text-[#EF6820] bg-white/40 border-[#EF6820]' : 'text-gray-400 border-transparent hover:text-gray-700 hover:bg-gray-200/30'}`}
                                                        >
                                                            {item.name}
                                                        </Link>
                                                    );
                                                })}
                                            </div>
                                        )}
                                    </>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Support Section */}
            <div className="p-4 border-t border-gray-200/50 overflow-hidden h-16 flex items-center px-4">
                <div className="flex items-center gap-2 flex-shrink-0">
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-white text-[10px] flex-shrink-0 font-bold">?</div>
                    {!isCollapsed && (
                        <span className="uppercase tracking-widest text-[10px] font-bold text-gray-400 whitespace-nowrap">SOPORTE TÉCNICO</span>
                    )}
                </div>
            </div>
        </div>
    );
}
