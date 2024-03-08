
import Title from '@/reusableComponents/title/Title';
import CartContainer from './cartContainer/CartContainer';



const page = () => {

    return (
        <div className='cartMain'>
            <Title label={'Your Cart'} titlePage={true}/>
            <CartContainer />
        </div>
    );
};

export default page;