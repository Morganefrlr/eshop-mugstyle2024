
import { rightSideCartConfig } from './rightSideCartConfig';
import TotalCartSide from './TotalCartSide';

type Props = {
    quantity: number,
    totalPrice: number
}
const CartRightSide = ({quantity, totalPrice} : Props) => {
    
    const taxes = (totalPrice / 100 )* 20
    const config = rightSideCartConfig(quantity, totalPrice, taxes)
    return (
        <>
            {config.map(item =>
                    <TotalCartSide key={item.label} label={item.label} quantity={item.quantity} />
                )}
        </>
    );
};

export default CartRightSide;