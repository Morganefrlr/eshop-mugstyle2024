
type Props= {
    label: string | undefined,
    titlePage: boolean,
    
}


const Title = ({label, titlePage} : Props) => {
    return (
        <p className={`${titlePage ? 'titleStyled page' :'titleStyled'}`}>{label}</p>
    );
};

export default Title;