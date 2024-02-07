import { featuredProducts } from '@/fakeData/fakeData';
import { ProductType } from '@/fakeData/typeData';
import Card from '@/reusableComponents/card/Card';


type Props ={
    products : ProductType[]
}

const FeaturedCardContainer = ({products} : Props) => {


    return (
        <div className='featuredCardsBox'>
            {products.map(item =>
                <div className='featuredCardsBox_singleBox' key={item.title}>
                    <Card title={item.title} cover={item.cover} price={item.price} />
                </div>
            )}
        </div>
    );
}
export default FeaturedCardContainer;