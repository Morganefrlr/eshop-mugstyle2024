'use client'

import Image from "next/image";
import { useState } from "react";


type Props = {
    images : string[]
}

const Slider = ({images} : Props) => {
    const [urlImage, setUrlImage] = useState('')
    return (
        <div className="sliderMain">
            <Image src={urlImage ? (urlImage) : (images[0])} width={200} height={200} alt='' className='sliderMain_cover'/>
            <div className='sliderMain_miniature'>
                {images && images.map((img, index) => 
                    <Image src={img} alt="" width={200} height={200} key={index} onClick={() => setUrlImage(img)}/>
                )}
            </div>
     </div>

    );
};

export default Slider;