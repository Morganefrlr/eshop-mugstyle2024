'use client'
import { signIn } from "next-auth/react";

type Props ={
    label: string,
    icon: React.ReactNode;
    onClick: string
}

const LoginButton = ({label, icon, onClick}: Props) => {
    return (
        <div className={`loginButton ${label}`} onClick={() => signIn(onClick)}>
            {icon} 
            <p>Sign in with {label}</p>
        </div>
    );
};

export default LoginButton;