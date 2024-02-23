'use client'
import { createContext, useContext } from "react";



export type GlobalAdminContext = {
    adminMode :boolean,
    setAdminMode:(c:boolean) => void,

    editMode :boolean,
    setEditMode:(c:boolean) => void
}






export const AdminContext = createContext<GlobalAdminContext>({
    adminMode : true,
    setAdminMode: () => {},


    editMode : false,
    setEditMode: () => {}
})



export const useGlobalAdminContext = () => useContext(AdminContext)