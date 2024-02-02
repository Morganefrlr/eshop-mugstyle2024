import Link from "next/link";
import {GiShoppingBag} from 'react-icons/gi'


const Navbar = () => {
    return (
        <div className="mainNavbar">
            <h1>MugStyle.</h1>

            <div className="middleContainerNavbar">
                <Link href="/">Home</Link>
                <Link href="/">Our products</Link>
                <Link href="/">About</Link>
                <Link href="/">contact</Link>
            </div>

            <div className="rightContainerNavbar">
                <Link href="/">login</Link>

                <div className="cartIconNavbar">
                    <Link href="/"><GiShoppingBag /></Link>
                    <div>1</div>
                </div>

            </div>
        </div>
    );
};




export default Navbar;



