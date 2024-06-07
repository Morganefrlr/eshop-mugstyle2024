export type ProductType = {
    id: number,
    title:string,
    cover: string,
    price: number,
    pictures: string[],
    slug: string,
    capacity?: number,
    width?: number,
    height?: number,
    material?: string,
    color?: string,
    mugType?: string, 
    desc?: string,
    detail?: string, 
    views?:number,
    isFeatured : boolean,
    quantity: number,
}

export type OrderType = {
    id: number,
    createdAt: string,
    customer: string,
    location: string,
    price: string,
    status: string
}

export type LogInPageContentType = {
    index: string;
    title: string;
    inputs: {
        label: string;
        type: string;
        name: string;
    }[];
    span: string;
    onClick: string;
}