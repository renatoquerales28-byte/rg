
"use client";

import { useState } from 'react';
import { ArrowLeft, Save, X, Globe, Settings as SettingsIcon, Layout, User, Palette, Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, MessageCircle } from 'lucide-react';
import Link from 'next/link';

type Tab = 'general' | 'fields' | 'config' | 'catalog';

export default function AccountSettingsPage() {
    const [activeTab, setActiveTab] = useState<Tab>('general');

    const tabs = [
        { id: 'general', label: 'Información General' },
        { id: 'fields', label: 'Campos Adicionales' },
        { id: 'config', label: 'Configuraciones' },
        { id: 'catalog', label: 'Catálogo Online' },
    ];

    return (
        <div className="space-y-6 pb-20">
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
                <Link href="/" className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-500">
                    <ArrowLeft className="w-5 h-5" />
                </Link>
                <h1 className="text-2xl font-bold text-[#1e3a8a]">
                    Cuenta <span className="text-gray-400 font-normal">/ Conexión Creativa Global</span>
                </h1>
            </div>

            {/* Custom Tabs */}
            <div className="border-b border-gray-100 flex gap-8 mb-8">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as Tab)}
                        className={`pb-4 text-sm font-bold transition-all relative ${activeTab === tab.id
                                ? 'text-blue-600'
                                : 'text-gray-400 hover:text-gray-600'
                            }`}
                    >
                        {tab.label}
                        {activeTab === tab.id && (
                            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 animate-in fade-in duration-300" />
                        )}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                {activeTab === 'general' && <GeneralTab />}
                {activeTab === 'fields' && <FieldsTab />}
                {activeTab === 'config' && <ConfigTab />}
                {activeTab === 'catalog' && <CatalogTab />}
            </div>
        </div>
    );
}

function GeneralTab() {
    return (
        <div className="p-8">
            <h3 className="text-lg font-bold text-gray-700 mb-6 flex items-center gap-2">
                Información de la cuenta
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
                <InputGroup label="Nombre *" defaultValue="Conexión Creativa Global" />
                <InputGroup label="Identificación *" defaultValue="J-111111111" />
                <InputGroup label="Email *" defaultValue="demo@realgestionlat.com" />
                <InputGroup label="Teléfono" defaultValue="+58 412 2556454" />
                <InputGroup label="Razón Social" defaultValue="RG - Conexión Creativa" />
                <InputGroup label="Dirección" defaultValue="San Diego" />

                <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Color del menú lateral</label>
                    <div className="h-10 border border-gray-200 rounded-lg bg-white flex items-center px-3">
                        <div className="w-full h-0.5 bg-gray-200" />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Color del texto del menú</label>
                    <div className="h-10 border border-gray-200 rounded-lg bg-white flex items-center px-3">
                        <div className="w-full h-0.5 bg-gray-400" />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Color del texto al pasar el mouse</label>
                    <div className="h-10 border border-gray-200 rounded-lg bg-white flex items-center px-3">
                        <div className="w-full h-0.5 bg-blue-500" />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Logo de la empresa</label>
                    <div className="h-10 border border-gray-200 rounded-lg bg-white flex items-center px-3 text-sm text-gray-400">
                        Browse
                    </div>
                </div>
            </div>

            <div className="mt-12 flex justify-end gap-3 border-t pt-8">
                <button className="px-6 py-2 text-sm font-bold text-gray-500 hover:bg-gray-50 rounded-lg transition-all">Cancelar</button>
                <button className="px-6 py-2 text-sm font-bold bg-[#1e3a8a] text-white rounded-lg shadow-sm hover:bg-blue-900 transition-all flex items-center gap-2">
                    <Save className="w-4 h-4" /> Guardar cambios
                </button>
            </div>
        </div>
    );
}

function FieldsTab() {
    return (
        <div className="p-8 space-y-8">
            <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <h3 className="font-bold text-gray-700">Campos adicionales para Órdenes</h3>
                    <button className="text-xs font-bold text-gray-400 hover:text-blue-600 flex items-center gap-1">
                        + Agregar campo
                    </button>
                </div>
                <div className="border border-dashed border-gray-200 rounded-xl p-12 flex flex-col items-center justify-center text-gray-400">
                    <Layout className="w-12 h-12 mb-4 opacity-20" />
                    <p className="text-sm">No hay campos adicionales configurados para órdenes</p>
                </div>
            </div>

            <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <h3 className="font-bold text-gray-700">Campos adicionales para Clientes</h3>
                    <button className="text-xs font-bold text-gray-400 hover:text-blue-600 flex items-center gap-1">
                        + Agregar campo
                    </button>
                </div>
                <div className="border border-dashed border-gray-200 rounded-xl p-12 flex flex-col items-center justify-center text-gray-400">
                    <User className="w-12 h-12 mb-4 opacity-20" />
                    <p className="text-sm">No hay campos adicionales configurados para clientes</p>
                </div>
            </div>
        </div>
    );
}

function ConfigTab() {
    return (
        <div className="p-8">
            <h3 className="font-bold text-gray-700 mb-8 pb-4 border-b border-gray-50">Configuraciones</h3>
            <div className="space-y-8 max-w-2xl">
                <div className="flex items-start gap-4">
                    <div className="mt-1">
                        <div className="w-10 h-6 bg-gray-200 rounded-full relative">
                            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full" />
                        </div>
                    </div>
                    <div>
                        <p className="font-bold text-gray-700 text-sm">Deseas que el vendedor pueda modificar precios</p>
                        <p className="text-xs text-gray-400 mt-1">Habilita que los vendedores ajusten precios en sus pedidos.</p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="mt-1">
                        <div className="w-10 h-6 bg-gray-200 rounded-full relative">
                            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full" />
                        </div>
                    </div>
                    <div>
                        <p className="font-bold text-gray-700 text-sm">Habilitar tasas personalizadas</p>
                        <p className="text-xs text-gray-400 mt-1">Permite crear tasas de cambio específicas para esta cuenta.</p>
                    </div>
                </div>
            </div>

            <div className="mt-12 flex justify-end gap-3 border-t pt-8">
                <button className="px-6 py-2 text-sm font-bold text-gray-500 hover:bg-gray-50 rounded-lg transition-all">Cancelar</button>
                <button className="px-6 py-2 text-sm font-bold bg-[#1e3a8a] text-white rounded-lg shadow-sm hover:bg-blue-900 transition-all flex items-center gap-2">
                    <Save className="w-4 h-4" /> Guardar cambios
                </button>
            </div>
        </div>
    );
}

function CatalogTab() {
    return (
        <div className="p-8 space-y-12">
            {/* Colores */}
            <section>
                <div className="flex justify-between items-center mb-6">
                    <div className="space-y-1">
                        <h3 className="font-bold text-gray-700">Colores del Catálogo</h3>
                        <p className="text-xs text-gray-400">Personaliza los colores de tu tienda online</p>
                    </div>
                    <button className="text-[10px] font-bold text-gray-400 hover:text-blue-600 flex items-center gap-1 uppercase tracking-widest">
                        <RefreshCcw className="w-3 h-3" /> Restaurar colores por defecto
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <ColorInput label="Color Principal" />
                    <ColorInput label="Color Secundario" />
                    <ColorInput label="Color de Ofertas" />
                    <ColorInput label="Color de Destacados" />
                    <ColorInput label="Color de Texto" />
                    <ColorInput label="Color de Texto Claro" />
                    <ColorInput label="Color de Fondo" />
                    <ColorInput label="Color de Tarjetas" />
                </div>
                <div className="mt-6 flex justify-end border-t pt-6">
                    <button className="px-4 py-2 bg-white border border-gray-100 text-gray-400 rounded-lg text-xs font-bold flex items-center gap-2 hover:bg-gray-50 transition-all">
                        <Save className="w-3 h-3" /> Guardar cambios
                    </button>
                </div>
            </section>

            {/* Contacto */}
            <section>
                <div className="space-y-1 mb-6">
                    <h3 className="font-bold text-gray-700">Información de Contacto</h3>
                    <p className="text-xs text-gray-400">Esta información se mostrará en el footer del catálogo</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputGroup label="Teléfono" defaultValue="+58 (424) 123-4567" />
                    <InputGroup label="Email" defaultValue="info@tienda.com" />
                    <InputGroup label="Dirección" defaultValue="Caracas, Venezuela" />
                    <InputGroup label="Horario" defaultValue="Lun - Vie: 9:00 AM - 6:00 PM" />
                </div>
                <div className="mt-6 flex justify-end border-t pt-6">
                    <button className="px-4 py-2 bg-white border border-gray-100 text-gray-400 rounded-lg text-xs font-bold flex items-center gap-2 hover:bg-gray-50 transition-all">
                        <Save className="w-3 h-3" /> Guardar cambios
                    </button>
                </div>
            </section>

            {/* Redes Sociales */}
            <section>
                <div className="space-y-1 mb-6">
                    <h3 className="font-bold text-gray-700">Redes Sociales</h3>
                    <p className="text-xs text-gray-400">Enlaces a tus redes sociales</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputGroup label="Facebook" defaultValue="https://facebook.com/tutienda" />
                    <InputGroup label="Instagram" defaultValue="https://instagram.com/tutienda" />
                    <InputGroup label="Twitter" defaultValue="https://twitter.com/tutienda" />
                    <InputGroup label="WhatsApp" defaultValue="+584241234567" />
                </div>
                <div className="mt-6 flex justify-end border-t pt-6">
                    <button className="px-4 py-2 bg-white border border-gray-100 text-gray-400 rounded-lg text-xs font-bold flex items-center gap-2 hover:bg-gray-50 transition-all">
                        <Save className="w-3 h-3" /> Guardar cambios
                    </button>
                </div>
            </section>
        </div>
    );
}

function InputGroup({ label, defaultValue }: { label: string, defaultValue?: string }) {
    return (
        <div className="space-y-2">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{label}</label>
            <input
                type="text"
                defaultValue={defaultValue}
                className="w-full px-4 py-2.5 bg-white border border-gray-100 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all"
            />
        </div>
    );
}

function ColorInput({ label }: { label: string }) {
    return (
        <div className="space-y-2">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{label}</label>
            <div className="h-10 bg-white border border-gray-100 rounded-lg flex items-center px-3">
                <div className="w-full h-0.5 bg-gray-100" />
            </div>
        </div>
    );
}

function RefreshCcw(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
            <path d="M3 3v5h5" />
            <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
            <path d="M16 16h5v5" />
        </svg>
    )
}
