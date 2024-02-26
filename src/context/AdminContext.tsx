'use client'
import { createContext, useContext } from "react";



export type GlobalAdminContext = {
    adminMode :boolean,
    setAdminMode:(c:boolean) => void,

    adminPanel :boolean,
    setAdminPanel:(c:boolean) => void,

    adminPanelSelected : string,
    setAdminPanelSelected:(c:string) => void,
}






export const AdminContext = createContext<GlobalAdminContext>({
    adminMode : true,
    setAdminMode: () => {},

    adminPanel : false,
    setAdminPanel: () => {},

    adminPanelSelected : 'edit',
    setAdminPanelSelected:() => {},
})



export const useGlobalAdminContext = () => useContext(AdminContext)