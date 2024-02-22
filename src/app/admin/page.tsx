
import PieChartBox from './adminRecharts/PieChartBox';
import SalesChart from './adminRecharts/SalesChart';
import SquareBox from './adminRecharts/SquareBox';
import VisitChart from './adminRecharts/visitChart';



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
                <PieChartBox />
            </div>

            <div className='adminDashboard_third'>
                <VisitChart />
            </div>
        </div>
    );
};

export default page;