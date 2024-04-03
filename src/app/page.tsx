'use client'
import Featured from "@/components/featured/Featured";
import About from "../components/about/About";
import Banner from "../components/banner/Banner";
import ProductsList from "@/reusableComponents/productsList/ProductsList";
import Newsletter from "@/components/newsletter/Newsletter";
import { useGlobalAdminContext } from "@/context/AdminContext";



export default function Home() {

  const {products} = useGlobalAdminContext()

  return (
    <div className="homeMain">
      <Banner />
      <About />
      <Featured products={products.slice(0,2)}/>
      <ProductsList label={'More Products'} titlePage={false} products={products.slice(0,9)} classCard={'singleCard'} classBox={'boxSingleCard'}/>
      <Newsletter />
    </div>
  );
}
