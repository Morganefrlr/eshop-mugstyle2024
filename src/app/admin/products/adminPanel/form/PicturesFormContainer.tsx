import { singleProduct } from '@/fakeData/fakeData';
import Image from 'next/image';
import { it } from 'node:test';
import React from 'react';



const PicturesFormContainer = ({pictures} : {pictures:string[]}) => {
     
    return (
        <div className='formMain_picturesContainer'>
            {pictures.map(item =>
                <div className='pictures' key={item}>
                    <Image src={item} alt='' width={200} height={200} />
                </div>
            )}
            {pictures.length === 0 && 
                <div className='pictures'>
                    <p>+</p>
                </div>
            }
        </div>
    );
};

export default PicturesFormContainer;