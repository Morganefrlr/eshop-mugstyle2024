
import Image from "next/image";
import LoginComponent from "@/app/login/loginComponent/LoginComponent";


const page = () => {

    return (
        <div className="loginMain">
            <div className="containerRegister">
                <h1>Register</h1>
                <div className="containerInputs">
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
                </div>

                <button>Register</button>
                <p>Have an account?</p>
            </div>
        </div>
    );
};

export default page;