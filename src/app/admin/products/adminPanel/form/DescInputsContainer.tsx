import InputFormProduct from '@/reusableComponents/formProduct/InputFormProduct';
import TextareaFormProduct from '@/reusableComponents/formProduct/TextareaFormProduct';


const DescInputsContainer = () => {
    return (
        <div className='formMain_inputsContainer'>
            <p className='titleForm'>Description</p>
            <div>
                <InputFormProduct label={"Product Name"} type={"text"} />
                <TextareaFormProduct label={'Description'}/>
                <TextareaFormProduct label={'Details'}/>
            </div>
        </div>
    );
};

export default DescInputsContainer;