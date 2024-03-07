import { ProductType } from "@/fakeData/typeData"
import { deepCloneArray, findInArray, findIndexInArray } from "@/utils/array"
import { setLocalStorage } from "@/utils/localStorage"
import { useState } from "react"




export const useCart = () => {
    const [cart, setCart] = useState<ProductType[]>([])

    const handleAddProductToCart = (productToCart : ProductType, quantity :number) =>{

        const cartClone = deepCloneArray(cart)

        const isAlreadyInCart = findInArray(productToCart.slug, cartClone)
        if(!isAlreadyInCart){
            
            const productToAdd = {
                ...productToCart,
                quantity: quantity,
            }

            const newCart = [productToAdd, ...cartClone]
            setCart(newCart)
            setLocalStorage("products" , newCart)
            return
        }
        if(isAlreadyInCart){

            const indexProduct = findIndexInArray(productToCart.slug, cartClone)
            cartClone[indexProduct].quantity = cartClone[indexProduct].quantity + quantity;
            setCart(cartClone)
            setLocalStorage("products" , cartClone)
        }



    }

    return {cart, setCart, handleAddProductToCart}
}