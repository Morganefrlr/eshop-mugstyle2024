'use client'
import {PieChart, Pie, ResponsiveContainer, Cell } from 'recharts';
import { pieData } from '../chartsConfig';

const PieRechart = () => {
    return (
        <ResponsiveContainer>
              <PieChart>
                <Pie dataKey="value" data={pieData} fill="#8884d8" label> 
                  {pieData.map((entry, index) => (
                    <Cell key={index} fill={entry.color}/> ))}
                </Pie>
              </PieChart>
        </ResponsiveContainer>
    );
};

export default PieRechart;