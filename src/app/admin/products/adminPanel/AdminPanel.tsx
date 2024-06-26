
import Title from '@/reusableComponents/title/Title';
import { adminPanelConfig } from './config';
import { GlobalAdminContext } from '@/context/AdminContext';


type Props ={
    handleEditMode: () => void
}

const AdminPanel = ({ handleEditMode}:Props) => {

    const {adminPanelSelected} = GlobalAdminContext()
    const displayContent = adminPanelConfig.find((item) => item.index === adminPanelSelected)  
    
  


    return (
            <div className='productEditAdmin'>
                <div className='productEditAdmin_top'>
                    <Title label={displayContent && displayContent.label} titlePage={true}/>
                    <button onClick={handleEditMode}>X</button>
                </div>

                <div className='containerForm'>
                    {displayContent && displayContent.Content}
                </div>
            </div>
    );
};

export default AdminPanel;