import { featuredProducts } from '@/fakeData/fakeData';
import Card from '@/reusableComponents/card/Card';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const Featured = () => {
    return (
        <div className='featuredMain'>
            {featuredProducts.map(item =>
                <Card key={item.title} title={item.title} cover={item.cover} price={item.price} />
            )}
        </div>
    );
};

export default Featured;