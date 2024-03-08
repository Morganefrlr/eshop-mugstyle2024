type Props ={
    detail: string | any,
    mugType:string | any,
    material:string | any,
    color : string | any,
    capacity: number | any,
    height:number | any,
    width:number | any
}

const BottomSide = ({detail,mugType,material,color,capacity,height,width}:Props) => {
    return (
        <div  className="productPageBottom">
                <div className="productPageBottom_rigthSide">
                    <p>details</p>
                    <span>{detail}</span>
                </div>
                <div className="productPageBottom_leftSide">
                    <p>style & more</p>
                    <ul>
                        <li>Mug Type: {mugType}</li>
                        <li>Material: {material}</li>
                        <li>Color: {color}</li>
                        <li>Capacity: {capacity}</li>
                        <li>Height(ml): {height}</li>
                        <li>Width(cm): {width}</li>
                    </ul>
                </div>
            </div>
    );
};

export default BottomSide;