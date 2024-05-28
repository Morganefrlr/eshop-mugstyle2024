import { loginButtonConfig } from '@/app/login/loginComponent/loginConfig';
import LoginButton from './LoginButton';

const LoginComponent = () => {
    return (
        <div className='loginComponent'>
        {loginButtonConfig.map(item =>
            <LoginButton label={item.label} icon={item.icon} key={item.label} onClick={item.onClick}/>
        )}
    </div>
    );
};

export default LoginComponent;