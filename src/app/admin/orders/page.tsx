import { ordersList } from '@/fakeData/fakeData';
import Thead from './table/Thead';
import Tbody from './table/Tbody';

const page = () => {

    return (
        <div className="ordersMain">
        <table>
            <Thead />
            <Tbody ordersList={ordersList}/>
        </table>
    </div>
    );
};

export default page;