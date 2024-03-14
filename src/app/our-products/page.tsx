'use client'
import { useGlobalAdminContext } from '@/context/AdminContext';
import ProductsList from '@/reusableComponents/productsList/ProductsList';
import React from 'react';

const page = () => {
    const {products} = useGlobalAdminContext()
    return (
        <div>
            <ProductsList label={'Our Products'} titlePage={true}  products={products}/>
        </div>
    );
};

export default page;