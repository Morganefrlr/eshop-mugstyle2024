
import { useGlobalAdminContext } from '@/context/AdminContext';
import Form from './form/Form';

const EditForm = () => {

    const {productToEdit} = useGlobalAdminContext()
    return (
            <Form submit={'Edit Product'} product={productToEdit}/>
    );
};

export default EditForm;