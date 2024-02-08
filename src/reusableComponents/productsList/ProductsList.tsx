
import Title from '../title/Title';
import { ProductType } from '@/fakeData/typeData';
import DisplayProductsList from './DisplayProductsList';



type Props = {
    label: string,
    products: ProductType[]
}

const ProductsList = ({label, products} : Props) => {

    return (
        <div className='productsListMain'> 
           <Title label={label} titlePage={false}/>
           <DisplayProductsList products={products}/>
        </div>
    );
};

export default ProductsList;