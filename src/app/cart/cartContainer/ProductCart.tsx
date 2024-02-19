import Image from 'next/image';

type Props ={
    cover: string,
    title: string,
    price: number
}


const ProductCart = ({cover, title, price} : Props) => {
    return (
            <div className='productCart'>
                <div className='box'>
                    <Image src={cover} alt='' width={200} height={200} />
                    <div className='boxText'>
                        <h4>{title}</h4>
                        <p>${price}</p>
                        <p>Remove</p>
                    </div>
                </div>
                <div className='cartProductQuantity'>12</div>
            </div>
    );
};

export default ProductCart;