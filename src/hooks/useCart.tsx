import { ProductType } from "@/fakeData/typeData"
import { deepCloneArray, findInArray, findIndexInArray } from "@/utils/array"
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

            return
        }
        if(isAlreadyInCart){

            const indexProduct = findIndexInArray(productToCart.slug, cartClone)
            cartClone[indexProduct].quantity = cartClone[indexProduct].quantity + quantity;
            setCart(cartClone)
        }



    }

    return {cart, setCart, handleAddProductToCart}
}