
import React from 'react';

interface DataTableProps {
    headers: string[];
    rows: React.ReactNode[][];
}

export default function DataTable({ headers, rows }: DataTableProps) {
    return (
        <div className="bg-white rounded shadow-sm overflow-hidden border border-gray-100">
            <div className="overflow-x-auto">
                <table className="w-full whitespace-nowrap text-left text-sm">
                    <thead className="bg-[#fcfcfc] text-gray-400 font-bold border-b border-gray-100">
                        <tr>
                            {headers.map((header, index) => (
                                <th key={index} className="px-8 py-4 uppercase tracking-tighter text-[11px]">{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50 font-medium text-gray-700">
                        {rows.map((row, rowIndex) => (
                            <tr key={rowIndex} className="hover:bg-gray-50 transition-colors group cursor-pointer">
                                {row.map((cell, cellIndex) => (
                                    <td key={cellIndex} className="px-8 py-4 group-hover:text-blue-600 transition-colors">
                                        {cell}
                                    </td>
                                ))}
                            </tr>
                        ))}
                        {rows.length === 0 && (
                            <tr>
                                <td colSpan={headers.length} className="px-6 py-12 text-center text-gray-400 italic">
                                    No se encontraron registros
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
