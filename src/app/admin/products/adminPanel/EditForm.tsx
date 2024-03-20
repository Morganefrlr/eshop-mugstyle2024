
import { useGlobalAdminContext } from '@/context/AdminContext';
import Form from './form/Form';

const EditForm = () => {

    const {productToEdit, setProductToEdit} = useGlobalAdminContext()

    const handleChangeInputs = (e : any) => {
        const {name , value }= e.target
        const testToEdit = {
            ...productToEdit,
            [name] : value
        }

        setProductToEdit(testToEdit)
       };
    return (
            <Form submit={'Edit Product'} product={productToEdit} handleChange={handleChangeInputs}/>
    );
};

export default EditForm;