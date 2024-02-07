import Featured from "@/components/featured/Featured";
import About from "../components/about/About";
import Banner from "../components/banner/Banner";
import ProductsList from "@/reusableComponents/productsList/productsList";


export default function Home() {
  return (
    <div className="homeMain">
      <Banner />
      <About />
      <Featured />
      <ProductsList />
    </div>
  );
}
