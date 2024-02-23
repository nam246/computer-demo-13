export interface Product {
    id: number,
    title: string,
    slug: string,
    description?: string,
    content?: string,
    image?: string,
    price?: string,
    categories?: ProductCategory[],
}

export interface ProductCategory {
    id: number,
    name: string,
    slug: string,
    description?: string,
    content?: string,
    image?: string,
    parent_id?: number
    products?: Product[],
}

export interface Page {
    id: number,
    name: string,
    slug: string,
    description?: string,
    content?: string,
    image?: string,
    create_at?: Date,
    update_at?: Date
}