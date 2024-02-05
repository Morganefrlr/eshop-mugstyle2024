'use client'
import Link from "next/link";
import { useState } from "react";
import {GiShoppingBag} from 'react-icons/gi'
import {VscMenu, VscChromeClose} from 'react-icons/vsc'
import NavbarLinks from "./navbarLinks";



const Navbar = () => {

    const [open, setOpen] = useState(false)



    return (
        <div className="mainNavbar">
            <h1>MugStyle.</h1>

           <NavbarLinks/>

            <div className="rightContainerNavbar">
                <Link href="/">login</Link>

                <div className="cartIconNavbar">
                    <Link href="/"><GiShoppingBag /></Link>
                    <div>1</div>
                </div>
            </div>
           
            <div>
                {!open ? ( <VscMenu onClick={() => setOpen(true)}/>):( <VscChromeClose onClick={() => setOpen(false)}/>)}
            </div>

        </div>
    );
};




export default Navbar;



