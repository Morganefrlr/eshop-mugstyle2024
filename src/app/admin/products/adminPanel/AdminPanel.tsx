import { useGlobalAdminContext } from '@/context/AdminContext';
import Title from '@/reusableComponents/title/Title';
import React from 'react';

import EditForm from './EditForm';
import AddForm from './AddForm';


type Props ={
    handleEditMode: () => void
}

const AdminPanel = ({ handleEditMode}:Props) => {

    const {adminPanelSelected} = useGlobalAdminContext()


    const adminPanelConfig = [
        {
            index:'edit',
            label:'Edit Product',
            Content: <EditForm />,
        },
        {
            index:'add',
            label:'Add New Product',
            Content:<AddForm /> ,
        },
    ]
    const displayContent = adminPanelConfig.find((item) => item.index === adminPanelSelected)  
    
  


    return (
            <div className='productEditAdmin'>
                <div className='productEditAdmin_top'>
                    <Title label={displayContent && displayContent.label} titlePage={true}/>
                    <button onClick={handleEditMode}>X</button>
                </div>

                <div className='containerForm'>
                    {displayContent && displayContent.Content}

                </div>
            </div>
    );
};

export default AdminPanel;