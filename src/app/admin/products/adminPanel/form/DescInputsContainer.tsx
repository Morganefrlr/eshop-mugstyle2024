import InputFormProduct from '@/reusableComponents/formProduct/InputFormProduct';
import TextareaFormProduct from '@/reusableComponents/formProduct/TextareaFormProduct';

type Props = {
    title: string | any,
    desc: string | any,
    detail : string | any,
    handleChange: (e:any) => void
}

const DescInputsContainer = ({title, desc, detail, handleChange} : Props) => {
    return (
        <div className='formMain_inputsContainer'>
            <p className='titleForm'>Description</p>
            <div>
                <InputFormProduct label={"Product Name"} type={"text"} name='title' value={title} handleChange={handleChange} />
                <TextareaFormProduct label={'Description'} name='desc' value={desc} handleChange={handleChange}/>
                <TextareaFormProduct label={'Details'} name='detail' value={detail} handleChange={handleChange}/>
            </div>
        </div>
    );
};

export default DescInputsContainer;