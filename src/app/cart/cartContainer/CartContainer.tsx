
import CartLeftSide from './cartLeftSide/CartLeftSide';
import CartRightSide from './cartRightSide/CartRightSide';
import { ProductType } from '@/fakeData/typeData';

type Props = {
    quantity: number,
    totalPrice: number,
    cart : ProductType[],
    deleteBtn: (a:string) => void,
}
const CartContainer = ({quantity, totalPrice, cart, deleteBtn} : Props) => {
    

    return (
        <div className='cartBottom'>
            <div className='cartBottom_leftSide'>
                <CartLeftSide cart={cart} deleteBtn={deleteBtn}/>
            </div>
            <hr />
            <div className='cartBottom_rightSide'>
                <CartRightSide quantity={quantity} totalPrice={totalPrice} />
            </div>
        </div>
    );
};

export default CartContainer;