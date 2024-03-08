import { ProductType } from "@/fakeData/typeData"
import { deepCloneArray, findInArray, findIndexInArray } from "@/utils/array"
import { setLocalStorage } from "@/utils/localStorage"
import { useState } from "react"




export const useCart = () => {
    const [cart, setCart] = useState<ProductType[]>([])
    const [quantityProducts, setQuantityProducts] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    const handleAddProductToCart = (productToCart : ProductType, quantity :number) =>{

        const cartClone : ProductType[] = deepCloneArray(cart)

        const isAlreadyInCart = findInArray(productToCart.slug, cartClone)


        if(!isAlreadyInCart){
            
            const productToAdd = {
                ...productToCart,
                quantity: quantity,
            }

            const newCart = [productToAdd, ...cartClone]
            const newQuantityCart = quantityProducts + productToAdd.quantity
            const newTotalPriceProduct = productToAdd.price * productToAdd.quantity
            const newTotalCart = newTotalPriceProduct + totalPrice

            setCart(newCart)
            setQuantityProducts(newQuantityCart)
            setTotalPrice(newTotalCart)
            setLocalStorage("products" , newCart)

            return
        }
        if(isAlreadyInCart){

            const indexProduct = findIndexInArray(productToCart.slug, cartClone)

            const totalPriceProduct = cartClone[indexProduct].quantity * cartClone[indexProduct].price
            const newTotalCart = totalPrice - totalPriceProduct
            const quantityCartProductUpdate = quantityProducts - cartClone[indexProduct].quantity

            cartClone[indexProduct].quantity = cartClone[indexProduct].quantity + quantity;
            const newQuantityCartProduct = quantityCartProductUpdate + cartClone[indexProduct].quantity
            const newTotalCartUpdate = newTotalCart + (cartClone[indexProduct].quantity * cartClone[indexProduct].price)

            setCart(cartClone)
            setQuantityProducts(newQuantityCartProduct)
            setTotalPrice(newTotalCartUpdate)
            setLocalStorage("products" , cartClone)
        }



    }



   const handleDeleteProductToCart = (productToRemove : string) =>{

        const cartClone : ProductType[] = deepCloneArray(cart)

        const productToCartRemove = cartClone.filter((el : ProductType) => el.slug === productToRemove)
        const priceToRemove = productToCartRemove[0].price * productToCartRemove[0].quantity

        setTotalPrice(totalPrice - priceToRemove)
        setQuantityProducts(quantityProducts - productToCartRemove[0].quantity)

        const updatedCart = cartClone.filter((el : ProductType) => el.slug !== productToRemove)
        setCart(updatedCart)

   }

    return {cart, setCart, handleAddProductToCart, quantityProducts, setQuantityProducts, totalPrice, setTotalPrice,handleDeleteProductToCart}
    
}