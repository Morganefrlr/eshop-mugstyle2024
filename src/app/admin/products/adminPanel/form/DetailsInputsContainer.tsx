
import { formCatConfig } from '../config';
import InputFormProduct from '@/reusableComponents/formProduct/InputFormProduct';

type Props = {
    capacity: number | any,
    width: number | any,
    height: number | any,
    material: string | any,
    color: string | any,
    mugType: string | any, 
    handleChange: (e:any) => void
}
const DetailsInputsContainer = ({capacity, width, height, material, color, mugType, handleChange} : Props) => {
   const config = formCatConfig({capacity, width, height, material, color, mugType})
    return (
        <div className='formMain_inputsContainer'>
            <p className='titleForm'>Category</p>
            <div>
                {config.map(item =>
                    <InputFormProduct label={item.label} type={item.type} key={item.label} name={item.name} value={item.value} handleChange={handleChange}/>
                )}
            </div>
        </div>
    );
};

export default DetailsInputsContainer;