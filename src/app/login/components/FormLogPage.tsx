import { GlobalAdminContext } from '@/context/AdminContext';
import { LogInPageContentType } from '@/fakeData/typeData';
import LoginInputContainer from './LoginInputContainer';


const FormLogPage = ({content} : {content : LogInPageContentType | any}) => {

    const {setLogPanelSelected} = GlobalAdminContext()


    return (
        <div className="containerRegister">
                <h1>{content.title}</h1>
                <div className="containerInputs">
                    {content.inputs.map((item : any) => 
                        <LoginInputContainer key={item.label} label={item.label} type={item.type} name={item.name}/>
                    )}
                </div>

                <button>{content.title}</button>
                <p onClick={() => setLogPanelSelected(`${content.onClick}`)}>{content.span}</p>
        </div>
    );
};

export default FormLogPage;