import { loginButtonConfig } from '@/app/login/helper/loginConfig';
import LoginButton from './LoginButton';

const LoginComponent = () => {
    return (
        <div className='loginComponent'>
        {loginButtonConfig.map(item =>
            <LoginButton label={item.label} icon={item.icon} key={item.label}/>
        )}
    </div>
    );
};

export default LoginComponent;