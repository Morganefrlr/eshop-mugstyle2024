'use client'
import Title from '@/reusableComponents/title/Title';
import CartContainer from './cartContainer/CartContainer';
import { useGlobalAdminContext } from '@/context/AdminContext';


const page = () => {

const { cart } = useGlobalAdminContext()
console.log(cart)
    return (
        <div className='cartMain'>
            <Title label={'Your Cart'} titlePage={true}/>
            <CartContainer />
        </div>
    );
};

export default page;