import { BrowserRouter, Route, Routes } from 'react-router'
import Home from '../pages/Home'
import About from '../pages/About'
import Products from '../pages/Products'
import Basic15 from '../pages/graindryers/Basic15'
import Services from '../pages/Services'
import VideosPage from '../pages/VideoPage'
import ContactPage from '../pages/ContactPage'
import NewsroomPage from '../pages/Newsroom'
import Basic25 from '../pages/graindryers/Basic25'
import Basic35 from '../pages/graindryers/Basic35'
import CustomBuiltPage from '../pages/spicesdryers/CustomBuiltPage'
import SagoPearl from '../pages/sagodryers/SagoPearl'
import ComingSoonPage from '../pages/comesoon/Comingsoonpage'
import CofeeDryers from '../pages/coffeedryers/CoffeeDryers'
import BlogComingSoon from '../pages/comesoon/BlogComingSoon'

const route = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='/services' element={<Services />} />
          <Route path='/basic15' element={<Basic15 />} />
          <Route path='/videos' element={<VideosPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/newsroom' element={<NewsroomPage />} />
          <Route path='/basic25' element={<Basic25 />} />
          <Route path='/basic35' element={<Basic35 />} />
          <Route path='/custombuilt' element={<CustomBuiltPage />} />
          <Route path='/sagopearl' element={<SagoPearl />} />
          <Route path='/comesoon' element={<ComingSoonPage/>}/>
          <Route path='/cofeedryers' element={<CofeeDryers />}/>
          <Route path='/blogsoon' element={<BlogComingSoon/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default route
