import Slider from '@/components/slider/Slider';
import TopSideLeft from './TopSideLeft';



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
        <TopSideLeft desc={desc} title={title} price={price}/>
    </div>
    );
};

export default TopSide;