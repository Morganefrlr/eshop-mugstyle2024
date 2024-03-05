import Slider from '@/components/slider/Slider';
import TopSideRight from './TopSideRight';




type Props={
    images: string[],
    desc:string,
    title:string,
    price:number,
}


const TopSide = ({images, desc, title, price} : Props) => {
    return (
        <div className="productPageTop">
        <div className="productPageTop_rightSide">
            <Slider images={images}/>
        </div>
        <TopSideRight desc={desc} title={title} price={price}/>
    </div>
    );
};

export default TopSide;