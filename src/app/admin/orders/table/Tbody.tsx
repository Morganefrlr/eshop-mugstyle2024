import { OrderType } from '@/fakeData/typeData';


const Tbody = ({ordersList} : {ordersList : OrderType[]}) => {
    return (
        <tbody>
            {ordersList.map(item =>
                <tr key={item.id}>
                    <td>#{item.id}</td>
                    <td>{item.createdAt}</td>
                    <td>{item.customer}</td>                          
                    <td>{item.location}</td>
                    <td><div className={item.status}>{item.status}</div></td>   
                    <td>$ {item.price}</td>    
                </tr>
            )}
        </tbody>
    );
};

export default Tbody;