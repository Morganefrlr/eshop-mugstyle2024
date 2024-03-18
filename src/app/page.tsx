'use client'
import Featured from "@/components/featured/Featured";
import About from "../components/about/About";
import Banner from "../components/banner/Banner";
import ProductsList from "@/reusableComponents/productsList/ProductsList";
import {featuredProducts } from "@/fakeData/fakeData";
import Newsletter from "@/components/newsletter/Newsletter";
import { useGlobalAdminContext } from "@/context/AdminContext";



export default function Home() {

  const {products} = useGlobalAdminContext()

  return (
    <div className="homeMain">
      <Banner />
      <About />
      <Featured products={featuredProducts}/>
      <ProductsList label={'More Products'} titlePage={false} products={products.slice(0,9)}/>
      <Newsletter />
    </div>
  );
}
