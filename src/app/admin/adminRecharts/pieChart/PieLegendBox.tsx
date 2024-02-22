
type Props = {
    label: string,
    value: number,
    className: string,
    icon: React.ReactNode,
    dif:number,

}

const PieLegendBox = ({label, value, className, icon, dif, } :Props) => {
    return (
        <div className='pieLegendBox'>
                <p>{value}%</p>
                <div className={`pieLegendBox_difference ${className}`}>
                  {icon}
                  <p>{dif}%</p>
                </div>
                <div className='pieLegendBox_label'>
                  <div className={label}/>
                  <p>{label}</p>
                </div>
        </div>
    );
};

export default PieLegendBox;