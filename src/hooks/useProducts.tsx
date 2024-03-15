import { allProducts } from "@/fakeData/fakeData"
import { ProductType } from "@/fakeData/typeData"
import { deepCloneArray } from "@/utils/array"
import { useState } from "react"



export const useProducts = () => {
    const [products, setProducts] = useState(allProducts)


    const handleDeleteProduct = (slug : string) => {
        const productsClone = deepCloneArray(products)
        const productsUpdated = productsClone.filter((el : ProductType) => el.slug !== slug)

        setProducts(productsUpdated)
    }


    return{products, setProducts, handleDeleteProduct}

}