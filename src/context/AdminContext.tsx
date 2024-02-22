'use client'
import { createContext } from "react";


export default createContext({
    adminMode : true,
    setAdminMode: () => {}
})