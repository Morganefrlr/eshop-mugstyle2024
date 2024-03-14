import { allProducts } from "@/fakeData/fakeData"
import { useState } from "react"



export const useProducts = () => {
    const [products, setProducts] = useState(allProducts)




    return{products, setProducts}

}