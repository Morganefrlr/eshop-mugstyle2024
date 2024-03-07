'use client'
import { useGlobalAdminContext } from '@/context/AdminContext';
import CartLeftSide from './cartLeftSide/CartLeftSide';
import CartRightSide from './cartRightSide/CartRightSide';


const CartContainer = () => {
    const { cart } = useGlobalAdminContext()

    
    return (
        <div className='cartBottom'>
            <div className='cartBottom_leftSide'>
                <CartLeftSide cart={cart}/>
            </div>
            <hr />
            <div className='cartBottom_rightSide'>
                <CartRightSide />
            </div>
        </div>
    );
};

export default CartContainer;