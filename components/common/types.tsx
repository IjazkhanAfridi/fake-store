'use client'

export interface ProductData {
    id: number;
    category: string;
    description: string;
    image: string;
    price: number;
    rating: {
        count: number;
        rate: number;
    };
    title: string;
}
