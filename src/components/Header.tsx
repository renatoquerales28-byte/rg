"use client";

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, RefreshCcw, User, CreditCard, Users, Settings, LogOut } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    // Close menu when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const menuItems = [
        { label: 'Mi perfil', icon: User, href: '/profile' },
        { label: 'Mi Suscripción', icon: CreditCard, href: '/subscription' },
        { label: 'Usuarios', icon: Users, href: '/users' },
        { label: 'Cuenta', icon: Settings, href: '/settings' },
        { label: 'Cerrar sesión', icon: LogOut, danger: true },
    ];

    return (
        <header className="h-[60px] bg-white border-b border-gray-100 flex items-center justify-between px-6 flex-shrink-0 z-50">
            <div className="flex items-center gap-4">
                <span className="bg-gray-100 px-2 py-0.5 rounded text-[10px] font-bold text-gray-500 border border-gray-200 uppercase">
                    1.47.1
                </span>
                <div className="hidden md:flex items-center gap-2 text-gray-400 font-medium text-[11px]">
                    <RefreshCcw className="w-3 h-3" />
                    <span>1$ = 382.63180000 BsD</span>
                </div>
            </div>

            <div className="flex items-center gap-4 relative" ref={menuRef}>
                <div
                    className="flex items-center gap-2 cursor-pointer group"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <div className="text-right">
                        <div className="flex items-center gap-1 justify-end">
                            <span className="font-bold text-gray-700 text-xs">Usuario Demo</span>
                            <span className="bg-gray-100 text-gray-500 text-[9px] px-1 rounded font-bold uppercase">Pro</span>
                        </div>
                        <div className="text-[10px] text-gray-400">
                            (Plan Emprendedor)
                        </div>
                    </div>
                    <div className={`w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center border border-gray-200 transition-all ${isMenuOpen ? 'border-blue-200 bg-blue-50' : ''}`}>
                        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isMenuOpen ? 'rotate-180 text-blue-600' : 'group-hover:text-blue-600'}`} />
                    </div>
                </div>

                {/* Dropdown Menu */}
                {isMenuOpen && (
                    <div className="absolute right-0 top-[50px] w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                        {menuItems.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href || '#'}
                                className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors hover:bg-gray-50 ${item.danger ? 'text-red-500 border-t border-gray-50 mt-1' : 'text-gray-600'
                                    }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <item.icon className="w-4 h-4" />
                                <span className={`${item.danger ? 'font-bold' : 'font-medium'}`}>{item.label}</span>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </header>
    );
}
