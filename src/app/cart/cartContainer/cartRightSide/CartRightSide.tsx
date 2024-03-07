
import { rightSideCartConfig } from './rightSideCartConfig';
import TotalCartSide from './TotalCartSide';

type Props = {
    quantity: number
}
const CartRightSide = ({quantity} : Props) => {
const config = rightSideCartConfig(quantity)
    return (
        <>
            {config.map(item =>
                    <TotalCartSide key={item.label} label={item.label} quantity={item.quantity}/>
                )}
        </>
    );
};

export default CartRightSide;