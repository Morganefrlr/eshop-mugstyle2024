import { ProductType } from '@/fakeData/typeData';
import Card from '../card/Card';



type Props={
    products: ProductType[]
}


const DisplayProductsList = ({products} : Props) => {

    return (
        <div className='containerProducts'>
                {products.map(item =>
                    <div key={item.title} className='containerProducts_singleCard'>
                        <Card  title={item.title} cover={item.cover} price={item.price}/>
                    </div>
                )}
           </div>
    );
};

export default DisplayProductsList;