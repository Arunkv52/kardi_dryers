import Footer from '../components/Footer'
import KardiBackground from '../components/KardiBackground'
import Navbar from '../components/Navbar'

const displayFont = { fontFamily: "'Fraunces', ui-serif, Georgia, serif" }
const sansFont = { fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif" }

export default function CustomBuiltPage () {
  return (
    <>
      <KardiBackground>
        <Navbar />
        <div className='min-h-screen  text-[#201F1A]' style={sansFont}>
          {/* ---------------- Hero banner ---------------- */}
          <header className='relative overflow-hidden px-6 pb-16 pt-18 md:px-10 md:pb-20'>
            <div className='mx-auto mt-18 max-w-3xl text-center'>
              <p className='text-[11px] font-medium tracking-[0.25em] text-white/50'>
                Custom-Built Dryers
              </p>
              <h1
                className='mt-3 text-4xl leading-tight text-white md:text-6xl'
                style={displayFont}
              >
                Built around your crop, not the other way round.
              </h1>
            </div>
          </header>

          {/* ---------------- Intro + stat strip ---------------- */}
          <section className='mx-auto max-w-3xl px-6 pt-14 md:px-0 text-center '>
            <p className='text-xs font-medium tracking-[0.2em] text-[#E2572B]'>
              CUSTOM ENGINEERED
            </p>
            <h2
              className='mt-3 text-3xl md:text-4xl text-white'
              style={displayFont}
            >
              Custom Built
            </h2>
            <p className='mt-4 max-w-2xl text-sm leading-relaxed  md:text-base text-white'>
              Every harvest is different. Tell us your crop, scale and fuel, and
              we will design the dryer around them, using the same proven
              engineering as our standard range.
            </p>
            <div className='mt-8 flex flex-wrap items-center justify-center gap-3'>
              <a
                href='/contact'
                className='rounded-sm border bg-white px-6 py-3 text-sm font-medium transition hover:border-black/30'
              >
                Talk to an engineer
              </a>
            </div>
          </section>

          <section className='bg-white'>
            <div className='mx-auto mt-14 max-w-5xl border-y border-black/8 px-6 md:px-10 '>
              <div className='grid grid-cols-1 divide-y divide-black/8 sm:grid-cols-3 sm:divide-x sm:divide-y-0'>
                {[
                  { big: '3 inputs', small: 'crop, scale, fuel' },
                  { big: '100%', small: ' Written spec sheet for your project' },
                  { big: 'Nationwide', small: ' Install and service across India' }
                ].map(s => (
                  <div key={s.small} className='px-6 py-10 text-center'>
                    <p className='text-2xl md:text-3xl' style={displayFont}>
                      {s.big}
                    </p>
                    <p className='mt-2 text-[11px] font-medium tracking-[0.18em] text-[#8C8874]'>
                      {s.small}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* <section className='bg-[#0B1912] px-6 py-20 text-center md:py-24'>
            <h2
              className='mx-auto max-w-xl text-3xl text-white md:text-4xl'
              style={displayFont}
            >
              Ready to bring this to your facility?
            </h2>
            <p className='mx-auto mt-3 max-w-md text-sm text-white/60'>
              Send us your build above and our team will follow up within one
              business day.
            </p>
            <a
              href='/contact'
              className='mt-8 inline-block rounded-sm bg-[#C08A3E] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#a97733]'
            >
              Talk to our team
            </a>
          </section> */}
        </div>
        <div>
          {/* Footer */}
          <Footer />
        </div>
      </KardiBackground>
    </>
  )
}
