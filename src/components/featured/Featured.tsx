
import { ProductType } from '@/fakeData/typeData';
import ProductsList from '@/reusableComponents/productsList/ProductsList';

type Props ={
    products : ProductType[]
}
const Featured = ({products} :Props ) => {
    return (
        <div className='featuredMain'>
            <ProductsList label={'Featured Products'} titlePage={false} products={products} classCard={'featuredCard'} classBox={'boxFeaturedCard'}/>
        </div>
    );
};

export default Featured;