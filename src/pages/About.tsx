import Certificates from '../components/about/Certificates'
import HorizontalTimeline from '../components/about/HorizontalTimeline'
import Leadership from '../components/about/Leadership'
import Ourstory from '../components/about/Ourstory'
import Vision from '../components/about/Vision'
import Footer from '../components/Footer'
import KardiBackground from '../components/KardiBackground'
import Navbar from '../components/Navbar'

const About = () => {
  return (
    <>
      <KardiBackground>
        <section>
          <Navbar />
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
         <section>
          <Certificates />
        </section>

                  <Footer />

      </KardiBackground>
    </>
  )
}

export default About
