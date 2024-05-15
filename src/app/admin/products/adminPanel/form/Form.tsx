
import Image from 'next/image';
import DescInputsContainer from './DescInputsContainer';
import DetailsInputsContainer from './DetailsInputsContainer';
import PicturesFormContainer from './PicturesFormContainer';
import { ProductType } from '@/fakeData/typeData';


type Props = {
    submit: string,
    product: ProductType ,
    handleChange: (e:any) => void,
    handleSubmit: (e:any) => void,
}
const Form = ({submit, product, handleChange, handleSubmit }: Props) => {


    return (
                <form className='formMain' typeof='submit' onSubmit={handleSubmit}>
                    <div className='formMain_imageContainer'>
                       {product.cover ? (<Image src={product.cover} alt='' width={200} height={200} />) : (<p>+</p>)}
                    </div>
                    <DescInputsContainer title={product.title} desc={product.desc} detail={product.detail} handleChange={handleChange}/>
                    <DetailsInputsContainer price={product.price} capacity={product.capacity} width={product.width} height={product.height} material={product.material} color={product.color} mugType={product.mugType} handleChange={handleChange}/>
                    <PicturesFormContainer pictures={product.pictures}/>
                    <button>{submit}</button>
                </form>
    );
};

export default Form;