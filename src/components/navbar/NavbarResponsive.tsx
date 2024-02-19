import {VscMenu, VscChromeClose} from 'react-icons/vsc'
import NavbarLinks from './NavbarLinksMenu';

type Props ={
    onClick : ()=>void,
    open: boolean
}

const NavbarResponsive = ({onClick, open} : Props) => {
    return (
        <div className="containerNavbarResponsive">
                {!open ? ( <VscMenu className="icon" onClick={onClick}/>):( <VscChromeClose className='icon active'  onClick={onClick}/>)}
                {open && 
                    <NavbarLinks className={'containerNavbarResponsive_links'}/>
                }
                    
                
            </div>
    );
};

export default NavbarResponsive;