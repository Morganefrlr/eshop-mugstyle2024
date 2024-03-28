import {VscMenu, VscChromeClose} from 'react-icons/vsc'
import NavbarLinksMenu from './NavbarLinksMenu';

type Props ={
    onClick : ()=>void,
    openMenuResponsive: boolean,
    adminMode: boolean,
}

const NavbarResponsive = ({onClick, openMenuResponsive, adminMode} : Props) => {
    return (
        <div className="containerNavbarResponsive">
                {!openMenuResponsive ? ( <VscMenu className="icon" onClick={onClick}/>):( <VscChromeClose className='icon active'  onClick={onClick}/>)}
                {openMenuResponsive && 
                    <NavbarLinksMenu className={'containerNavbarResponsive_links'} adminMode={adminMode}/>
                }
                    
                
            </div>
    );
};

export default NavbarResponsive;