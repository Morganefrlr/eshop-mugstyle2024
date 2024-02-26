type Props = {
    label: string,
}
const TextareaFormProduct = ({label} : Props) => {
    return (
        <>
           <p>{label}</p>
           <textarea placeholder={label}></textarea>
        </>
    );
};

export default TextareaFormProduct;