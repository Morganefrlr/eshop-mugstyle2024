'use client'
import { emptyProduct } from "@/fakeData/fakeData";
import { ProductType } from "@/fakeData/typeData";
import { createContext, useContext } from "react";



export type GlobalAdminContext = {
    adminMode :boolean,
    setAdminMode:(a:boolean) => void,

    adminPanel :boolean,
    setAdminPanel:(a:boolean) => void,

    adminPanelSelected : string,
    setAdminPanelSelected:(a:string) => void,

    productToEdit : ProductType,
    setProductToEdit:(a:ProductType) => void,


    cart:ProductType[],
    setCart:(a:ProductType[]) => void,

    handleAddProductToCart:(a:ProductType, b:number) => void,

    quantityProducts : number,
    setQuantityProducts:(a:number) => void,
}






export const AdminContext = createContext<GlobalAdminContext>({
    adminMode : false,
    setAdminMode: () => {},

    adminPanel : false,
    setAdminPanel: () => {},

    adminPanelSelected : 'edit',
    setAdminPanelSelected:() => {},

    productToEdit : emptyProduct,
    setProductToEdit:() => {},

    cart:[],
    setCart: () => {},

    handleAddProductToCart: () => {},

    quantityProducts : 0,
    setQuantityProducts:() => {},
})



export const useGlobalAdminContext = () => useContext(AdminContext)