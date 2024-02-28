
import { formCatConfig } from '../config';
import InputFormProduct from '@/reusableComponents/formProduct/InputFormProduct';

type Props = {
    capacity: number,
    width: number,
    height: number,
    material: string,
    color: string,
    mugType: string, 
}
const DetailsInputsContainer = ({capacity, width, height, material, color, mugType} : Props) => {
   const config = formCatConfig({capacity, width, height, material, color, mugType})
    return (
        <div className='formMain_inputsContainer'>
            <p className='titleForm'>Category</p>
            <div>
                {config.map(item =>
                    <InputFormProduct label={item.label} type={item.type} key={item.label} value={item.value}/>
                )}
            </div>
        </div>
    );
};

export default DetailsInputsContainer;