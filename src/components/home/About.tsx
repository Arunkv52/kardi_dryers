import { motion, useReducedMotion } from 'framer-motion'
import { CalendarDays, Factory, Globe, Wheat } from 'lucide-react'
import { Link } from 'react-router'
import { Phone } from 'lucide-react'

const companyStats = [
  {
    value: '4,000+',
    title: 'installed worldwide',
    icon: Factory
  },
  {
    value: '35+',
    title: 'crops dried',
    icon: Wheat
  },
  {
    value: '8+',
    title: ' Indian states & International Presence',
   
    icon: Globe
  },
  {
    value: '25+',
    title: ' years of experience (since 2001)',
    icon: CalendarDays
  }
]

const About = () => {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section
      aria-labelledby='about-stats-title'
      className=' px-5 py-16 sm:px-8 md:py-24 md:px-10'
    >
      <div className=''>
        <div className='md:flex justify-between items-center gap-0'>
          <div className='mb-10 max-w-2xl md:mb-14'>
            <p className='mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#e95435]'>
              Kardi Dryers: Agro Crop Dryers Since 2001
            </p>
            <h2
              id='about-stats-title'
              className='text-3xl font-semibold leading-tight tracking-tight  sm:text-4xl md:text-4xl'
            >
              Kardi Dryers builds custom crop dryers for farmers, plantations
              and processors in India and abroad. Our engineering protects
              harvest quality and cuts drying losses.
            </h2>
            
          </div>
          <div>
            <Link
              to='/contact'
              className='hidden lg:inline-flex items-center gap-2 rounded-full bg-[#ff5938] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#ff5938]/30 transition hover:bg-[#e54d2c] hover:-translate-y-0.5 mx-3'
            >
              <Phone size={16} />
              Get a Quote
            </Link>
            <Link
              to='/contact'
              className='hidden lg:inline-flex items-center gap-2 rounded-full border border-white px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#ff5938]/30 transition hover:bg-[#e54d2c] hover:-translate-y-0.5'
            >
              <Phone size={16} />
              Get a Quote
            </Link>
          </div>
        </div>

        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5 xl:grid-cols-4'>
          {companyStats.map((stat, index) => {
            const Icon = stat.icon

            return (
              <motion.article
                key={stat.title}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.5,
                  delay: prefersReducedMotion ? 0 : index * 0.08,
                  ease: 'easeOut'
                }}
                className='group relative min-h-62.5 overflow-hidden rounded-3xl border border-[#e7e4df] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#17392c]/10 sm:p-7'
              >
                <div className='absolute inset-x-0 top-0 h-1 bg-[#ff5938] opacity-0 transition-opacity duration-300 group-hover:opacity-100' />

                <div className='mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff0eb] text-[#e95435] transition duration-300 group-hover:bg-[#ff5938] group-hover:text-white'>
                  <Icon aria-hidden='true' size={22} strokeWidth={1.8} />
                </div>

                <p className='text-4xl font-semibold tracking-tight text-[#14231d] sm:text-5xl'>
                  {stat.value}
                </p>
                <h3 className='mt-4 text-base font-semibold leading-snug text-[#26352e]'>
                  {stat.title}
                </h3>
                <p className='mt-1 text-sm leading-6 text-[#69736d]'>
                  {stat.detail}
                </p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default About
