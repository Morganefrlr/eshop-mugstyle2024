
type Props= {
    label: string
}


const Title = ({label} : Props) => {
    return (
        <p className='titleStyled'>{label}</p>
    );
};

export default Title;