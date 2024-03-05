import Price from "./Price";



type Props={
    desc:string,
    title:string,
    price:number,
}
const TopSideRight = ({ desc, title, price} : Props) => {
   


    return (
        <div className="productPageTop_leftSide">
            <h1>{title}</h1>
            <p>by: MugStyle</p>
            <span>{desc}</span>
            <Price price={price}/>
        </div>
    );
};

export default TopSideRight;