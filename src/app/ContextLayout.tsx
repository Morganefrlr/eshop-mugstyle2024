'use client'
import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import { ReactNode, useState } from 'react';
import {AdminContext} from '@/context/AdminContext';
import { emptyProduct } from '@/fakeData/fakeData';
import { ProductType } from '@/fakeData/typeData';
import { useCart } from '@/hooks/useCart';
import { useProducts } from '@/hooks/useProducts';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

type Props ={
    children: ReactNode
}

const ContextLayout = ({children} : Props) => {

    const [adminMode, setAdminMode] = useState<boolean>(false)
    const [adminPanel, setAdminPanel] = useState<boolean>(false)
    const [adminPanelSelected, setAdminPanelSelected] = useState<string>('edit')
    const [productToEdit,setProductToEdit] = useState<ProductType>(emptyProduct)

    const { cart, setCart, handleAddProductToCart,quantityProducts, setQuantityProducts,totalPrice, setTotalPrice,handleDeleteProductToCart } = useCart()
    const {products, setProducts, handleDeleteProduct} = useProducts()


    const adminProviderValue ={
        adminMode,
        setAdminMode,
        adminPanel,
        setAdminPanel,
        adminPanelSelected,
        setAdminPanelSelected,
        productToEdit,
        setProductToEdit,
        cart,
        setCart,
        handleAddProductToCart,
        quantityProducts,
        setQuantityProducts,
        totalPrice,
        setTotalPrice,
        handleDeleteProductToCart,
        products,
        setProducts,
        handleDeleteProduct
    }


    
    return (
        <AdminContext.Provider value={adminProviderValue}>
            <Navbar/>
            {children}
            <Footer />
            <ToastContainer position="bottom-right" theme="dark" autoClose={1500} />
        </AdminContext.Provider>
    );
};

export default ContextLayout;