
import ListCartProducts from "./ListCartProducts";
import EmptyCart from "./EmptyCart";
import { ProductType } from "@/fakeData/typeData";



type Props = {
    cart : ProductType[]
} 


const CartLeftSide = ({cart}: Props) => {


    return (
        <>
        {cart.length !== 0 ? 
        (<ListCartProducts cart={cart}/>)
        :
        (<EmptyCart/>)
         
        }
        </>
    );
};

export default CartLeftSide;