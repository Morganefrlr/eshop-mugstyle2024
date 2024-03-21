

import Form from './form/Form';
import { useGlobalAdminContext } from '@/context/AdminContext';

const AddForm = () => {

    const {productToEdit, setProductToEdit, handleAddProduct} = useGlobalAdminContext()


    const handleChangeInputs = (e : any) => {
       const value = e.target.value
       setProductToEdit({
        ...productToEdit,
        [e.target.name]: value
       })
      };

      const handleAddNewProduct = (e : any) => {
        e.preventDefault()
        handleAddProduct(productToEdit)
    }
    return (
        <Form submit={'Add New Product'} product={productToEdit} handleChange={handleChangeInputs} handleSubmit={handleAddNewProduct}/>
    );
};

export default AddForm;