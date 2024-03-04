import { ordersList } from '@/fakeData/fakeData';
import { HiMiniArrowsUpDown } from "react-icons/hi2";

const page = () => {

 
    return (
        <div className="ordersMain">
        <table>
            <thead>
                <tr>
                    <th>
                        Order ID
                        <HiMiniArrowsUpDown className='icon' />
                    </th>
                    <th>
                        Date
                        <HiMiniArrowsUpDown className='icon'/>
                    </th>
                    <th>
                        Price
                        <HiMiniArrowsUpDown className='icon'/>
                    </th>
                    <th>
                        Products
                        <HiMiniArrowsUpDown className='icon'/>
                    </th>
                    <th>
                        Status
                        <HiMiniArrowsUpDown className='icon'/>
                    </th>
                </tr>
            </thead>
            <tbody>
               {ordersList.map(item =>
                    <tr>
                        <td>#{item.id}</td>
                        <td>{item.createdAt}</td>
                        <td>$ {item.price}</td>                          
                        <td>{item.customer}</td>
                        <td className={item.status}>
                            <div>{item.status}</div></td>
                        
                    </tr>
                )}
                
            </tbody>
        </table>
        
    </div>
    );
};

export default page;