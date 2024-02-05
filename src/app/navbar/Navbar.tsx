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

           <NavbarLinks className={'middleContainerNavbar'}/>

            <div className="rightContainerNavbar">
                <Link href="/">login</Link>

                <div className="cartIconNavbar">
                    <Link href="/"><GiShoppingBag /></Link>
                    <div>1</div>
                </div>
            </div>
           
            <div className="containerNavbarResponsive">
                {!open ? ( <VscMenu className="icon" onClick={() => setOpen(true)}/>):( <VscChromeClose className='icon active'  onClick={() => setOpen(false)}/>)}
                {open && 
                    <NavbarLinks className={'containerNavbarResponsive_links'}/>
                }
                    
                
            </div>

        </div>
    );
};




export default Navbar;



