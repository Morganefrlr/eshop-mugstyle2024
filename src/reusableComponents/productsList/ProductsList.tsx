'use client'
import Title from '../title/Title';
import { allProducts } from '@/fakeData/fakeData';
import Card from '../card/Card';
import { ProductType } from '@/fakeData/typeData';



type Props = {
    label: string,
    products: ProductType[]

}

const ProductsList = ({label, products} : Props) => {






    return (
        <div className='productsListMain'> 
           <Title label={label}/>
           <div className='containerProducts'>
                {products.map(item =>
                    <div key={item.title} className='containerProducts_singleCard'>
                        <Card  title={item.title} cover={item.cover} price={item.price}/>
                    </div>
                )}
           </div>
        </div>
    );
};

export default ProductsList;