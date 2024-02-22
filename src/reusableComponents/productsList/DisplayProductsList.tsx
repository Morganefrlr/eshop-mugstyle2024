import { ProductType } from '@/fakeData/typeData';
import Card from '../card/Card';
import { allProducts } from '@/fakeData/fakeData';



type Props = {
    products: ProductType[]
    adminMode: boolean
}

const DisplayProductsList = ({products, adminMode} : Props) => {


    return (
        <div className='containerProducts'>
                {products.map(item =>
                    <div key={item.title} className='containerProducts_singleCard'>
                        <Card  title={item.title} adminMode={adminMode} cover={item.cover} price={item.price} slug={item.slug}/>
                    </div>
                )}
           </div>
    );
};

export default DisplayProductsList;