'use client'
import { globalAdminContext } from '@/context/AdminContext';
import ProductsList from '@/reusableComponents/productsList/ProductsList';
import React from 'react';

const page = () => {
    const {products} = globalAdminContext()
    return (
        <div>
            <ProductsList label={'Our Products'} titlePage={true}  products={products} classCard={'singleCard'} classBox={'boxSingleCard'}/>
        </div>
    );
};

export default page;