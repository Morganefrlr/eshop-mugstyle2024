import Featured from "@/components/featured/Featured";
import About from "../components/about/About";
import Banner from "../components/banner/Banner";
import ProductsList from "@/reusableComponents/productsList/ProductsList";
import { allProducts, featuredProducts } from "@/fakeData/fakeData";


export default function Home() {


  

  return (
    <div className="homeMain">
      <Banner />
      <About />
      <Featured products={featuredProducts}/>
      <ProductsList label={'More Products'} products={allProducts.slice(0,9)}/>
    </div>
  );
}
