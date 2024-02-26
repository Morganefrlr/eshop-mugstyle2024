'use client'

import Image from "next/image";
import LoginComponent from "@/app/login/loginComponent/LoginComponent";
import { useGlobalAdminContext } from "@/context/AdminContext";

const page = () => {
const {adminMode, setAdminMode} = useGlobalAdminContext()

const handleCLick = () => {
    setAdminMode(!adminMode)

}
    return (
        <div className="loginMain">
            <Image alt="login" src='/m1-b.jpg' width={500} height={500} />
            <LoginComponent />
            <span onClick={handleCLick}>connecter en admin</span>
        </div>
    );
};

export default page;