'use client'
import Link from "next/link";
import {  useState } from "react";
import {GiShoppingBag} from 'react-icons/gi'
import NavbarLinksMenu from "./NavbarLinksMenu";
import NavbarResponsive from "./NavbarResponsive";
import Logo from "../../reusableComponents/LogoMugStyle";
import  { useGlobalAdminContext } from "@/context/AdminContext";




const Navbar = () => {

    const {adminMode, quantityProducts} = useGlobalAdminContext()
    const [open, setOpen] = useState(false)

    const handleMenuResponsive = () =>{
        setOpen(!open)
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
            </div>
           
            <NavbarResponsive onClick={handleMenuResponsive} open={open}/>

        </div>
    );
};




export default Navbar;



