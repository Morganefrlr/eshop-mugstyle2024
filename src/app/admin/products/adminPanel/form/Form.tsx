import { singleProduct } from '@/fakeData/fakeData';
import Image from 'next/image';
import DescInputsContainer from './DescInputsContainer';
import DetailsInputsContainer from './DetailsInputsContainer';
import PicturesFormContainer from './PicturesFormContainer';


type Props = {
    submit: string
}
const Form = ({submit }: Props) => {

    const product = false


    return (
                <form className='formMain' typeof='submit'>
                    <div className='formMain_imageContainer'>
                       {product ? (<Image src={singleProduct.cover} alt='' width={200} height={200} />) : (<p>+</p>)}
                    </div>
                    <DescInputsContainer />
                    <DetailsInputsContainer />
                    <PicturesFormContainer />
                    <button>{submit}</button>
                </form>
    );
};

export default Form;