import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
    title : string,
    cover : string,
    price: number,
    slug:string,
    adminMode: boolean

}

const Card = ({title, cover, price, slug, adminMode} : Props) => {
    return (
        <div className='cardContainer'>
            <Image alt='' src={cover} width={500} height={500} />
            <div className='buttonCard'>
                <Link href={`/our-products/${slug}`}>Explore mug</Link>
            </div>
            <p>{title}</p>
            <p>$ {price}</p>
        </div>
    );
};

export default Card;