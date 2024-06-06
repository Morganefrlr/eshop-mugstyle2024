import LogInForm from "./components/LogInForm";
import RegisterForm from "./components/RegisterForm";



export const loginPageConfig = [
    {
        index:'login',
        Content: <LogInForm />,
    },
    {
        index:'register',
        Content:<RegisterForm /> ,
    },
]