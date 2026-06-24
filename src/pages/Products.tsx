import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import AlliedProducts from "../components/products/AlliedProducts"
import FuelFlexibility from "../components/products/FuelFlexibility"
import HeroSection from "../components/products/HeroSection"
import ProductDetails from "../components/products/ProductDetails"

const Products = () => {
  return (
    <>
        <Navbar/>
            <HeroSection />
            <ProductDetails/>
            <AlliedProducts />
            <FuelFlexibility />
        <Footer />
    </>
  )
}

export default Products