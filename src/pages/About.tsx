import Herosection from '../components/about/Herosection'
import Ourstory from '../components/about/Ourstory'
import Vision from '../components/about/Vision'
import Footer from '../components/Footer'

const About = () => {
  return (
    <>
      
      <section>
        <Herosection/>
      </section>
      <section>
        <Ourstory />
      </section>
      <section>
        <Vision />
      </section>

      <Footer />
    </>
  )
}

export default About
