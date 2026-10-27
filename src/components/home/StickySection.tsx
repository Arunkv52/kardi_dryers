import { useEffect, useRef } from 'react'
import { Link } from 'react-router'
import { ArrowUpRight } from 'lucide-react'

import Image1 from '../../assets/Home/grain-img.png'
import Image2 from '../../assets/Home/spice-img.png'
import Image3 from '../../assets/Home/coffee-img.png'
import Image4 from '../../assets/Home/sago-img.png'

/** Distance from top of screen where the first card sticks (clears the fixed navbar) */
const STICK_TOP = 100
/** How much each next card peeks below the previous one */
const STEP = 16

const stickcards = [
  {
    image: Image1,
    title: 'Grain Dryers',
    link: '/basic15',
    tint: '#ffffff',
    crops: ['Rice', 'Maize', 'Pulses', 'Oilseeds'],
    description: ' Even, efficient drying for paddy, maize, pulses and oilseeds. Prevents mould and storage loss, and helps you get a better price.'
  },
  {
    image: Image2,
    title: 'Spices Dryers',
    link: '/comesoon',
    tint: '#ffffff',
    crops: ['Cardamom', 'Pepper', 'Turmeric', 'Ginger', 'Chilli'],
    description: 'Gentle, low-temperature drying that keeps the colour, aroma and oils of cardamom, pepper, turmeric, ginger and chilli. Export-ready quality.'
  },
  {
    image: Image3,
    title: 'Coffee Dryers',
    link: '/cofeedryers',
    tint: '#ffffff',
    crops: ['Coffee beans', 'Plantations', 'Processing units'],
    description: 'Controlled airflow and temperature dry cherry and parchment to the right moisture, with flavour intact. For estates of any size.'
  },
  {
    image: Image4,
    title: 'Sago Dryers',
    link: '/sagopearl',
    tint: '#ffffff',
    crops: ['Sago starch', 'Sago pearls', 'Continuous operation'],
    description: 'Hygienic, continuous drying for sago and starch. Uniform moisture, longer shelf life, lower fuel cost.'
  }
]

const StickySection = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  /* As the next card slides over, the card underneath shrinks slightly and darkens */
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return

    let ticking = false

    const update = () => {
      const cards = cardRefs.current

      cards.forEach((el, i) => {
        const next = cards[i + 1]
        if (!el || !next) return

        const top = STICK_TOP + i * STEP
        const h = el.offsetHeight
        const nextTop = next.getBoundingClientRect().top
        const p = Math.min(1, Math.max(0, (top + h - nextTop) / (h - STEP)))

        el.style.transform = `scale(${1 - p * 0.04})`
        el.style.setProperty('--cover', String(p))
      })

      ticking = false
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <section className='bg-[#f3f3f3] px-5 py-14 md:px-10 md:py-20'>
      {/* Heading */}
      <div className='mb-14 md:mb-20 md:flex justify-around items-center'>
        <div className='w-full flex justify-center'>
          <div className='text-left'>
            <h2 className='text-4xl font-medium leading-tight text-[#031c14] md:text-5xl'>
              <span className='text-[#52823c]'>Our Dryers </span>
            </h2>
          </div>
        </div>
        <div className='w-full'>
          <p className='max-w-xl py-3 text-base leading-relaxed  md:text-lg text-black'>
            Energy-efficient dryers for every major crop, built to give 
consistent quality and lower losses.
          </p>
        </div>
      </div>

      {/* Stacking cards */}
      <div>
        {stickcards.map((item, i) => (
          <div
            key={item.title}
            ref={el => {
              cardRefs.current[i] = el
            }}
            className='group relative mb-10 origin-top overflow-hidden  shadow-[0_-12px_40px_-12px_rgba(3,28,20,0.25)] will-change-transform md:mb-16 md:flex'
            style={{
              position: 'sticky',
              top: STICK_TOP + i * STEP,
              backgroundColor: item.tint
            }}
          >
            {/* Image */}
            <div className='h-40 w-full overflow-hidden md:h-auto md:min-h-110 md:w-[33.33%]'>
              <img
                src={item.image}
                alt={item.title}
                loading='lazy'
                className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-105'
              />
            </div>

            {/* Content */}
            <div className='flex w-full flex-col justify-center p-6 md:w-[66.66%] md:p-12'>
              <h3 className='text-3xl font-semibold text-[#031c14] md:text-4xl'>
                {item.title}
              </h3>

              <p className='mt-6 text-base leading-relaxed tracking-tight text-[#031c14]/80'>
                {item.description}
              </p>

              <Link
                to={item.link}
                className='mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#52813b] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#ff5938]'
              >
                View {item.title}
                <ArrowUpRight size={18} />
              </Link>
            </div>

            {/* Darkening layer driven by scroll (see --cover) */}
            <div
              className='pointer-events-none absolute inset-0 bg-[#031c14]'
              style={{ opacity: 'calc(var(--cover, 0) * 0.4)' }}
              aria-hidden='true'
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default StickySection
