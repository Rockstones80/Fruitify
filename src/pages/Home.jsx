import Hero from "../components/Hero";
import Product from "../components/Product";
import Feature from "../components/Feature";
import Header from "../components/Header";
import Footer from "../components/Footer";


const Home = () => {
  return (
    <div className=" px-20">
      <Header />
      <Hero />
      <Product />
      <Feature />
      <Footer />
    </div>
  );
};

export default Home;
