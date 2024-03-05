'use client'
import Quantity from '@/components/quantity/Quantity';
import { useState } from 'react';

const Price = ({price} : {price :number}) => {


    const [quantity, setQuantity] = useState(1)

    const handleQuantity = (operation : string) => {
     
        if(operation === 'minus') return setQuantity(prev =>(prev>1 ? prev-1 : 1))
        if(operation === 'plus') return setQuantity(prev =>(prev<9 ? prev+1 : 9))
    }

    return (
        <>
            <p className="productPagePrice">${price * quantity}</p>
            <Quantity handleQuantity={handleQuantity} quantity={quantity}/>
        </>
    );
};

export default Price;