'use client'


import { GlobalAdminContext } from "@/context/AdminContext";
import { loginPageConfig } from "./config";


const page = () => {

    const {logPanelSelected} = GlobalAdminContext()

    const displayContent = loginPageConfig.find((item) => item.index === logPanelSelected)  

    return (
        <div className="loginMain">
            {displayContent && displayContent.Content}
        </div>
    );
};

export default page;