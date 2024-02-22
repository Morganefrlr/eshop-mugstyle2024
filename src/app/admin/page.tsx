
import PieChartBox from './adminRecharts/pieChart/PieChartBox';
import SalesChart from './adminRecharts/salesChart/SalesChart';
import VisitChart from './adminRecharts/visitChart/VisitChart';
import MiniChart from './adminRecharts/miniChart/MiniChart';
import { miniChartInfos } from './adminRecharts/chartsConfig';



const page = () => {
    return (
        <div className='adminDashboard'>
            <div className='adminDashboard_first'>
                {miniChartInfos.map(item =>
                    <MiniChart key={item.title} title={item.title} infos={item.infos} icon={item.icon} dif={item.dif}/>
                )}
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