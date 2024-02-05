'use client'
import Link from "next/link";
import { useState } from "react";
import {GiShoppingBag} from 'react-icons/gi'
import {VscMenu, VscChromeClose} from 'react-icons/vsc'
import NavbarLinks from "./navbarLinks";
import NavbarResponsive from "./navbarResponsive";



const Navbar = () => {

    const [open, setOpen] = useState(false)

    const handleMenuResponsive = () =>{
        setOpen(!open)
    }

    return (
        <div className="mainNavbar">
            <h1>MugStyle.</h1>

           <NavbarLinks className={'middleContainerNavbar'}/>

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



