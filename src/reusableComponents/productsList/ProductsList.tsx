
import Title from '../title/Title';
import { ProductType } from '@/fakeData/typeData';
import DisplayProductsList from './DisplayProductsList';



type Props = {
    label: string,
    products: ProductType[],
    titlePage: boolean
}

const ProductsList = ({label, products, titlePage} : Props) => {

    return (
        <div className='productsListMain'> 
           <Title label={label} titlePage={titlePage} />
           <DisplayProductsList products={products}/>
        </div>
    );
};

export default ProductsList;