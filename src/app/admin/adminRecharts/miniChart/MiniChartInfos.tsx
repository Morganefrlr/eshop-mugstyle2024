


type Props = {
    title: string,
    infos: string,
    icon: React.ReactNode,
    dif: number
  }
const MiniChartInfos = ({title, infos, icon, dif}: Props) => {
    return (
        <div className='miniChartMain_leftSide'>
            {icon}
            <p className='titleMiniChart'>{title}</p>
            <p className='numberMiniChart'>{infos}</p>
            <span>Over last month {dif}%</span>
        </div>
    );
};

export default MiniChartInfos;