import Link from "next/link";
import Logo from "../reusableComponents/logo";
import { footerMenuConfig } from "./footerMenuConfig";


const Footer = () => {
    return (
        <div className="mainFooter">
            <Logo />

            <div>
                {footerMenuConfig.map(item =>
                <div key={item.label}>
                    <h3>{item.label}</h3>
                    {item.cat?.map(link =>
                        <Link href={link.href} key={link.labelCat}>{link.labelCat}</Link>
                    )}
                    {item.desc && 
                        <>
                            <span>{item.desc}</span>
                            <span>{item.mail}</span>
                        </>
                    }
                </div>
                
                )}
            </div>
        </div>
    );
};

export default Footer;