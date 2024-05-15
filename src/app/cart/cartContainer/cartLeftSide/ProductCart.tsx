import { formatPrice } from '@/utils/math';
import Image from 'next/image';

type Props ={
    cover: string | any,
    title: string,
    price: number,
    quantity: number,
    slug:string,
    deleteBtn: (a:string) => void,
}


const ProductCart = ({cover, title, price,quantity,slug,deleteBtn} : Props) => {
    return (
            <div className='productCart'>
                <div className='box'>
                    <Image src={cover} alt='' width={200} height={200} />
                    <div className='boxText'>
                        <h4>{title}</h4>
                        <p>${formatPrice(price * quantity)}</p>
                        <p onClick={() => deleteBtn(slug)}>Remove</p>
                    </div>
                </div>
                <div className='cartProductQuantity'>{quantity}</div>
            </div>
    );
};

export default ProductCart;