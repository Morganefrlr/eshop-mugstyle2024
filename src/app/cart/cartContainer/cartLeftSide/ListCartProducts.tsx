import { ProductType } from '@/fakeData/typeData';
import ProductCart from './ProductCart';

type Props = {
    cart : ProductType[],
    deleteBtn: (a:string) => void,
}
const ListCartProducts = ({cart,deleteBtn}: Props) => {
 
    return (
        <>
           {cart.map(item =>
                    <ProductCart key={item.id} slug={item.slug} cover={item.cover} title={item.title} price={item.price} quantity={item.quantity} deleteBtn={deleteBtn}/>
            )} 
        </>
    );
};

export default ListCartProducts;