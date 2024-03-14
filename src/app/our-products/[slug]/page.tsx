'use client'


import TopSide from "./components/top/TopSide";
import BottomSide from "./components/bottom/BottomSide";
import Newsletter from "@/components/newsletter/Newsletter";
import { findInArray } from "@/utils/array";
import { useGlobalAdminContext } from "@/context/AdminContext";







const page = ({params} : {params : {slug : string}}) => {

    const {slug} = params
    const {products} = useGlobalAdminContext()
    const productPage = findInArray(slug, products)


    
    return (
        <>{ 
            productPage &&
                <div className="productPageMain">
                    <TopSide 
                        images={productPage.pictures} 
                        desc={productPage.desc} 
                        title={productPage.title} 
                        price={productPage.price} 
                        slug={slug}
                    />

                    <BottomSide 
                        detail={productPage.detail} 
                        mugType={productPage.mugType} 
                        material={productPage.material} 
                        color={productPage.color} 
                        capacity={productPage.capacity} 
                        height={productPage.height} 
                        width={productPage.width} />
                </div>
            }
            <Newsletter />
        </>
    );
};

export default page;