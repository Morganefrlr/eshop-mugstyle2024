'use client'
import { useState } from 'react';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md';

const Quantity = () => {
    const [quantity, setQuantity] = useState(1)



    return (
        <div className="quantityMain">
            <p>quantity</p>
            <div className="quantityMain_container">
                <div>
                    <MdOutlineKeyboardArrowDown className="icon" onClick={() => setQuantity(prev =>(prev>1 ? prev-1 : 1))}/>
                    <hr/>
                    <p>{quantity}</p>
                    <hr/>
                    <MdOutlineKeyboardArrowUp  className="icon" onClick={() => setQuantity(prev =>(prev<9 ? prev+1 : 9))}/>
                </div>
                <button>add to cart</button>
            </div>
        </div>

    );
};

export default Quantity;