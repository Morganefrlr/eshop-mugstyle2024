import React from 'react';
import { navbarLinksConfig } from './navbarLinksConfig';
import Link from 'next/link';



type Props = {
    className: string
}


const NavbarLinks = ({className}:Props) => {
    return (
        <div className={className}>
        {navbarLinksConfig.map(item =>
         <Link href={item.href} key={item.label}>{item.label}</Link>
        )}
    </div>
    );
};

export default NavbarLinks;