import { motion } from 'framer-motion'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import ProdImage from '../../assets/products/sago-dryer.png'
import KardiBackground from '../../components/KardiBackground'

type Product = {
  slug: string
  category: string
  name: string
  tagline: string
  overview: string
  height: string
  heroImage: string | undefined
  type: string | any
  crops: string[]
  capacityRange: string
  dryingTimeHrs: number
  sunDriedHrs: number
  fuel: string
  locations: string[]
  highlights: { title: string; desc: string }[]
  specifications: {
    label: string
    value: string
  }[]
}

// Product details

const basic15: Product = {
  slug: 'basic-15',

  category: 'Sago Conveyor Dryer',

  name: 'KDF - SG Series',

  tagline: '',

  overview: '',

  heroImage: ProdImage,

  type: ' Continuous conveyor dryer',

  crops: ['Paddy', 'Maize'],

  capacityRange: '1 - 1.25 Ton',

  dryingTimeHrs: 4,

  sunDriedHrs: 24,

  fuel: 'Diesel',

  locations: ['India'],
  height: '3975 mm',

  highlights: [
    {
      title: 'Compact Design',
      desc: 'Easy to transport and operate in different farm locations.'
    },
    {
      title: 'Fast Drying',
      desc: 'Reduces drying time while maintaining grain quality.'
    },
    {
      title: 'Fuel Efficient',
      desc: 'Powered using 10KW (25 PTO HP) with optimized fuel consumption.'
    },
    {
      title: 'Automatic Burner',
      desc: 'Single-stage automatic diesel burner for consistent drying.'
    }
  ],

  specifications: [
    { label: 'Type', value: 'Continous Conveyor Dryer' },
    { label: 'Rated Capacity', value: '500 to 2,500 kg/hr or 6 to 28 bags/hr (±10%) ' },
    { label: 'Input Moisture (Wet)', value: 'up to 40%' },
    { label: 'Output Moisture (Dry)', value: '11%' },
    {
      label: 'Fuel Type',
      value: 'Thermic Fluid/firewood/Biomass'
    },
    {
      label: 'Kilograms',
      value: '500 kgs/1000 kgs / 1200 kgs / 1500 kgs/2000 kgs'
    },
    { label: 'Power Required', value: '10KW / 15KW / 19KW / 29KW / 37KW' },
    {
      label: 'Series',
      value: 'KDF - SG 0807 / KDF - SG 1012 / KDF - SG 1516 / KDF - SG 2122'
    }
  ]
}

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
}

export default function SagoPearl ({
  product = basic15
}: {
  product?: Product
}) {
  return (
    <>
      <KardiBackground>
        <Navbar />
        <main className='  pt-20'>
          {/* Breadcrumb */}
          <div className='mx-auto max-w-6xl px-6 pt-10 md:px-0'>
            <a
              href='/products'
              className='text-xs uppercase tracking-[0.2em] transition-colors'
            >
              ← All Dryers
            </a>
          </div>

          {/* Hero */}
          <section className='px-6 pb-20 pt-10 lg:px-12'>
            <div className='mx-auto grid max-w-6xl gap-12 lg:grid-cols-12 lg:gap-16'>
              <motion.div {...(fadeUp as any)} className='lg:col-span-5'>
                <div className='max-w-md overflow-hidden border border-[#D8D2C2] bg-white/40 p-2 shadow-[0_20px_60px_rgba(43,43,38,0.08)]'>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={ProdImage}
                    alt={product.name}
                    className='h-auto w-full object-cover'
                  />
                </div>
                <p className='mt-3 text-xs tracking-widest'>
                   KDF-SG sago conveyor dryer at Kardi Dryers
                </p>
              </motion.div>

              <motion.div
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.1 } as any}
                className='flex flex-col justify-center lg:col-span-7'
              >
                <p className='mb-5 text-sm font-medium tracking-[0.2em] uppercase '>
                  {product.category}
                </p>
                <h1
                  className='text-5xl leading-none tracking-tight md:text-6xl'
                  style={{ fontFamily: 'var(--font-serif, Georgia, serif)' }}
                >
                  {product.name}
                </h1>
                <p className='mt-6 max-w-xl text-lg leading-relaxed'>
                  {product.tagline}
                </p>

                <div className='mt-10 flex flex-wrap items-center gap-4'>
                  <a
                    href='#enquire'
                    className='bg-[#2B2B26] px-7 py-3.5 text-sm tracking-wider text-white transition-colors duration-300 hover:bg-[#A6824F]'
                  >
                    Request a Quote
                  </a>
                  <a
                    href='#specifications'
                    className='border border-[#C9B98F] px-7 py-3.5 text-sm tracking-wider transition-colors duration-300 hover:border-[#A6824F]'
                  >
                    View Specifications
                  </a>
                </div>
              </motion.div>
            </div>
          </section>

        
          {/* Highlights */}
          <section className='px-6 py-24 lg:px-12'>
            <div className='mx-auto max-w-6xl'>
              <div className='grid gap-10 md:grid-cols-3 md:gap-12'>
                {product.highlights.map((h, i) => (
                  <motion.div
                    key={h.title}
                    {...fadeUp}
                    transition={
                      { ...fadeUp.transition, delay: i * 0.08 } as any
                    }
                    className='border-t border-[#A6824F] pt-6'
                  >
                    <h3
                      className='text-xl'
                      style={{
                        fontFamily: 'var(--font-serif, Georgia, serif)'
                      }}
                    >
                      {h.title}
                    </h3>
                    <p className='mt-3 text-[15px] leading-[1.8]'>
                      {h.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Specifications */}
          <section id='specifications' className='px-6 py-24 lg:px-12'>
            <div className='mx-auto max-w-6xl'>
              <motion.p
                {...(fadeUp as any)}
                className='mb-12 text-sm font-medium tracking-[0.2em] uppercase '
              >
                Specifications
              </motion.p>

              <div className='border-t border-[#D8D2C2]'>
                {product.specifications.map(spec => (
                  <SpecRow key={spec.label} label={spec.label}>
                    <span className='text-lg'>{spec.value}</span>
                  </SpecRow>
                ))}
              </div>
            </div>
          </section>

          {/* CTA band */}
          <section
            id='enquire'
            className='bg-white px-6 py-24 text-black lg:px-12'
          >
            <motion.div
              {...(fadeUp as any)}
              className='mx-auto max-w-6xl text-center'
            >
              <h2
                className='text-3xl md:text-4xl'
                style={{ fontFamily: 'var(--font-serif, Georgia, serif)' }}
              >
                Ready to bring this to your facility?
              </h2>
              <p className='mx-auto mt-4 max-w-xl text-black/80'>
                Tell us your crop, your volume, and your location — we'll
                recommend the right configuration of the{' '}
                {product.name.toLowerCase()}.
              </p>
              <a
                href='/contact'
                className='mt-9 inline-block bg-[#125341] px-8 py-4 text-sm tracking-wider text-white transition-colors duration-300 hover:bg-black'
              >
                Talk to Our Team
              </a>
            </motion.div>
          </section>
        </main>
        <Footer />
      </KardiBackground>
    </>
  )
}

function SpecRow ({
  label,
  children
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div className='grid gap-4 border-b border-[#D8D2C2] py-7 sm:grid-cols-[160px_1fr] sm:items-center'>
      <span className='text-sm uppercase tracking-widest'>
        {label}
      </span>
      <div>{children}</div>
    </div>
  )
}
