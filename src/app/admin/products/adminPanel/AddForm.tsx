


import { slugify } from '@/utils/slugify';
import Form from './form/Form';

import { useGlobalContext } from '@/hooks/useGlobalContext';

const AddForm = () => {

    const {productToEdit, setProductToEdit, handleAddProduct} = useGlobalContext()
   
    const handleChangeInputs = (e : any) => {
       const value = e.target.value
       setProductToEdit({
        ...productToEdit,
        [e.target.name]: value,
       })
    };

      const handleAddNewProduct = (e : any) => {
        e.preventDefault()
        productToEdit.slug = slugify(productToEdit.title)
        handleAddProduct(productToEdit)
    }
    return (
        <Form submit={'Add New Product'} product={productToEdit} handleChange={handleChangeInputs} handleSubmit={handleAddNewProduct}/>
    );
};

export default AddForm;