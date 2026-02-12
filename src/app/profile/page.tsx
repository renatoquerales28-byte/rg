
"use client";

import { ArrowLeft, Save, Trash2, Camera } from 'lucide-react';
import Link from 'next/link';

export default function ProfilePage() {
    return (
        <div className="space-y-6 pb-20">
            <div className="flex items-center gap-4 mb-8">
                <Link href="/" className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-500">
                    <ArrowLeft className="w-5 h-5" />
                </Link>
                <h1 className="text-2xl font-bold text-[#1e3a8a]">
                    Usuarios <span className="text-gray-400 font-normal">/ Usuario Demo Pro</span>
                </h1>
            </div>

            <div className="max-w-4xl bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-8">
                    <h3 className="text-lg font-bold text-gray-700 mb-6">Información del usuario</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Nombre *</label>
                            <input
                                type="text"
                                defaultValue="Usuario Demo"
                                className="w-full px-4 py-2.5 bg-white border border-gray-100 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-medium"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Apellido *</label>
                            <input
                                type="text"
                                defaultValue="Pro"
                                className="w-full px-4 py-2.5 bg-white border border-gray-100 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-medium"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Correo electrónico *</label>
                            <input
                                type="email"
                                defaultValue="usuariodeprueba@gmail.com"
                                className="w-full px-4 py-2.5 bg-white border border-gray-100 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-medium"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Contraseña</label>
                            <input
                                type="password"
                                placeholder="Dejar en blanco para mantener"
                                className="w-full px-4 py-2.5 bg-white border border-gray-100 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-medium"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Rol *</label>
                            <select className="w-full px-4 py-2.5 bg-white border border-gray-100 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-medium appearance-none">
                                <option>Administrador</option>
                                <option>Vendedor</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Tienda *</label>
                            <select className="w-full px-4 py-2.5 bg-white border border-gray-100 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-medium appearance-none">
                                <option>Conexión Creativa Global</option>
                            </select>
                        </div>

                        <div className="md:col-span-2 space-y-2">
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Foto de perfil</label>
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-300">
                                    <Camera className="w-6 h-6" />
                                </div>
                                <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-bold text-gray-500 hover:bg-gray-50 transition-all">
                                    Browse
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 flex justify-between items-center border-t pt-8">
                        <button className="flex items-center gap-2 text-red-500 text-sm font-bold hover:bg-red-50 px-4 py-2 rounded-lg transition-all">
                            <Trash2 className="w-4 h-4" /> Eliminar usuario
                        </button>
                        <button className="px-6 py-2 text-sm font-bold bg-[#1e3a8a] text-white rounded-lg shadow-sm hover:bg-blue-900 transition-all flex items-center gap-2">
                            <Save className="w-4 h-4" /> Actualizar usuario
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
