import { singleProduct, allProducts } from "@/fakeData/fakeData";
import TopSide from "./components/top/TopSide";
import BottomSide from "./components/bottom/BottomSide";
import Newsletter from "@/components/newsletter/Newsletter";






const page = ({params} : {params : {slug : string}}) => {

    const {slug} = params

    const sendToCart = () => {
       // const productToCart = 
    }
    
    return (
        <>
            <div className="productPageMain">
                <TopSide 
                    images={singleProduct.pictures} 
                    desc={singleProduct.desc} 
                    title={singleProduct.title} 
                    price={singleProduct.price} 
                />

                <BottomSide 
                    detail={singleProduct.detail} 
                    mugType={singleProduct.mugType} 
                    material={singleProduct.material} 
                    color={singleProduct.color} 
                    capacity={singleProduct.capacity} 
                    height={singleProduct.height} 
                    width={singleProduct.width} />
            </div>
            <Newsletter />
        </>
    );
};

export default page;