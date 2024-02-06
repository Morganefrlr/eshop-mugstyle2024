import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
    title : string,
    cover : string,
    price: number,

}

const Card = ({title, cover, price} : Props) => {
    return (
        <div className='cardContainer'>
            <Image alt='' src={cover} width={500} height={500} />
            <div className='buttonCard'>
                <Link href='/'>Explore mug</Link>
            </div>
            <h3>{title}</h3>
            <p>$ {price}</p>
        </div>
    );
};

export default Card;