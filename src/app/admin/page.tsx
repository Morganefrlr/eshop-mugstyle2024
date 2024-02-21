import { Squada_One } from 'next/font/google';
import React from 'react';
import SquareBox from './adminRecharts/SquareBox';



const page = () => {
    return (
        <div>
            <div className='adminDashboard'>
                <SquareBox />
                <SquareBox />
                <SquareBox />
                <SquareBox />
            </div>
        </div>
    );
};

export default page;