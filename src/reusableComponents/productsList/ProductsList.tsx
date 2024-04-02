
import Title from '../title/Title';
import { ProductType } from '@/fakeData/typeData';
import DisplayProductsList from './DisplayProductsList';



type Props = {
    label: string,
    products: ProductType[],
    titlePage: boolean,
    classCard: string,
    classBox: string,

}

const ProductsList = ({label, products, titlePage, classCard, classBox} : Props) => {

    return (
        <div className='productsListMain'> 
           <Title label={label} titlePage={titlePage} />
           <DisplayProductsList products={products} classBox={classBox} classCard={classCard} />
        </div>
    );
};

export default ProductsList;