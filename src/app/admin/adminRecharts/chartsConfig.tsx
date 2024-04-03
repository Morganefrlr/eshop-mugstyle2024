import { IoIosArrowRoundUp, IoIosArrowRoundDown  } from "react-icons/io";
import { LuShoppingBasket } from "react-icons/lu";
import { FaRegUser, FaUserPlus } from "react-icons/fa";

import { BsCreditCard } from "react-icons/bs";



export const pieData = [
    { label: 'Social Media', 
      value: 35, 
      color: '#27272A', 
      dif: 30.50,
      icon: <IoIosArrowRoundUp/>,
      className: 'green',
    
    },
    { label: 'GoogleSearch', 
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


export const visitData = [
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



export const salesData = [
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

export const miniData = [
    { pv: 2400},
    { pv: 1398},
    { pv: 9800},
    { pv: 3908},
    { pv: 4800},
    { pv: 3800},
    { pv: 4300},
];


export const miniChartInfos = [
    {
        title: 'Orders',
        infos: "300",
        icon: <LuShoppingBasket className='icon'/>,
        dif:1.4,

    },
    {
        title: 'New Clients',
        infos: "68",
        icon: <FaRegUser className='icon'/>,
        dif:1,

    },
    {
        title: 'New Followers',
        infos: "750",
        icon: <FaUserPlus className='icon'/>,
        dif:3.8,

    },
    {
        title: 'Sales',
        infos: "$4593",
        icon: <BsCreditCard className='icon'/>,
        dif:1.7,

    },
]