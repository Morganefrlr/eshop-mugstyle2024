import { ProductType } from "@/fakeData/typeData"


export const deepCloneArray = (arrayToClone : ProductType[]) =>{
    return JSON.parse(JSON.stringify(arrayToClone))
}

export const findInArray = (slug : string, array: ProductType[]) => {
    return array.find(el => el.slug === slug)
}



export const findIndexInArray = (slug : string, array: ProductType[]) => {
    return array.findIndex(el => el.slug === slug)
}