import { BrowserRouter, Route, Routes } from "react-router"
import Home from "../pages/Home"
import About from "../pages/About"
import Products from "../pages/Products"
import Basic15 from "../pages/graindryers/Basic15"




const route = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About />}/>
                <Route path="/products" element={<Products />} />
                <Route path="/basic15" element={<Basic15 />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default route