
import ListCartProducts from "./ListCartProducts";
import EmptyCart from "./EmptyCart";
import { ProductType } from "@/fakeData/typeData";



type Props = {
    cart : ProductType[],
    deleteBtn: (a:string) => void,
} 


const CartLeftSide = ({cart, deleteBtn}: Props) => {


    return (
        <>
        {cart.length !== 0 ? 
        (<ListCartProducts cart={cart} deleteBtn={deleteBtn}/>)
        :
        (<EmptyCart/>)
         
        }
        </>
    );
};

export default CartLeftSide;