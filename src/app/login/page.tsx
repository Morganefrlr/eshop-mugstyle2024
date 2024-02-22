'use client'
import Image from "next/image";
import LoginComponent from "@/app/login/loginComponent/LoginComponent";
import { useContext } from "react";
import AdminContext from "@/context/AdminContext";

const page = () => {
const {adminMode, setAdminMode} = useContext(AdminContext)

const handleCLick = () => {
    setAdminMode(!adminMode)
    console.log(adminMode)

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