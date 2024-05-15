import Link from 'next/link';
import { aboutConfig } from './aboutConfig';

const About = () => {
    return (
        <div className='aboutMain'>
            <h2>{aboutConfig.title}</h2>
            <p>{aboutConfig.desc}</p>
            <Link href={aboutConfig.href}>{aboutConfig.label}</Link>
        </div>
    );
};

export default About;