'use client'
import Link from "next/link";
import { useState } from "react";
import {GiShoppingBag} from 'react-icons/gi'
import NavbarLinksMenu from "./NavbarLinksMenu";
import NavbarResponsive from "./NavbarResponsive";
import Logo from "../reusableComponents/logo";




const Navbar = () => {

    const [open, setOpen] = useState(false)

    const handleMenuResponsive = () =>{
        setOpen(!open)
    }

    return (
        <div className="mainNavbar">
            <Logo/>
            <NavbarLinksMenu className={'middleContainerNavbar'}/>

            <div className="rightContainerNavbar">
                <Link href="/">login</Link>

                <div className="cartIconNavbar">
                    <Link href="/"><GiShoppingBag /></Link>
                    <div>1</div>
                </div>
            </div>
           
            <NavbarResponsive onClick={handleMenuResponsive} open={open}/>

        </div>
    );
};




export default Navbar;



