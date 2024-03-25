import { allProducts } from "@/fakeData/fakeData"
import { ProductType } from "@/fakeData/typeData"
import { deepCloneArray, findIndexInArray } from "@/utils/array"
import { slugify } from "@/utils/slugify"
import { useState } from "react"



export const useProducts = () => {
    const [products, setProducts] = useState(allProducts)

    const handleAddProduct = (productToAdd : ProductType) =>{

        const productsClone = deepCloneArray(products)
        const productsUpadted = [productToAdd, ...productsClone]
        setProducts(productsUpadted)

    }

    const handleEditProduct = (productToEdit : ProductType) =>{
        console.log('ok')
        const productsClone = deepCloneArray(products)
        const productToEditIndex = findIndexInArray(productToEdit.slug, productsClone)
        productsClone[productToEditIndex] = productToEdit
        productsClone[productToEditIndex].slug = slugify(productToEdit.title)
        setProducts(productsClone)

    }


    const handleDeleteProduct = (slug : string) => {
        const productsClone = deepCloneArray(products)
        const productsUpdated = productsClone.filter((el : ProductType) => el.slug !== slug)

        setProducts(productsUpdated)
    }


    return{products, setProducts, handleDeleteProduct, handleAddProduct, handleEditProduct}

}