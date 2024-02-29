import InputFormProduct from '@/reusableComponents/formProduct/InputFormProduct';
import TextareaFormProduct from '@/reusableComponents/formProduct/TextareaFormProduct';

type Props = {
    title: string,
    desc: string,
    detail : string
}

const DescInputsContainer = ({title, desc, detail} : Props) => {
    return (
        <div className='formMain_inputsContainer'>
            <p className='titleForm'>Description</p>
            <div>
                <InputFormProduct label={"Product Name"} type={"text"} value={title} />
                <TextareaFormProduct label={'Description'} value={desc}/>
                <TextareaFormProduct label={'Details'} value={detail}/>
            </div>
        </div>
    );
};

export default DescInputsContainer;