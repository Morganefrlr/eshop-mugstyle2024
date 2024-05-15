'use client'

import { useGlobalContext } from '@/hooks/useGlobalContext';
import ProductsList from '@/reusableComponents/productsList/ProductsList';
import React from 'react';

const page = () => {
    const {products} = useGlobalContext()
    return (
        <div>
            <ProductsList label={'Our Products'} titlePage={true}  products={products} classCard={'singleCard'} classBox={'boxSingleCard'}/>
        </div>
    );
};

export default page;