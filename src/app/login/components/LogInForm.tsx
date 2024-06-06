import { GlobalAdminContext } from "@/context/AdminContext";


const LogInForm = () => {

    const {setLogPanelSelected} = GlobalAdminContext()
    return (
        <div className="containerRegister">
                <h1>Log In</h1>
                <div className="containerInputs">
                    <div className="loginInputContainer">
                        <label>E-mail</label>
                        <input type="mail" name="mail" placeholder="E-mail" />
                    </div>
                    <div className="loginInputContainer">
                        <label>Password</label>
                        <input type="password" name="Password" placeholder="Password" />
                    </div>
                </div>

                <button>Log In</button>
                <p onClick={() => setLogPanelSelected('register')}>Don't have an account?</p>
        </div>
    );
};

export default LogInForm;