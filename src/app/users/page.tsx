
"use client";

import { Search, Filter, Plus, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function UsersListPage() {
    const users = [
        { name: 'Usuario Demo Pro', email: 'usuariodeprueba@gmail.com', role: 'admin', store: 'Conexión Creativa Global' },
        { name: 'Renato Querales', email: 'renatoquerales28@gmail.com', role: 'sales', store: 'Conexión Creativa Global' },
    ];

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <h1 className="text-3xl font-bold text-gray-800 tracking-tight">Usuarios</h1>
                <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-bold text-gray-600 hover:bg-gray-50 transition-all shadow-sm">
                    <Plus className="w-4 h-4" /> Crear Usuario
                </button>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex border border-gray-200 rounded-lg bg-white overflow-hidden">
                    <button className="px-4 py-2 text-sm font-bold text-gray-500 border-r border-gray-100 hover:bg-gray-50 flex items-center gap-2">
                        Filtrar <ChevronRight className="w-3 h-3 rotate-90" />
                    </button>
                    <div className="relative flex-1 min-w-[300px]">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Buscar..."
                            className="w-full pl-10 pr-4 py-2 focus:outline-none bg-transparent text-sm"
                        />
                    </div>
                </div>
                <button className="text-sm font-bold text-blue-600 hover:underline">Reiniciar</button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left text-sm">
                    <thead className="bg-[#fcfcfc] text-gray-400 font-bold border-b border-gray-100 uppercase text-[11px] tracking-tighter">
                        <tr>
                            <th className="px-8 py-4">Nombre y Apellido</th>
                            <th className="px-8 py-4">Correo electrónico</th>
                            <th className="px-8 py-4">Rol</th>
                            <th className="px-8 py-4">Tienda</th>
                            <th className="px-8 py-4"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50 font-medium">
                        {users.map((user, index) => (
                            <tr key={index} className="hover:bg-gray-50/50 transition-all group cursor-pointer">
                                <td className="px-8 py-5 text-gray-800 font-bold">{user.name}</td>
                                <td className="px-8 py-5 text-gray-400">{user.email}</td>
                                <td className="px-8 py-5">
                                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${user.role === 'admin' ? 'bg-blue-50 text-blue-600' : 'bg-gray-50 text-gray-500'
                                        }`}>
                                        {user.role}
                                    </span>
                                </td>
                                <td className="px-8 py-5 text-gray-500">{user.store}</td>
                                <td className="px-8 py-5 text-right">
                                    <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-blue-600 transition-colors inline" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
