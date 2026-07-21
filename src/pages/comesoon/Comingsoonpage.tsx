import { Link } from 'react-router'
import Logo from '../../assets/logo/logo.png'

const displayFont = { fontFamily: "'Fraunces', ui-serif, Georgia, serif" }
const sansFont = { fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif" }

function KMark ({ className = '' }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center rounded-full border border-white/25 text-[#F3EEE3] ${className}`}
      style={displayFont}
      aria-hidden='true'
    >
      K
    </div>
  )
}

function Sprout () {
  // The one deliberate signature move on this page: a line-drawn sprout
  // that draws itself in, echoing "grow stronger" from the brand line.
  return (
    <svg
      viewBox='0 0 120 120'
      className='h-16 w-16 md:h-20 md:w-20'
      fill='none'
      aria-hidden='true'
    >
      <path
        d='M60 108 V56'
        stroke='#E2572B'
        strokeWidth='2.5'
        strokeLinecap='round'
        className='sprout-stem'
      />
      <path
        d='M60 66 C40 66 30 50 32 30 C52 30 62 44 60 66 Z'
        stroke='#9FC98A'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='sprout-leaf-left'
      />
      <path
        d='M60 56 C80 56 90 38 88 18 C68 18 58 34 60 56 Z'
        stroke='#9FC98A'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='sprout-leaf-right'
      />
      <style>{`
        .sprout-stem, .sprout-leaf-left, .sprout-leaf-right {
          stroke-dasharray: 220;
          stroke-dashoffset: 220;
          animation: draw 1.6s ease-out forwards;
        }
        .sprout-leaf-left { animation-delay: .35s; }
        .sprout-leaf-right { animation-delay: .6s; }
        @keyframes draw { to { stroke-dashoffset: 0; } }
        @media (prefers-reduced-motion: reduce) {
          .sprout-stem, .sprout-leaf-left, .sprout-leaf-right {
            stroke-dashoffset: 0;
            animation: none;
          }
        }
      `}</style>
    </svg>
  )
}

export default function ComingSoonPage () {


  

  return (
    <div className='min-h-screen bg-[#F3EEE3] text-[#201F1A]' style={sansFont}>
      {/* ---------------- Hero ---------------- */}
      <header className='relative overflow-hidden bg-gradient-to-b from-[#0B1912] to-[#16281C]'>
       

        <nav className='relative mx-auto flex max-w-6xl items-center justify-between px-6 py-6 md:px-10'>
          <div className='flex items-center gap-3'>
            

            <Link to={'/'}>
              <img
                src={Logo}
                alt='Kardi Dryers'
                className='w-[65px] cursor-pointer'
              />
            </Link>
          </div>
          <Link
            to={'/'}
            className='text-xs font-medium tracking-wide text-white/70 transition hover:text-white'
          >
            ← Back to the main site
          </Link>
        </nav>

        <div className='relative mx-auto flex max-w-3xl flex-col items-center px-6 pb-24 pt-10 text-center md:pb-32 md:pt-14'>
          <Sprout />

          <p className='mt-6 text-xs font-medium tracking-[0.25em] text-[#E2572B]'>
            COMING SOON
          </p>

          <h1
            className='mt-4 text-4xl leading-tight text-white md:text-6xl'
            style={displayFont}
          >
            The next dryer in our lineup
            <br />
            is <span className='italic text-[#E2572B]'>taking root.</span>
          </h1>

        

        
        </div>
      </header>

      {/* ---------------- Teaser stat strip ---------------- */}
      <section className='border-b border-black/[0.08]'>
        <div className='mx-auto grid max-w-5xl grid-cols-1 divide-y divide-black/[0.08] sm:grid-cols-3 sm:divide-x sm:divide-y-0'>
          {[
            { big: 'Every crop', small: 'BUILT TO DRY' },
            { big: 'Any scale', small: 'SMALL FARM TO MILL' },
            { big: 'Any fuel', small: 'DIESEL, ELECTRIC, HYBRID' }
          ].map(s => (
            <div key={s.small} className='px-8 py-10 text-center'>
              <p className='text-2xl md:text-3xl' style={displayFont}>
                {s.big}
              </p>
              <p className='mt-2 text-[11px] font-medium tracking-[0.18em] text-[#8C8874]'>
                {s.small}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- CTA band ---------------- */}
      <section className='bg-[#0B1912] px-6 py-20 text-center md:py-24'>
        <p className='text-xs font-medium tracking-[0.25em] text-[#E2572B]'>
          IN THE MEANTIME
        </p>
        <h2
          className='mx-auto mt-4 max-w-xl text-3xl text-white md:text-4xl'
          style={displayFont}
        >
          Talk to us about what your operation needs today.
        </h2>
        <a
          href='/products'
          className='mt-8 inline-block rounded-sm bg-[#C08A3E] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#a97733]'
        >
          Explore our current dryers
        </a>
      </section>

      {/* ---------------- Footer ---------------- */}
      <footer className='bg-[#0E1F16] px-6 py-10 text-white/60 md:px-10'>
        <div className='mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-xs sm:flex-row'>
          <div className='flex items-center gap-3'>
            <KMark className='h-7 w-7 text-xs' />
            <span className='tracking-[0.15em]'>KARDI DRYERS PVT LTD</span>
          </div>
          <p>© 2026 Kardi Dryers. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
