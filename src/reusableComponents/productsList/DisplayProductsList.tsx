'use client'

import { ProductType } from '@/fakeData/typeData';
import Card from '../card/Card';
import { useGlobalAdminContext } from '@/context/AdminContext';




type Props = {
    products: ProductType[]
}

const DisplayProductsList = ({products} : Props) => {
    
    const {adminMode, setAdminPanelSelected, setAdminPanel, setProductToEdit, productToEdit} = useGlobalAdminContext()
    
    const handleAdminModeBtn = async (item: ProductType) => {
        
        await setProductToEdit(item)
        await setAdminPanelSelected('edit')
        await setAdminPanel(true)
    }

    const handleDeleteCard = () => {

    }
    return (
        <div className='containerProducts'>
                {products.map(item =>
                    <div key={item.title} className='containerProducts_singleCard'>
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