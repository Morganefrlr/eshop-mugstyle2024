type Props = {
    label: string,
    value: string
}
const TextareaFormProduct = ({label, value} : Props) => {
    return (
        <>
           <p>{label}</p>
           <textarea placeholder={label} value={value}></textarea>
        </>
    );
};

export default TextareaFormProduct;