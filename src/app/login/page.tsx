'use client'


import { GlobalAdminContext } from "@/context/AdminContext";
import { loginPageConfig } from "./config";
import FormLogPage from "./components/FormLogPage";


const page = () => {

    const {logPanelSelected} = GlobalAdminContext()
    const displayContent = loginPageConfig.find((item) => item.index === logPanelSelected)  

    return (
        <div className="loginMain">
            <FormLogPage content={displayContent}/>
        </div>
    );
};

export default page;