
import React from 'react';

interface PageHeaderProps {
    title: string;
    actions?: { name: string; href?: string; onClick?: () => void; primary?: boolean }[];
}

export default function PageHeader({ title, actions }: PageHeaderProps) {
    return (
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
            <div className="flex flex-wrap gap-3">
                {actions?.map((action) => (
                    <button
                        key={action.name}
                        onClick={action.onClick}
                        className={`px-4 py-2 rounded-lg font-medium transition-all shadow-sm hover:shadow-md ${action.primary
                                ? 'bg-blue-600 text-white hover:bg-blue-700'
                                : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                            }`}
                    >
                        {action.name}
                    </button>
                ))}
            </div>
        </div>
    );
}
