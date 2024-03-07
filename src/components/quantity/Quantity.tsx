
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md';


type Props = {
    quantity: number,
    handleQuantity : (c: string) => void
    handleCart : () => void

}
const Quantity = ({quantity,  handleQuantity, handleCart} : Props) => {



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
                <button onClick={handleCart}>add to cart</button>
            </div>
        </div>

    );
};

export default Quantity;