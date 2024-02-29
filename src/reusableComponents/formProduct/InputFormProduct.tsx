

type Props = {
    label: string,
    type: string,
    value: string | number
}

const InputFormProduct = ({label, type, value} : Props) => {
    return (
        <>
           <p>{label}</p>
           <input type={type} placeholder={label} value={value}/> 
        </>
    );
};

export default InputFormProduct;