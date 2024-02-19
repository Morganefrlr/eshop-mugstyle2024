import { featuredProducts } from '@/fakeData/fakeData';
import ProductCart from './ProductCart';
import { rightSideCartConfig } from './rightSideCartConfig';
import TotalCartSide from './TotalCartSide';


const CartContainer = () => {
    
    return (
        <div className='cartBottom'>
            <div className='cartBottom_leftSide'>
                {featuredProducts.map(item =>
                    <ProductCart key={item.id} cover={item.cover} title={item.title} price={item.price} />
                )}
            </div>
            <hr />
            <div className='cartBottom_rightSide'>
                {rightSideCartConfig.map(item =>
                    <TotalCartSide key={item.label} label={item.label} quantity={item.quantity}/>
                )}
            </div>
        </div>
    );
};

export default CartContainer;