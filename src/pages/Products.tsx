import Footer from '../components/Footer'
import KardiBackground from '../components/KardiBackground'
import Navbar from '../components/Navbar'
import AlliedProducts from '../components/products/AlliedProducts'
import FuelFlexibility from '../components/products/FuelFlexibility'
import HeroSection from '../components/products/HeroSection'
import ProductDetails from '../components/products/ProductDetails'

const Products = () => {
  return (
    <>
      <KardiBackground>
        <Navbar />
        
        <ProductDetails />
        <AlliedProducts />
        <FuelFlexibility />
        <Footer />
      </KardiBackground>
    </>
  )
}

export default Products
