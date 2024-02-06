import About from "./components/about/About";
import Banner from "./components/banner/Banner";


export default function Home() {
  return (
    <div className="homeMain">
      <Banner />
      <About />
    </div>
  );
}
