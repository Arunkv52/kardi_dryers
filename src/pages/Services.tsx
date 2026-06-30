import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroSection from '../components/services/HeroSection'
import ServicePillars from '../components/services/ServicePillars'
import ProcessTimeline from '../components/services/ProcessTimeline'

const Services = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServicePillars />
      <ProcessTimeline />

      {/* Quiet closing CTA — the Footer below already carries its own
          banner, so this stays a plain text + links row instead of a
          second heavy panel competing for the same attention. */}
      <section className="bg-white py-20 px-6 md:px-10 text-center">
        <p className="text-charcoal text-2xl md:text-3xl font-serif mb-8 max-w-lg mx-auto">
          Ready to talk specifics about your crop, capacity or site?
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:sales@kardidryers.com"
            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-[#1d5b33] transition-colors"
          >
            Email sales@kardidryers.com
          </a>
          <a
            href="tel:+919791664050"
            className="border border-leaf text-leaf px-6 py-3 rounded-lg hover:bg-leaf hover:text-white transition-colors"
          >
            Call +91 97916 64050
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Services
