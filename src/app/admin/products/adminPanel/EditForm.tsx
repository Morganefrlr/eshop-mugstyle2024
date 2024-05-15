

import Form from './form/Form';
import { useGlobalContext } from '@/hooks/useGlobalContext';

const EditForm = () => {

    const {productToEdit, setProductToEdit, handleEditProduct} = useGlobalContext()

    const handleChangeInputs = (e : any) => {
        const {name , value }= e.target
        const testToEdit = {
            ...productToEdit,
            [name] : value
        }

        setProductToEdit(testToEdit)
    };

    const handleEdit = (e : any) => {
        e.preventDefault()
        handleEditProduct(productToEdit)
    }
 

    return (
            <Form submit={'Edit Product'} product={productToEdit} handleChange={handleChangeInputs} handleSubmit={handleEdit}/>
    );
};

export default EditForm;