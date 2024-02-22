

import LineRechart from "./LineRechart";
import MiniChartInfos from "./MiniChartInfos";

type Props = {
  title: string,
  infos: string,
  icon: React.ReactNode,
  dif:number,
}
const MiniChart = ({title, infos, icon, dif}: Props) => {
    
    return (
        <div className='miniChartMain'>
            <MiniChartInfos title={title} infos={infos} icon={icon} dif={dif} />
            <div className='miniChartMain_rightSide'>
                <LineRechart />
            </div>
        </div>
    );
};

export default MiniChart;