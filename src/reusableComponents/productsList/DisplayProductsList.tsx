'use client'

import { ProductType } from '@/fakeData/typeData';
import Card from '../card/Card';
import { useGlobalAdminContext } from '@/context/AdminContext';




type Props = {
    products: ProductType[]
}

const DisplayProductsList = ({products} : Props) => {
    
    const {adminMode, setAdminPanelSelected, setAdminPanel} = useGlobalAdminContext()
    
    const handleAdminModeBtn = async () => {
        await setAdminPanelSelected('edit')
        setAdminPanel(true)
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
                            handleAdmin={handleAdminModeBtn}
                            />
                    </div>
                )}
           </div>
    );
};

export default DisplayProductsList;