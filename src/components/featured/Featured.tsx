import { featuredProducts } from '@/fakeData/fakeData';
import Card from '@/reusableComponents/card/Card';


const Featured = () => {
    return (
        <div className='featuredMain'>
            {featuredProducts.map(item =>
            <div className='featuredMain_boxCard' key={item.title}>
                <Card title={item.title} cover={item.cover} price={item.price} />
            </div>
            )}
        </div>
    );
};

export default Featured;