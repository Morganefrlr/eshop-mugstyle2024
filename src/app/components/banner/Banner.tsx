import Image from 'next/image';
import React from 'react';
import { bannerConfig } from './bannerConfig';
import Link from 'next/link';

const Banner = () => {
    return (
        <div className='bannerMain'>
            <Image src={'/i1.png'} width={2000} height={2000} alt='banner' />

            <div className='bannerMain_leftSide'>
                <p>{bannerConfig.subtitle}</p>
                <h1>{bannerConfig.title}</h1>
                <span>{bannerConfig.desc}</span>
                <button><Link href={bannerConfig.href}>{bannerConfig.buttonLabel}</Link></button>
            </div>
            
        </div>
    );
};

export default Banner;