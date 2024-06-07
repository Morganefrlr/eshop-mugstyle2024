type Props = {
    label: string,
    type: string,
    name:string,
}

const LoginInputContainer = ({label, type, name} : Props) => {
    return (
        <div className="loginInputContainer">
            <label>{label}</label>
            <input type={type} name={name} placeholder={label} />
        </div>
    );
};

export default LoginInputContainer;