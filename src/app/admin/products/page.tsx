'use client'

import AdminContext from '@/context/AdminContext';
import { allProducts } from '@/fakeData/fakeData';
import DisplayProductsList from '@/reusableComponents/productsList/DisplayProductsList';
import Title from '@/reusableComponents/title/Title';
import { useContext } from 'react';



const page = () => {

    const {editMode, setEditMode} = useContext(AdminContext)

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