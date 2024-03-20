import { useState } from "react";


type Props = {
    label: string,
    type: string,
    value: string | number,
    handleChange: (e:any) => void,
    name: string
}

const InputFormProduct = ({label, type, value, handleChange, name} : Props) => {

    const [test, setTest] = useState("")
   
    return (
        <>
           <p>{label}</p>
           <input type={type} placeholder={label} value={value} name={name} onChange={handleChange}/> 
        </>
    );
};

export default InputFormProduct;