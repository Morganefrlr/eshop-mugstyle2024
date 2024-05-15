'use client'
import Title from '@/reusableComponents/title/Title';
import CartContainer from './cartContainer/CartContainer';
import { globalAdminContext } from '@/context/AdminContext';



const page = () => {
    const { cart, quantityProducts, totalPrice, handleDeleteProductToCart } = globalAdminContext()

    const handleRemoveProductCart = (slug : string) => {
        handleDeleteProductToCart(slug)
    }
    return (
        <div className='cartMain'>
            <Title label={'Your Cart'} titlePage={true}/>
            <CartContainer cart={cart} deleteBtn={handleRemoveProductCart} quantity={quantityProducts} totalPrice={totalPrice} />
        </div>
    );
};

export default page;