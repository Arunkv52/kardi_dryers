// Home.tsx
import { useRef } from 'react'
import Header from '../components/Header'
import '../App.css'
import Footer from '../components/Footer'
import About from '../components/home/About'
import StickySection from '../components/home/StickySection'
import WorldWide from '../components/home/WorldWide'
import BeforeFooter from '../components/home/BeforeFooter'
import KardiBackground from '../components/KardiBackground'

const Home = () => {
  const scrollRef = useRef<HTMLElement>(null)

  return (
    <>
      <KardiBackground>
        <main
          ref={scrollRef}
          className='h-screen overflow-y-auto snap-y snap-proximity scroll-smooth'
        >
          {/* Header — must match Header's own h-[200vh] */}
          <section className='snap-start h-[200vh]'>
            <Header scrollContainer={scrollRef} />
          </section>

          {/* About */}
          <section className='snap-start md:h-screen'>
            <About />
          </section>

          {/* Image */}

          {/* Product */}
          <section className=''>
            <StickySection />
          </section>

          {/* World Wide */}
          <section className='snap-start md:h-screen'>
            <WorldWide />
          </section>

          {/* Why Choose us */}
          {/* <section className='snap-start md:h-screen'>
        <Whychoosus />
      </section> */}

          {/* Service */}
          <section>
            <BeforeFooter />
          </section>

          {/* Footer */}
          <section className='snap-start md:h-screen'>
            <Footer />
          </section>
        </main>
      </KardiBackground>
    </>
  )
}

export default Home
