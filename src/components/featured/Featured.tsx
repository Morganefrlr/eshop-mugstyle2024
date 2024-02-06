import { featuredProducts } from '@/fakeData/fakeData';
import Card from '@/reusableComponents/card/Card';


const Featured = () => {
    return (
        <div className='featuredMain'>
            <p>Featured Mugs</p>
            <div className='featuredCardsBox'>
            {featuredProducts.map(item =>
            <div className='featuredCardsBox_singleBox' key={item.title}>
                <Card title={item.title} cover={item.cover} price={item.price} />
            </div>
            )}
            </div>
        </div>
    );
};

export default Featured;