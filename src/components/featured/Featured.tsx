
import Title from '@/reusableComponents/title/Title';
import FeaturedCardContainer from './FeaturedCardContainer';
import { ProductType } from '@/fakeData/typeData';

type Props ={
    products : ProductType[]
}
const Featured = ({products} :Props ) => {
    return (
        <div className='featuredMain'>
            <Title label={'Featured Mugs'}/>
            <FeaturedCardContainer products={products} />
        </div>
    );
};

export default Featured;