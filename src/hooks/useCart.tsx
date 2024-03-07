import { ProductType } from "@/fakeData/typeData"
import { deepCloneArray, findInArray, findIndexInArray } from "@/utils/array"
import { useState } from "react"




export const useCart = () => {
    const [cart, setCart] = useState<ProductType[]>([])

    const handleAddProductToCart = (productToCart : ProductType) =>{
        const cartClone = deepCloneArray(cart)

        const isAlreadyInCart = findInArray(productToCart.slug, cartClone)
        if(!isAlreadyInCart){
            const productToAdd = {
                ...productToCart,
                quantity: 1,
            }

            const newCart = [productToAdd, ...cartClone]
            setCart(newCart)

            return
        }
        if(isAlreadyInCart){
            const indexProduct = findIndexInArray(productToCart.slug, cartClone)
            cartClone[indexProduct].quantity += 1;

            setCart(cartClone)
        }


        console.log(cart)
    }

    return {cart, setCart, handleAddProductToCart}
}