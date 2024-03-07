import Image from 'next/image';

type Props ={
    cover: string,
    title: string,
    price: number,
    quantity: number
}


const ProductCart = ({cover, title, price,quantity} : Props) => {
    return (
            <div className='productCart'>
                <div className='box'>
                    <Image src={cover} alt='' width={200} height={200} />
                    <div className='boxText'>
                        <h4>{title}</h4>
                        <p>${price * quantity}</p>
                        <p>Remove</p>
                    </div>
                </div>
                <div className='cartProductQuantity'>{quantity}</div>
            </div>
    );
};

export default ProductCart;