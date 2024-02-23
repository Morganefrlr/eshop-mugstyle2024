'use client'
import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import { ReactNode, useState } from 'react';
import { Rubik } from "next/font/google";
import {AdminContext} from '@/context/AdminContext';


const rubik = Rubik({ subsets: ["latin"] });

type Props ={
    children: ReactNode
}

const ContextLayout = ({children} : Props) => {

    const [adminMode, setAdminMode] = useState<boolean>(true)
    const [editMode, setEditMode] = useState<boolean>(false)


    
    const adminProviderValue ={
        adminMode,
        setAdminMode,
        editMode,
        setEditMode
    }


    
    return (
        <AdminContext.Provider value={adminProviderValue}>
            <body className={rubik.className}>
                <Navbar/>
                {children}
                <Footer />
            </body>
        </AdminContext.Provider>
    );
};

export default ContextLayout;