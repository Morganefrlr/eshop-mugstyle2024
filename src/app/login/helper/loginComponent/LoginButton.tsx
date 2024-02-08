

type Props ={
    label: string,
    icon: React.ReactNode;
}

const LoginButton = ({label, icon}: Props) => {
    return (
        <div className={`loginButton ${label}`}>
            {icon} 
            <p>Sign in with {label}</p>
        </div>
    );
};

export default LoginButton;