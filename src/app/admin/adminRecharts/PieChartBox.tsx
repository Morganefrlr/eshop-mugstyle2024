'use client'
import {PieChart, Pie, ResponsiveContainer, Cell, } from 'recharts';

const PieChartBox = () => {
    const data = [
        { name: 'Group A', value: 20, color: '#d9aae4'},
        { name: 'Group B', value: 20, color: '#a0c3f5'},
        { name: 'Group C', value: 60, color:'#989696' },
      

      ];
      const COLORS = ['#d9aae4', '#a0c3f5', '#4a4a4a'];



    return (
        <div className='pieChartMain'>
          <p>Social Media</p>
            <ResponsiveContainer>
              <PieChart>
                <Pie dataKey="value" data={data} fill="#8884d8" label> 
                  {data.map((entry, index) => (
                    <Cell key={index} fill={entry.color}/> ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PieChartBox;