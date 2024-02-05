export interface PricePlansInterface {
    id: number,
    description: string,
    active: boolean,
    createdAt: string,
    removedAt: string
}

export interface ProductInterface {
    id: number,
    name: string,
    active: boolean,
    createdAt: string
}

export interface PageInterface {
    id: number,
    title: string,
    active: boolean,
    updatedAt: string,
    publishedAt: string
}

export interface MixedInterface {
    id: number,
    title: string,
    active: boolean,
    updatedAt: string,
    publishedAt: string,
    name: string,
    createdAt: string,
    description: string,
    removedAt: string
}