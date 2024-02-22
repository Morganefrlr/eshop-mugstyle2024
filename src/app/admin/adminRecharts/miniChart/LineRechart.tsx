'use client'

import { Line, LineChart, ResponsiveContainer} from 'recharts';
import { miniData } from "../chartsConfig";

const LineRechart = () => {
    return (
        <ResponsiveContainer width="70%" height="100%">
            <LineChart
            data={miniData}
            >
            <Line type="monotone" dataKey="pv" stroke="#854D0E" dot={false} />
            </LineChart>
      </ResponsiveContainer>
    );
};

export default LineRechart;