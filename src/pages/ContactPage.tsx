import Contact from '../components/contact/Contact'
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
          <Contact />
        </section>
        <section>
          <Footer />
        </section>
      </KardiBackground>
    </>
  )
}

export default About
