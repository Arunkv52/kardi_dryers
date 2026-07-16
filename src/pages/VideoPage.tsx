
import { motion } from 'framer-motion'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

// Channel ID UCohAOeBcT1slBhXNjwr1Yyg confirmed live from youtube.com/@KardiPedrotti.
// Swapping "UC" → "UU" gives YouTube's auto-generated "uploads" playlist ID, so this
// embed always reflects whatever's actually been posted — nothing here is hardcoded
// per-video, so there's no list to keep in sync as new videos go up.
const CHANNEL_URL = 'https://www.youtube.com/@KardiPedrotti'
const UPLOADS_PLAYLIST_ID = 'UUohAOeBcT1slBhXNjwr1Yyg'

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
}

export default function YouTubeShowcase() {
  return (

    <>
    <Navbar />
    <section className="relative overflow-hidden bg-[#083326] py-24 text-white md:py-32">
      {/* ambient glow, same quiet accent used elsewhere on dark sections */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-0 h-[480px] w-[480px] rounded-full bg-[#A6824F]/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <motion.p
          {...fadeUp as any}
          className="mb-5 text-sm font-medium tracking-[0.25em] uppercase text-[#A6824F]"
        >
          On YouTube
        </motion.p>

        <motion.h2
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.05 } as any}
          className="text-4xl leading-tight md:text-5xl"
          style={{ fontFamily: 'var(--font-serif, Georgia, serif)' }}
        >
          See It In Motion
        </motion.h2>

        <motion.p
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.1 } as any}
          className="mx-auto mt-5 max-w-xl leading-[1.8] text-white/60"
        >
          Kardi Pedrotti is a joint venture between Kardi Dryers, India and
          Fratelli Pedrotti, Italy — built around mobile grain dryers for
          paddy, maize, and beyond. This is the factory floor, on film.
        </motion.p>
      </div>

      <motion.div
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: 0.15 }as any}
        className="relative mx-auto mt-14 max-w-4xl px-6"
      >
        <div className="border border-[#A6824F]/25 bg-black p-2 shadow-[0_30px_80px_rgba(0,0,0,0.5)] md:p-3">
          <div className="aspect-video w-full overflow-hidden">
            <iframe
              className="h-full w-full"
              src={`https://www.youtube.com/embed/videoseries?list=${UPLOADS_PLAYLIST_ID}`}
              title="Kardi Pedrotti on YouTube"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>

        <div className="mt-9 flex justify-center">
          <a
            href={CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#A6824F] px-7 py-3.5 text-sm tracking-[0.05em] text-[#A6824F] transition-colors duration-300 hover:bg-[#A6824F] hover:text-[#15140F]"
          >
            Subscribe on YouTube →
          </a>
        </div>
      </motion.div>
    </section>
    <Footer/>
    </>
    
  )
}