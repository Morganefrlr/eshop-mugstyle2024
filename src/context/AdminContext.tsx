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
}






export const AdminContext = createContext<GlobalAdminContext>({
    adminMode : true,
    setAdminMode: () => {},

    adminPanel : false,
    setAdminPanel: () => {},

    adminPanelSelected : 'edit',
    setAdminPanelSelected:() => {},

    productToEdit : emptyProduct,
    setProductToEdit:() => {},
})



export const useGlobalAdminContext = () => useContext(AdminContext)