'use client'

import { useGlobalAdminContext } from '@/context/AdminContext';
import { emptyProduct } from '@/fakeData/fakeData';
import DisplayProductsList from '@/reusableComponents/productsList/DisplayProductsList';
import Title from '@/reusableComponents/title/Title';
import AdminPanel from './adminPanel/AdminPanel';




const page = () => {

    const {adminPanel ,setAdminPanel, setAdminPanelSelected, adminPanelSelected, setProductToEdit, products} = useGlobalAdminContext()

    const handleEditMode = () =>{
        setAdminPanel(false)
    }

    const handleAddPanel = async () =>{
        await setProductToEdit(emptyProduct)
        await setAdminPanelSelected('add')
        setAdminPanel(true)
    }


    return (
        <div className='productsMain'>
            <div className='productListAdmin'>
                <div className='productListAdmin_top'>
                    <Title label={'Products'} titlePage={true}/>
                    <button onClick={handleAddPanel}>Add New Product +</button>
                </div>
                <DisplayProductsList products={products}/>
            </div>
            {adminPanel && <AdminPanel handleEditMode={handleEditMode}/>}
            
        </div>
    );
};

export default page;