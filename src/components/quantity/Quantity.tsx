'use client'
import { useState } from 'react';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md';


type Props = {
    quantity: number,
    handleQuantity : (c: string) => void

}
const Quantity = ({quantity,  handleQuantity} : Props) => {



    return (
        <div className="quantityMain">
            <p>quantity</p>
            <div className="quantityMain_container">
                <div>
                    <MdOutlineKeyboardArrowDown className="icon" onClick={() => handleQuantity('minus')}/>
                    <hr/>
                    <p>{quantity}</p>
                    <hr/>
                    <MdOutlineKeyboardArrowUp  className="icon" onClick={() => handleQuantity('plus')}/>
                </div>
                <button>add to cart</button>
            </div>
        </div>

    );
};

export default Quantity;