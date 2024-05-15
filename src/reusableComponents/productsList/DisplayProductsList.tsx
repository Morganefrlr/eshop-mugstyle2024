'use client'

import { ProductType } from '@/fakeData/typeData';
import Card from '../card/Card';

import { toast } from 'react-toastify';
import { useGlobalContext } from '@/hooks/useGlobalContext';





type Props = {
    products: ProductType[],
    classCard: string,
    classBox: string,
   
}

const DisplayProductsList = ({ products, classBox, classCard} : Props) => {
    
    const {adminMode, setAdminPanelSelected, setAdminPanel, setProductToEdit, handleDeleteProduct} = useGlobalContext()
        
    
        
    const handleAdminModeBtn = async (item: ProductType) => {
        
        await setProductToEdit(item)
        await setAdminPanelSelected('edit')
        await setAdminPanel(true)
    }

    const handleDeleteCard = (slug:string) => {
       handleDeleteProduct(slug)
       toast.info('Product Deleted!')
    }




    return (
        <div className={classBox}>
                {products.map(item =>
                    <div key={item.title} className={classCard}>
                        <Card  
                            title={item.title} 
                            adminMode={adminMode} 
                            cover={item.cover} 
                            price={item.price} 
                            slug={item.slug}
                            handleAdmin={(e) => handleAdminModeBtn(item)}
                            handleDelete={handleDeleteCard}
                            />
                    </div>
                )}
           </div>
    );
};

export default DisplayProductsList;