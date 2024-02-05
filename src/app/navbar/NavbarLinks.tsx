import React from 'react';
import { navbarLinksConfig } from './navbarLinksConfig';
import Link from 'next/link';

const NavbarLinks = () => {
    return (
        <div className="middleContainerNavbar">
        {navbarLinksConfig.map(item =>
         <Link href={item.href} key={item.label}>{item.label}</Link>
        )}
    </div>
    );
};

export default NavbarLinks;