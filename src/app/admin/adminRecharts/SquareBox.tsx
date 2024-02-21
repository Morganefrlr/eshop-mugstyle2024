'use client'
import { LuShoppingBasket } from "react-icons/lu";
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
const SquareBox = () => {
    const data = [
        { pv: 2400},
        { pv: 1398},
        { pv: 9800},
        { pv: 3908},
        { pv: 4800},
        { pv: 3800},
        { pv: 4300},
      ];
    
    return (
        <div className='squareBoxMain'>
            <div className='squareBoxMain_leftSide'>

                <LuShoppingBasket className='icon'/>
                <p className='titleSquareBox'>Orders</p>
                <p className='numberSquareBox'>310</p>
                <span>Over last month 1.4%</span>
            </div>
            <div className='squareBoxMain_rightSide'>
                <ResponsiveContainer width="70%" height="100%">
        <LineChart
          data={data}
        >
          <Line type="monotone" dataKey="pv" stroke="#854D0E" dot={false} />
        </LineChart>
      </ResponsiveContainer>
            </div>
        </div>
    );
};

export default SquareBox;