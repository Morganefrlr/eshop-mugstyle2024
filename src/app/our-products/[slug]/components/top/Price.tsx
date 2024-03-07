'use client'
import Quantity from '@/components/quantity/Quantity';
import { useGlobalAdminContext } from '@/context/AdminContext';
import{ allProducts } from '@/fakeData/fakeData';
import { ProductType } from '@/fakeData/typeData';
import { findInArray } from '@/utils/array';
import { useState } from 'react';


const Price = ({price, slug} : {price :number, slug: string}) => {

    const{handleAddProductToCart} = useGlobalAdminContext()

    const [quantity, setQuantity] = useState(1)

    const handleQuantity = (operation : string) => {
     
        if(operation === 'minus') return setQuantity(prev =>(prev>1 ? prev-1 : 1))
        if(operation === 'plus') return setQuantity(prev =>(prev<9 ? prev+1 : 9))
    }

    const sendToCart = () => {

        const productToCart = findInArray(slug, allProducts)
        if(productToCart){
            handleAddProductToCart(productToCart, quantity)
        }
     }

    return (
        <>
            <p className="productPagePrice">${price * quantity}</p>
            <Quantity handleQuantity={handleQuantity} quantity={quantity} handleCart={sendToCart}/>
        </>
    );
};

export default Price;