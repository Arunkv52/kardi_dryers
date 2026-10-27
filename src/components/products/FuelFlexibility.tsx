import { motion } from 'framer-motion'
import { useState } from 'react'

// Dropped "Careers" — it was sitting in the array but isn't a fuel type;
// looked like a stray entry pulled in from a nav/footer list.
const fuels = [
  {
    name: 'Briquettes',
    note: 'Compressed biomass logs. Slow, steady burn and easy bulk storage.'
  },
  {
    name: 'Wood Pellets',
    note: 'Uniform, dry pellets that feed automatically for steady heat.'
  },
  {
    name: 'Wood Chips',
    note: 'Low-cost, steady fuel for larger dryers.'
  },
  {
    name: 'Firewood',
    note: 'Split logs. The simplest fuel, available almost everywhere'
  },
  {
    name: 'Diesel',
    note: 'Clean-burning, with precise control and quick start-up'
  },
  {
    name: 'Kerosene',
    note: 'A lighter fuel that is easy to handle for small dryers'
  },
  {
    name: 'LPG',
    note: 'Bottled or piped gas. Instant ignition and fine heat control.'
  },
  {
    name: 'Thermic Fluid',
    note: 'Closed-loop heat-transfer oil that gives steady, indirect heat.'
  },
  {
    name: 'Natural Gas',
    note: 'Piped gas for continuous running with no on-site storage.'
  },
  {
    name: 'Hot Water',
    note: 'Circulated hot water for gentle, indirect drying.'
  },
  {
    name: 'Steam',
    note: 'High-temperature steam for fast, intense heating'
  }
]

export default function LearnMore () {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section className='bg-[#F4F1EA] py-24 md:py-32'>
      <div className='mx-auto max-w-6xl px-6 lg:px-12'>
        {/* Heading row */}
        <div className='grid gap-12 lg:grid-cols-12'>
          <div className='lg:col-span-3'>
            <p className='text-sm font-medium tracking-[0.2em] uppercase text-[#A6824F]'>
              Fuel Flexibility
            </p>
          </div>

          <div className='lg:col-span-8'>
            <h2
              className='text-3xl leading-none tracking-tight text-black md:text-4xl lg:text-5xl'
              style={{ fontFamily: 'var(--font-serif, Georgia, serif)' }}
            >
              Any fuel, anywhere
            </h2>
            <p className='mt-5 max-w-xl text-[15px] leading-[1.8] text-[#5B564B]'>
              We build each dryer around the fuel you can get locally, from
              biomass pellets to thermic fluid.
            </p>
          </div>
        </div>

        {/* Vertical fuel list */}
        <div className='mt-20 border-t border-[#D8D2C2]'>
          {fuels.map((fuel, i) => {
            const isActive = activeIndex === i
            return (
              <motion.div
                key={fuel.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.04,
                  ease: [0.22, 1, 0.36, 1]
                }}
                onMouseEnter={() => setActiveIndex(i)}
                onMouseLeave={() =>
                  setActiveIndex(curr => (curr === i ? null : curr))
                }
                className='border-b border-[#D8D2C2]'
              >
                <button
                  type='button'
                  onClick={() =>
                    setActiveIndex(curr => (curr === i ? null : i))
                  }
                  aria-expanded={isActive}
                  className='flex w-full items-center justify-between gap-6 py-7 text-left md:py-8'
                >
                  <span
                    className={`text-2xl font-light transition-colors duration-500 md:text-3xl ${
                      isActive ? 'text-[#000000]' : 'text-[#000000]'
                    }`}
                    style={{ fontFamily: 'var(--font-serif, Georgia, serif)' }}
                  >
                    {fuel.name}
                  </span>

                  <span
                    className={`h-1.5 w-1.5 flex-shrink-0 rounded-full transition-all duration-500 ${
                      isActive ? 'scale-150 bg-[#A6824F]' : 'bg-[#C9B98F]'
                    }`}
                  />
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: isActive ? 'auto' : 0,
                    opacity: isActive ? 1 : 0
                  }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className='overflow-hidden'
                >
                  <div className='mb-7 max-w-xl border-l-2 border-[#A6824F] bg-white/60 px-6 py-5 md:mb-8'>
                    <p className='text-[15px] leading-[1.8] text-[#5B564B]'>
                      {fuel.note}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
