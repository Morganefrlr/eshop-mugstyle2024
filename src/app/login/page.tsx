
import Image from "next/image";
import LoginComponent from "@/app/login/loginComponent/LoginComponent";


const page = () => {

    return (
        <div className="loginMain">
            <h1>Register</h1>

            <div className="loginInputContainer">
                <label>Username</label>
                <input type="text" name="username" placeholder="Username" />
            </div>
            <div className="loginInputContainer">
                <label>E-mail</label>
                <input type="mail" name="mail" placeholder="E-mail" />
            </div>
            <div className="loginInputContainer">
                <label>Password</label>
                <input type="password" name="Password" placeholder="Password" />
            </div>

            <button>Register</button>
            <p>Have an account?</p>
        </div>
    );
};

export default page;