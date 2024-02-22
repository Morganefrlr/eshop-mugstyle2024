'use client'

import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { visitData } from "../chartsConfig";

const VisitRechart = () => {
    return (
        <ResponsiveContainer>
                <BarChart
                data={visitData}
                >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="visit" fill="#854D0E" />
                </BarChart>
        </ResponsiveContainer>
    );
};

export default VisitRechart;