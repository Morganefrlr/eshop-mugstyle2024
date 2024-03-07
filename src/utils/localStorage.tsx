import { ProductType } from "@/fakeData/typeData"


export const setLocalStorage = (key : string, value : ProductType[]) => {
    localStorage.setItem(key, JSON.stringify(value))
}

export const gatLocalStorage = (key: string) => {
    return JSON.parse(localStorage.getItem(key)|| '""')
}