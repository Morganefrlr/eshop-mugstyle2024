'use client'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const SalesChart = () => {
    const data = [
        {
          name: 'January',
          2023: 3000,
          2024: 4000,
        },
        {
          name: 'Febuary',
          2023: 2000,
          2024: 3398,
        },
        {
          name: 'March',
          2023: 2000,
          2024: 3680,
        },
        {
          name: 'April',
          2023: 2780,
          2024: 3908,
        },
        {
          name: 'May',
          2023: 1890,
          2024: 4800,
        },
        {
          name: 'June',
          2023: 2390,
          2024: 3800,
        },
        {
          name: 'July',
          2023: 3490,
          2024: 4300,
        },
      ];
    return (
        <div className='salesChartMain'>
            <p>Sales Chart</p>

           <ResponsiveContainer width="100%" height="100%">
                <LineChart
                data={data}

                >
                <CartesianGrid strokeDasharray="3 3" vertical={false}/>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="2023" stroke="#854D0E"  />
                <Line type="monotone" dataKey="2024" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default SalesChart;