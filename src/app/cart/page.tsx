import { featuredProducts } from '@/fakeData/fakeData';
import Title from '@/reusableComponents/title/Title';
import Image from 'next/image';
import React from 'react';

const page = () => {
    return (
        <div className='cartMain'>
            <Title label={'Your Cart'} titlePage={true}/>
            <div className='cartMain_rightSide'>
                {featuredProducts.map(item =>
                    <div className='flex w-[70%] h-auto mx-auto items-center text-zinc-100 mt-10 justify-between max-xl:w-[75%]' key={item.id}>
                        <div className='flex'>
                            <Image src={item.cover} alt='' width={200} height={200} className='w-28 h-28 object-cover mr-10 max-xl:w-20 max-xl:h-20 max-xl:mr-5 max-lg:w-16 max-lg:h-16'/>
                            <div className='flex flex-col gap-4 max-xl:gap-2 max-lg:gap-1'>
                                <p className='text-lg max-xl:text-sm max-lg:text-xs'>{item.title}</p>
                                <p className='text-base max-xl:text-sm max-lg:text-xs'>${item.price}</p>
                                <p className='uppercase text-zinc-500 tracking-widest cursor-pointer max-lg:text-xs' >Remove</p>
                            </div>
                        </div>
                        <div className='w-16 h-12 border-[1px] border-zinc-700 flex justify-center items-center max-lg:w-12 max-lg:h-8'>12</div>
                    </div>
                )}
            </div>
            <hr />
            <div className='cartMain_leftSide'>
                <div>
                    <p>Articles</p>
                    <p>5</p>
                </div>
                <div>
                    <p>Taxes(20%)</p>
                    <p>$20</p>
                </div>
                <div>
                    <p>Total</p>
                    <p>$200</p>
                </div>
            </div>
        </div>
    );
};

export default page;