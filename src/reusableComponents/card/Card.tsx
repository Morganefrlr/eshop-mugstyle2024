
import { formatPrice } from '@/utils/math';
import Image from 'next/image';
import Link from 'next/link';


type Props = {
    title : string,
    cover : string,
    price: number,
    slug:string,
    adminMode: boolean,
    handleAdmin:(a:any) => void

}

const Card = ({title, cover, price, slug, adminMode,  handleAdmin} : Props) => {



    
    return (
        <div className='cardContainer'>
            <Image alt='' src={cover} width={500} height={500} />
            <div className='buttonCard'>
                {adminMode ? (<div onClick={handleAdmin}>Edit Product</div>) : (<Link href={`/our-products/${slug}`}>Explore mug</Link>)}
            </div>
            <p>{title}</p>
            <p>$ {formatPrice(price)}</p>
        </div>
    );
};

export default Card;