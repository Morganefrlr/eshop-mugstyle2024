
import { useState } from 'react';
import Form from './form/Form';
import { useGlobalAdminContext } from '@/context/AdminContext';

const AddForm = () => {

    const {productToEdit} = useGlobalAdminContext()
    const [newProduct, setNewProduct] = useState([])

    const handleChangeInputs = (e) => {
        const value = e.target.value;
        setNewProduct({
          ...newProduct,
          [e.target.name]: value,
        });
      };
    
    return (
        <Form submit={'Add New Product'} product={productToEdit} handleChange={handleChangeInputs}/>
    );
};

export default AddForm;