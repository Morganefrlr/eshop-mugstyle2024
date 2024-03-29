
import { footerMenuConfig } from './footerMenuConfig';
import Link from 'next/link';

const FooterLinksMenu = () => {
    return (
        <div className="footerItems">
                {footerMenuConfig.map(item =>
                    <div className="footerItems_column" key={item.label}>
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
    );
};

export default FooterLinksMenu;