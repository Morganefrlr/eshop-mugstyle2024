import { allProducts, featuredProducts } from '@/fakeData/fakeData';
import Title from '@/reusableComponents/title/Title';
import Image from 'next/image';
import React from 'react';

const page = () => {
    return (
        <div className='cartMain'>
            <Title label={'Your Cart'} titlePage={true}/>
            <div className='cartBottom'>
                <div className='cartBottom_rightSide'>
                    {featuredProducts.map(item =>
                        <div className='productCart' key={item.id}>
                            <div className='box'>
                                <Image src={item.cover} alt='' width={200} height={200} className='w-28 h-28 object-cover mr-10 max-xl:w-20 max-xl:h-20 max-xl:mr-5 max-lg:w-16 max-lg:h-16'/>
                                <div className='boxText'>
                                    <h4>{item.title}</h4>
                                    <p>${item.price}</p>
                                    <p>Remove</p>
                                </div>
                            </div>
                            <div className='cartProductQuantity'>12</div>
                        </div>
                    )}
                </div>
                <hr />
                <div className='cartBottom_leftSide'>
                    <div className='totalCartSide'>
                        <p>Articles</p>
                        <p>5</p>
                    </div>
                    <div className='totalCartSide'>
                        <p>Taxes(20%)</p>
                        <p>$20</p>
                    </div>
                    <div className='totalCartSide'>
                        <p>Total</p>
                        <p>$200</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;