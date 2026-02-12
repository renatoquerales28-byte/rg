
"use client";

import { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <div className="flex h-screen overflow-hidden bg-white font-sans text-gray-900">
            {/* Sidebar */}
            <Sidebar isCollapsed={isCollapsed} onToggle={() => setIsCollapsed(!isCollapsed)} />

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
                <Header />

                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-white p-6 scroll-smooth">
                    <div className="max-w-full mx-auto">
                        {children}

                        {/* Footer */}
                        <footer className="mt-12 pt-6 border-t border-gray-100 text-[11px] text-gray-400">
                            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                                <div>
                                    © 2026 Realgestión. Todos los derechos reservados.
                                </div>
                                <div className="flex gap-4">
                                    <a href="#" className="hover:text-blue-600">Centro de Ayuda</a>
                                    <a href="#" className="hover:text-blue-600">Términos y Condiciones</a>
                                    <a href="#" className="hover:text-blue-600">Política de Privacidad</a>
                                </div>
                            </div>
                        </footer>
                    </div>
                </main>

                {/* Floating Chat Button */}
                <button className="fixed bottom-6 right-6 w-12 h-12 bg-[#ff4b6b] text-white rounded-full shadow-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-all z-50">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                        <path d="M12 3c5.5 0 10 3.58 10 8s-4.5 8-10 8c-1.24 0-2.43-.18-3.53-.5C5.55 21 2 21 2 21c2.33-2.33 2.7-3.9 2.75-4.5C3.05 15.07 2 13.13 2 11c0-4.42 4.5-8 10-8" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
