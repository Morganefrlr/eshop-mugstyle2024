'use client'
import { emptyProduct } from "@/fakeData/fakeData";
import { ProductType } from "@/fakeData/typeData";
import { createContext, useContext } from "react";



export type GlobalAdminContext = {
    adminMode :boolean,
    setAdminMode:(c:boolean) => void,

    adminPanel :boolean,
    setAdminPanel:(c:boolean) => void,

    adminPanelSelected : string,
    setAdminPanelSelected:(c:string) => void,

    productToEdit : ProductType,
    setProductToEdit:(c:ProductType) => void,


    cart:ProductType[],
    setCart:(c:ProductType[]) => void,

    handleAddProductToCart:(c:ProductType) => void,
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

    handleAddProductToCart: () => {}
})



export const useGlobalAdminContext = () => useContext(AdminContext)