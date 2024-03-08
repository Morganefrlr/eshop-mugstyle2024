'use client'
import { useGlobalAdminContext } from '@/context/AdminContext';
import CartLeftSide from './cartLeftSide/CartLeftSide';
import CartRightSide from './cartRightSide/CartRightSide';


const CartContainer = () => {
    const { cart, quantityProducts, totalPrice, handleDeleteProductToCart } = useGlobalAdminContext()

    const handleRemoveProductCart = (slug : string) => {
        handleDeleteProductToCart(slug)
    }

    return (
        <div className='cartBottom'>
            <div className='cartBottom_leftSide'>
                <CartLeftSide cart={cart} deleteBtn={handleRemoveProductCart}/>
            </div>
            <hr />
            <div className='cartBottom_rightSide'>
                <CartRightSide quantity={quantityProducts} totalPrice={totalPrice} />
            </div>
        </div>
    );
};

export default CartContainer;