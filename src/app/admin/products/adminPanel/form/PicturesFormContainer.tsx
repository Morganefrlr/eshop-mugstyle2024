import { singleProduct } from '@/fakeData/fakeData';
import Image from 'next/image';
import React from 'react';

const PicturesFormContainer = () => {
    const product = false
    return (
        <div className='formMain_picturesContainer'>
            <div className='pictures'>
                {product ? (<Image src={singleProduct.cover} alt='' width={200} height={200} />) : (<p>+</p>)}
            </div>
            <div className='pictures'>
                {product ? (<Image src={singleProduct.cover} alt='' width={200} height={200} />) : (<p>+</p>)}
            </div>
            <div className='pictures'>
                {product ? (<Image src={singleProduct.cover} alt='' width={200} height={200} />) : (<p>+</p>)}
            </div>
            <div className='pictures'>
                {product ? (<Image src={singleProduct.cover} alt='' width={200} height={200} />) : (<p>+</p>)}
            </div>
            <div className='pictures'>
                {product ? (<Image src={singleProduct.cover} alt='' width={200} height={200} />) : (<p>+</p>)}
            </div>
        </div>
    );
};

export default PicturesFormContainer;