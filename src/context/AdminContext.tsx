'use client'
import { emptyProduct } from "@/fakeData/fakeData";
import { ProductType } from "@/fakeData/typeData";
import { createContext, useContext } from "react";



export type GlobalAdminContextType = {
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

    totalPrice : number,
    setTotalPrice:(a:number) => void,

    handleDeleteProductToCart:(a:string) => void


    products:ProductType[],
    setProducts:(a:ProductType[]) => void,
    handleDeleteProduct:(a:string) => void
    handleAddProduct:(a:ProductType) => void
    handleEditProduct:(a:ProductType) => void

}






export const AdminContext = createContext<GlobalAdminContextType>({
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

    totalPrice : 0,
    setTotalPrice:() => {},

    handleDeleteProductToCart: () => {},


    products:[],
    setProducts: () => {},
    handleDeleteProduct: () => {},
    handleAddProduct: () => {},
    handleEditProduct: () => {},
})



export const GlobalAdminContext = () => useContext(AdminContext)