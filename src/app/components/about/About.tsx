import Link from 'next/link';
import React from 'react';
import { aboutConfig } from './aboutConfig';

const About = () => {
    return (
        <div>
            <h2>{aboutConfig.title}</h2>
            <p>{aboutConfig.desc}</p>
            <Link href={aboutConfig.href}>{aboutConfig.label}</Link>
        </div>
    );
};

export default About;