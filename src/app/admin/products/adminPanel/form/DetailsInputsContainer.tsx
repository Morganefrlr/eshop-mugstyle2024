
import { formCatConfig } from '../config';
import InputFormProduct from '@/reusableComponents/formProduct/InputFormProduct';

const DetailsInputsContainer = () => {
    return (
        <div className='formMain_inputsContainer'>
            <p className='titleForm'>Category</p>
            <div>
                {formCatConfig.map(item =>
                    <InputFormProduct label={item.label} type={item.type} key={item.label}/>
                )}
            </div>
        </div>
    );
};

export default DetailsInputsContainer;