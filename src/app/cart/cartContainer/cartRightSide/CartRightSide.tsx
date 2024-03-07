
import { rightSideCartConfig } from './rightSideCartConfig';
import TotalCartSide from './TotalCartSide';

const CartRightSide = () => {

    return (
        <>
            {rightSideCartConfig.map(item =>
                    <TotalCartSide key={item.label} label={item.label} quantity={item.quantity}/>
                )}
        </>
    );
};

export default CartRightSide;