
import Image from 'next/image';
import Link from 'next/link';


type Props = {
    title : string,
    cover : string,
    price: number,
    slug:string,
    adminMode: boolean,
    setEditMode:(c:boolean) => void

}

const Card = ({title, cover, price, slug, adminMode, setEditMode} : Props) => {

    const handleEditMode = () =>{
        setEditMode(true)
        
    }

    
    return (
        <div className='cardContainer'>
            <Image alt='' src={cover} width={500} height={500} />
            <div className='buttonCard'>
                {adminMode ? (<div onClick={handleEditMode}>Edit Product</div>) : (<Link href={`/our-products/${slug}`}>Explore mug</Link>)}
            </div>
            <p>{title}</p>
            <p>$ {price}</p>
        </div>
    );
};

export default Card;