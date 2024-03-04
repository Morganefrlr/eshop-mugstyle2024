
import { HiMiniArrowsUpDown } from 'react-icons/hi2';

const Thead = () => {
    const columnTitle = ['Order ID','Date','Customer','Location','Status', 'Price']
    return (
        <thead>
            <tr>
                {columnTitle.map(item =>
                    <th key={item}>
                        {item}
                        <HiMiniArrowsUpDown className='icon' />
                    </th>
                )}
            </tr>
        </thead>
    );
};

export default Thead;