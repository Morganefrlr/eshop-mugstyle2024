import { ProductType } from '@/fakeData/typeData';
import ProductCart from '../ProductCart';

type Props = {
    cart : ProductType[]
}
const ListCartProducts = ({cart}: Props) => {
 
    return (
        <>
           {cart.map(item =>
                    <ProductCart key={item.id} cover={item.cover} title={item.title} price={item.price} quantity={item.quantity}/>
            )} 
        </>
    );
};

export default ListCartProducts;