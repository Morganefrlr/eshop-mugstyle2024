import { singleProduct } from '@/fakeData/fakeData';
import Image from 'next/image';
import React from 'react';

const EditForm = () => {

    const product = false
    return (
                <form className='formMain' typeof='submit'>
                    <div className='formMain_imageContainer'>
                       {product ? (<Image src={singleProduct.cover} alt='' width={200} height={200} />) : (<p>+</p>)}
                    </div>
                    
                    <div className='formMain_inputsContainer'>
                        <p className='titleForm'>Description</p>
                        <div>
                            <p>Product Name</p>
                            <input type="text" placeholder='Product Name'/>
                            <p>Description</p>
                            <textarea  placeholder='Description'></textarea>
                            <p>Details</p>
                            <textarea placeholder='Details'></textarea>
                        </div>
                    </div>
                    <div className='formMain_inputsContainer'>
                        <p className='titleForm'>Category</p>
                        <div>
                            <p>Mug Type</p>
                            <input type="text" placeholder='Mug Type'/>
                            <p>Material</p>
                            <input type="text" placeholder='Material'/>
                            <p>Color</p>
                            <input type="text" placeholder='Color'/>
                            <p>Capacity</p>
                            <input type="text" placeholder='Capacity'/>
                            <p>Height(ml)</p>
                            <input type="text" placeholder='Height(ml)'/>
                            <p>Width(cm)</p>
                            <input type="text" placeholder='Width(cm)'/>
                        </div>
                    </div>
                    <div className='formMain_picturesContainer'>
                        <div className='pictures'>
                        {product ? (<Image src={singleProduct.cover} alt='' width={200} height={200} />) : (<p>+</p>)}
                        </div>
                        <div className='pictures'>
                        {product ? (<Image src={singleProduct.cover} alt='' width={200} height={200} />) : (<p>+</p>)}
                        </div>
                        <div className='pictures'>
                        {product ? (<Image src={singleProduct.cover} alt='' width={200} height={200} />) : (<p>+</p>)}
                        </div>
                        <div className='pictures'>
                        {product ? (<Image src={singleProduct.cover} alt='' width={200} height={200} />) : (<p>+</p>)}
                        </div>
                        <div className='pictures'>
                        {product ? (<Image src={singleProduct.cover} alt='' width={200} height={200} />) : (<p>+</p>)}
                        </div>
                    </div>
                    <button>Edit Product</button>
                </form>
    );
};

export default EditForm;