'use client'
import Link from "next/link";
import {  useState } from "react";
import {GiShoppingBag} from 'react-icons/gi'
import NavbarLinksMenu from "./NavbarLinksMenu";
import NavbarResponsive from "./NavbarResponsive";
import Logo from "../../reusableComponents/LogoMugStyle";
import  { useGlobalAdminContext } from "@/context/AdminContext";
import { IoMdSettings } from "react-icons/io";
import { useRouter } from 'next/navigation'
import { toast } from "react-toastify";



const Navbar = () => {

    const {adminMode, quantityProducts, setAdminMode} = useGlobalAdminContext()
    const [openMenuResponsive, setOpenMenuResponsive] = useState(false)
    const router = useRouter()


    const handleMenuResponsive = () =>{
        setOpenMenuResponsive(!openMenuResponsive)
    }

    const handleAdminMode = () => {
        if(adminMode){
            setAdminMode(!adminMode) 
            toast.info('Admin Mode Desactivated!')
            router.push('/')
        }

        if(!adminMode){
            setAdminMode(!adminMode) 
            toast.info('Admin Mode Activated!')
            router.push('/admin')
        }
        

        
    }
    return (
        <div className="mainNavbar">
            <Logo/>

            <NavbarLinksMenu className={'middleContainerNavbar'} adminMode={adminMode}/>
            
            <div className="rightContainerNavbar">
                
                {!adminMode && <Link href="/login">login</Link>}

                <div className="cartIconNavbar">
                {!adminMode && <>
                    <Link href="/cart"><GiShoppingBag /></Link>
                    <div>{quantityProducts}</div>
                </>}
                    
                </div>
                <button className={adminMode ? 'adminMode actif' : 'adminMode '} onClick={handleAdminMode}><IoMdSettings className="iconSettings"/></button>
            </div>
           
            <NavbarResponsive onClick={handleMenuResponsive} openMenuResponsive={openMenuResponsive} adminMode={adminMode}/>

        </div>
    );
};




export default Navbar;



