'use client'
import {PieChart, Pie, ResponsiveContainer, Cell, } from 'recharts';
import { IoIosArrowRoundUp, IoIosArrowRoundDown  } from "react-icons/io";


const PieChartBox = () => {
    const data = [
        { label: 'Social Media', 
          value: 35, 
          color: '#27272A', 
          dif: 30.50,
          icon: <IoIosArrowRoundUp/>,
          className: 'green',
        
        },
        { label: 'Google', 
          value: 43, 
          color: '#854D0E', 
          dif: 15.20,
          icon: <IoIosArrowRoundDown/>,
          className: 'red',
        },
        { label: 'Email', 
          value: 22, 
          color:'#D1D5DB', 
          dif:1.80, 
          icon: <IoIosArrowRoundUp/>,
          className: 'green',
        },
      

      ];




    return (
        <div className='pieChartMain'>
          <p className='pieTitle'>Channels</p>
          <div className='pieChartMain_topSide'>
            <ResponsiveContainer>
              <PieChart>
                <Pie dataKey="value" data={data} fill="#8884d8" label> 
                  {data.map((entry, index) => (
                    <Cell key={index} fill={entry.color}/> ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className='pieChartMain_bottomSide'>
            {data.map(item =>
              <div className='pieLegendBox' key={item.label}>
                <p>{item.value}%</p>
                <div className={`pieLegendBox_difference ${item.className}`}>
                  {item.icon}
                  <p>{item.dif}%</p>
                </div>
                <div className='pieLegendBox_label'>
                  <div className={item.label}/>
                  <p>{item.label}</p>
                </div>
              </div>
            )}
            
          </div>
        </div>
    );
};

export default PieChartBox;