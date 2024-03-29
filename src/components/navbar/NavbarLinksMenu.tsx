
import { navbarAdminLinksConfig, navbarLinksConfig } from './navbarLinksConfig';
import Link from 'next/link';



type Props = {
    className: string,
    adminMode: boolean
}

const NavbarLinksMenu = ({className, adminMode}:Props) => {

    const navbarLinks = adminMode === true ? navbarAdminLinksConfig : navbarLinksConfig

    return (
        <div className={className}>
        {navbarLinks.map(item =>
         <Link href={item.href} key={item.label}>{item.label}</Link>
        )}
    </div>
    );
};

export default NavbarLinksMenu;