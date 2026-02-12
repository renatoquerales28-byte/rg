
import React from 'react';

export interface MenuItem {
    name: string;
    href: string;
    icon: React.ElementType;
}

export interface StatData {
    title: string;
    value: string;
}

export interface SaleData {
    id: string;
    date: string;
    number: string;
    customer: string;
    status: string;
    seller: string;
    paid: string;
    total: string;
}

export interface ProductData {
    code: string;
    name: string;
    category: string;
    brand: string;
    quantity: string;
    cost: string;
    price: string;
    priceBs: string;
    profit: string;
}

export interface ClientData {
    company: string;
    name: string;
    id: string;
    email: string;
    address: string;
    debt: string;
    phone: string;
}
