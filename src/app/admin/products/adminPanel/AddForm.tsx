import React from 'react';
import Form from './form/Form';
import { useGlobalAdminContext } from '@/context/AdminContext';

const AddForm = () => {

    const {productToEdit} = useGlobalAdminContext()
    
    return (
        <Form submit={'Add New Product'} product={productToEdit}/>
    );
};

export default AddForm;