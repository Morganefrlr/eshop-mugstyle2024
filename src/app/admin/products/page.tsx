'use client'

import { useGlobalAdminContext } from '@/context/AdminContext';
import { allProducts } from '@/fakeData/fakeData';
import DisplayProductsList from '@/reusableComponents/productsList/DisplayProductsList';
import Title from '@/reusableComponents/title/Title';




const page = () => {

    const {editMode, setEditMode} = useGlobalAdminContext()

    const handleEditMode = () =>{
        setEditMode(false)
    }

    return (
        <div className='productsMain'>
            <div className='productListAdmin'>
                <div className='productListAdmin_top'>
                    <Title label={'Products'} titlePage={true}/>
                    <button>Add New Product +</button>
                </div>
                <DisplayProductsList products={allProducts}/>
            </div>
            {editMode &&
                <div className='productEditAdmin'>
                    <div className='productEditAdmin_top'>
                        <Title label={'Edit Product'} titlePage={true}/>
                        <button onClick={handleEditMode}>X</button>
                    </div>
                </div>
            }
           
            
        </div>
    );
};

export default page;