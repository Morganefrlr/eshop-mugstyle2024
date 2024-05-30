
type Props ={
    label: string,
    icon: React.ReactNode;
    onClick: string
}

const LoginButton = ({label, icon, onClick}: Props) => {

    
    return (
        <div className={`loginButton ${label}`} >
            {icon} 
            <p>Sign in with {label}</p>
        </div>
    );
};

export default LoginButton;