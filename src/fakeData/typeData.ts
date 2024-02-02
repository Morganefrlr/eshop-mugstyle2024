export type ProductType = {
    id: number,
    title:string,
    cover: string,
    price: number,
    pictures?: string[],
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
    isFeatured? : boolean
}