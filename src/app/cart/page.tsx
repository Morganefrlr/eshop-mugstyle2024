import Title from '@/reusableComponents/title/Title';
import React from 'react';

const page = () => {
    return (
        <div className='cartMain'>
            <Title label={'Your Cart'} titlePage={true}/>
            <div className='cart'>
                <div className='cartMain_rightSide'>je suis la div avec les articles</div>
                <div className='cartMain_leftSide'>Je suis la div total</div>
            </div>
            
        </div>
    );
};

export default page;