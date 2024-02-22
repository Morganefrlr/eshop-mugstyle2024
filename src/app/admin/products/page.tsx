import { allProducts } from '@/fakeData/fakeData';
import DisplayProductsList from '@/reusableComponents/productsList/DisplayProductsList';
import Title from '@/reusableComponents/title/Title';


const page = () => {
    const AdminMode = true

    return (
        <div className='productsMain'>
            <div className='productListAdmin'>
                <div className='productListAdmin_top'>
                    <Title label={'Products'} titlePage={true}/>
                    <button>Add New Product +</button>
                </div>
                <DisplayProductsList products={allProducts} adminMode={true}/>
            </div>
            <div className='productEditAdmin'>
                <Title label={'Edit Product'} titlePage={true}/>
            </div>
            
        </div>
    );
};

export default page;