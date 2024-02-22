'use client'

import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const VisitChart = () => {


    const data = [
        {
          name: 'January',
          visit: 4250,
        },
        {
          name: 'Febuary',
          visit: 3689,
        },
        {
          name: 'March',
          visit: 3890,
        },
        {
          name: 'April',
          visit: 2757,
        },
        {
          name: 'May',
          visit: 4308,
        },
        {
          name: 'June',
          visit: 4200,
        },
        {
          name: 'July',
          visit: 4690,
        },
        {
            name: 'August',
            visit: 4697,
          },
        {
            name: 'September',
            visit: 3654,
        },
        {
            name: 'October',
            visit: 3976,
        },
        {
            name: 'November',
            visit: 4189,
        },
        {
            name: 'December',
            visit: 4793,
        },
      ];
    return (
        <div className='visitChartMain'>
            <ResponsiveContainer>
                <BarChart
                data={data}
                >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="visit" fill="#854D0E" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default VisitChart;