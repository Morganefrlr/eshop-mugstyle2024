type Props = {
    label: string,
    value: string,
    handleChange: (e:any) => void,
    name: string
}
const TextareaFormProduct = ({label, value, handleChange, name} : Props) => {
    
    return (
        <>
           <p>{label}</p>
           <textarea placeholder={label} value={value} name={name} onChange={handleChange}></textarea>
        </>
    );
};

export default TextareaFormProduct;