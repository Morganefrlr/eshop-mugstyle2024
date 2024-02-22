import React from 'react';
import { navbarAdminLinksConfig, navbarLinksConfig } from './navbarLinksConfig';
import Link from 'next/link';



type Props = {
    className: string
}

const NavbarLinksMenu = ({className}:Props) => {

    const admin = true
    const navbarLinks = admin === true ? navbarAdminLinksConfig : navbarLinksConfig

    return (
        <div className={className}>
        {navbarLinks.map(item =>
         <Link href={item.href} key={item.label}>{item.label}</Link>
        )}
    </div>
    );
};

export default NavbarLinksMenu;