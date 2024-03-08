import Slider from '@/components/slider/Slider';
import TopSideRight from './TopSideRight';




type Props={
    images: string[] | any,
    desc:string | any,
    title:string,
    price:number,
    slug:string
}


const TopSide = ({images, desc, title, price, slug} : Props) => {
    return (
        <div className="productPageTop">
        <div className="productPageTop_rightSide">
            <Slider images={images}/>
        </div>
        <TopSideRight desc={desc} title={title} price={price} slug={slug}/>
    </div>
    );
};

export default TopSide;