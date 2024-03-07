import React from 'react';

type Props ={
    label: string,
    quantity: string | number
}
const TotalCartSide = ({label, quantity} : Props) => {
    return (
        <div className='totalCartSide'>
            <p>{label}</p>
            <p>{quantity}</p>
        </div>
    );
};

export default TotalCartSide;