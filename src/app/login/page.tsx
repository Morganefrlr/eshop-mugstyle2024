
import Image from "next/image";
import LoginComponent from "@/app/login/loginComponent/LoginComponent";
import RegisterForm from "./components/RegisterForm";


const page = () => {

    return (
        <div className="loginMain">
            <RegisterForm />
        </div>
    );
};

export default page;