import Image from "next/image";
import LoginComponent from "@/app/login/helper/loginComponent/LoginComponent";

const page = () => {
    return (
        <div className="loginMain">
            <Image alt="login" src='/m1-b.jpg' width={500} height={500} />
            <LoginComponent />
        </div>
    );
};

export default page;