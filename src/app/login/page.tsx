'use client'

import Image from "next/image";
import LoginComponent from "@/app/login/loginComponent/LoginComponent";
import { useGlobalAdminContext } from "@/context/AdminContext";
import { useRouter } from 'next/navigation'

const page = () => {
const {setAdminMode} = useGlobalAdminContext()
const router = useRouter()

const handleCLick = () => {
    setAdminMode(true)
    router.push('/admin')

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