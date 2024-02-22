
import PieLegendBox from './PieLegendBox';
import { pieData } from '../chartsConfig';
import PieRechart from './PieRechart';


const PieChartBox = () => {

    return (
        <div className='pieChartMain'>
          <p className='pieTitle'>Channels</p>
          <div className='pieChartMain_topSide'>
            <PieRechart />
          </div>
          <div className='pieChartMain_bottomSide'>
            {pieData.map(item =>
              <PieLegendBox key={item.label} label={item.label} value={item.value} className={item.className} icon={item.icon} dif={item.dif}/>
            )}
            
          </div>
        </div>
    );
};

export default PieChartBox;