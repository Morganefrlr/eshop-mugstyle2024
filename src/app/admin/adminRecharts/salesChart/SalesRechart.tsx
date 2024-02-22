'use client'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { salesData } from '../chartsConfig';

const SalesRechart = () => {
    return (
        <ResponsiveContainer width="100%" height="100%">
                <LineChart
                data={salesData}

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
    );
};

export default SalesRechart;