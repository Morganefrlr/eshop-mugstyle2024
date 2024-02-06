import { featuredProducts } from '@/fakeData/fakeData';
import Card from '@/reusableComponents/card/Card';


const FeaturedCardContainer = () => {


    return (
        <div className='featuredCardsBox'>
            {featuredProducts.map(item =>
                <div className='featuredCardsBox_singleBox' key={item.title}>
                    <Card title={item.title} cover={item.cover} price={item.price} />
                </div>
            )}
        </div>
    );
}
export default FeaturedCardContainer;