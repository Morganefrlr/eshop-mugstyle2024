import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <div className='bannerMain'>
            <Image src={'/i1.png'} width={2000} height={2000} alt='banner' />
            
        </div>
    );
};

export default Banner;