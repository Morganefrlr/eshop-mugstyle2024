

import SalesChart from './adminRecharts/SalesChart';
import SquareBox from './adminRecharts/SquareBox';



const page = () => {
    return (
        <div className='adminDashboard'>
            <div className='adminDashboard_first'>
                <SquareBox />
                <SquareBox />
                <SquareBox />
                <SquareBox />
            </div>

            <div className='adminDashboard_second'>
                <SalesChart />
            </div>
        </div>
    );
};

export default page;