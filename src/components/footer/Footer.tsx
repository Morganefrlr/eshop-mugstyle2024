
import Logo from "../../reusableComponents/LogoMugStyle";
import FooterLinksMenu from "./FooterLinksMenu";
import {BiLogoFacebook, BiLogoPinterest, BiLogoInstagram, BiLogoTwitter} from 'react-icons/bi'


const Footer = () => {
    return (
        <div className="mainFooter">
            <Logo />
            <FooterLinksMenu />

            <div className="footerResponsive">
                <BiLogoFacebook />
                <BiLogoInstagram/>
                <BiLogoPinterest/>
                <BiLogoTwitter/>
            </div>
        </div>
    );
};

export default Footer;