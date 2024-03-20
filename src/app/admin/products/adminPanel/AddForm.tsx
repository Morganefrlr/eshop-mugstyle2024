

import Form from './form/Form';
import { useGlobalAdminContext } from '@/context/AdminContext';

const AddForm = () => {

    const {productToEdit, setProductToEdit} = useGlobalAdminContext()


    const handleChangeInputs = (e : any) => {
       const value = e.target.value
       setProductToEdit({
        ...productToEdit,
        [e.target.name]: value
       })
      };

    
    return (
        <Form submit={'Add New Product'} product={productToEdit} handleChange={handleChangeInputs}/>
    );
};

export default AddForm;