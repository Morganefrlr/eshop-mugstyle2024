'use client'

import { ProductType } from '@/fakeData/typeData';
import Card from '../card/Card';
import { useContext } from 'react';
import AdminContext from '@/context/AdminContext';




type Props = {
    products: ProductType[]
}

const DisplayProductsList = ({products} : Props) => {
    
    const {adminMode, setEditMode} = useContext(AdminContext)

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
                            setEditMode={setEditMode}
                            />
                    </div>
                )}
           </div>
    );
};

export default DisplayProductsList;