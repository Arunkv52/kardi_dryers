import Herosection from '../components/about/Herosection'
import HorizontalTimeline from '../components/about/HorizontalTimeline'
import Leadership from '../components/about/Leadership'
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
      <section>
        <Leadership />
      </section>
      <section>
        <HorizontalTimeline />
      </section>

      <Footer />
    </>
  )
}

export default About
