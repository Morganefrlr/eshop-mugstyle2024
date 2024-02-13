import Quantity from '@/components/quantity/Quantity';


type Props={
    desc:string,
    title:string,
    price:number,
}
const TopSideLeft = ({ desc, title, price} : Props) => {

    return (
        <div className="productPageTop_leftSide">
            <h1>{title}</h1>
            <p>by: MugStyle</p>
            <span>{desc}</span>
            <p className="productPagePrice">${price}</p>
            <Quantity />
        </div>
    );
};

export default TopSideLeft;