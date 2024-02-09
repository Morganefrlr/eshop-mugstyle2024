import { singleProduct } from "@/fakeData/fakeData";
import Image from "next/image";





const page = ({params} : {params : {slug : string}}) => {

    const {slug} = params

    return (
        <div className="productPageMain">
            <div className="productPageTop">
                <div className="productPageTop_rightSide">
                    <Image src={singleProduct.cover} alt="" width={500} height={500}/>
                </div>
                <div className="productPageTop_leftSide">
                    <h1>{singleProduct.title}</h1>
                    <p>by: MugStyle</p>
                    <span>{singleProduct.desc}</span>
                    <p className="productPagePrice">${singleProduct.price}</p>
                </div>
            </div>



            <div  className="productPageBottom">
                <div className="productPageBottom_rigthSide">
                    <p>details</p>
                    <span>{singleProduct.detail}</span>
                </div>
                <div className="productPageBottom_leftSide">
                    <p>style & more</p>
                    <ul>
                        <li>Mug Type: {singleProduct.mugType}</li>
                        <li>Material: {singleProduct.material}</li>
                        <li>Color: {singleProduct.color}</li>
                        <li>Capacity: {singleProduct.capacity}</li>
                        <li>Height(ml): {singleProduct.height}</li>
                        <li>Width(cm): {singleProduct.width}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default page;