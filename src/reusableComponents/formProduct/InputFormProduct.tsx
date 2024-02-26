

type Props = {
    label: string,
    type: string
}

const InputFormProduct = ({label, type} : Props) => {
    return (
        <>
           <p>{label}</p>
           <input type={type} placeholder={label}/> 
        </>
    );
};

export default InputFormProduct;