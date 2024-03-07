
import Price from "./Price";

type Props={
    desc:string,
    title:string,
    price:number,
    slug: string
}


const TopSideRight = ({ desc, title, price, slug} : Props) => {

    return (
        <div className="productPageTop_leftSide">
            <h1>{title}</h1>
            <p>by: MugStyle</p>
            <span>{desc}</span>
            <Price price={price} slug={slug}/>
        </div>
    );
};

export default TopSideRight;