import { allProducts } from '@/fakeData/fakeData';
import ProductsList from '@/reusableComponents/productsList/ProductsList';
import Title from '@/reusableComponents/title/Title';
import React from 'react';

const page = () => {
    return (
        <div>
            <ProductsList label={'Our Products'} titlePage={true}  products={allProducts}/>
        </div>
    );
};

export default page;