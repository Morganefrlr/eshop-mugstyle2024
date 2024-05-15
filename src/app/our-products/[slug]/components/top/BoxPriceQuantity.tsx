'use client'
import Quantity from '@/components/quantity/Quantity';

import { useGlobalContext } from '@/hooks/useGlobalContext';
import { findInArray } from '@/utils/array';
import { formatPrice } from '@/utils/math';
import { useState } from 'react';
import { toast } from 'react-toastify';


const BoxPriceQuantity = ({price, slug} : {price :number, slug: string}) => {

    const{handleAddProductToCart , products} = useGlobalContext()

    const [quantity, setQuantity] = useState(1)


    
    const handleQuantity = (operation : string) => {
     
        if(operation === 'minus') return setQuantity(prev =>(prev>1 ? prev-1 : 1))
        if(operation === 'plus') return setQuantity(prev =>(prev<9 ? prev+1 : 9))
    }

    const sendToCart = () => {

        const productToCart = findInArray(slug, products)
        if(productToCart){
            handleAddProductToCart(productToCart, quantity)
        }
    
        toast.info('Product added to the cart!')
     }

    
    return (
        <>
            <p className="productPagePrice">${formatPrice(price * quantity)}</p>
            <Quantity handleQuantity={handleQuantity} quantity={quantity} handleCart={sendToCart}/>
        </>
    );
};

export default BoxPriceQuantity;