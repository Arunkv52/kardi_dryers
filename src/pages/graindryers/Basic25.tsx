import { motion } from 'framer-motion'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import ProdImage from '../../assets/products/Kardi-Dryers.jpg'
import KardiBackgroundGray from '../../components/KardiBackgroundGray'
import Certificates from './Certificates'

type Product = {
  slug: string
  category: string
  name: string
  tagline: string
  overview: string
  height: string
  heroImage: string | undefined
  type: string
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
const basic25: Product = {
  slug: 'basic-25',

  category: 'Mobile Paddy Dryer',

  name: 'Basic 25',

  tagline: 'A mid-size mobile dryer for larger paddy and maize batches.',

  overview:
    'Basic 25 is ideal for farmers and commercial operators looking for a reliable, fuel-efficient mobile drying solution for paddy and maize with higher batch capacity.',

  heroImage: ProdImage,

  type: 'Mobile Paddy Dryer',

  crops: ['Paddy', 'Maize'],

  capacityRange: '2 - 2.5 t',

  dryingTimeHrs: 3,

  sunDriedHrs: 18,

  fuel: 'Diesel',

  locations: ['India'],

  height: '4400 mm',

  highlights: [
    {
      title: 'Bigger batches',
      desc: 'Bigger batches: more grain per cycle'
    },
    {
      title: 'Fast Drying',
      desc: 'Fast, even drying that protects grain quality'
    },

    {
      title: 'Fuel Efficient',
      desc: 'Runs on an 11.2 kW (Min 35 HP) tractor PTO drive or 3 Phase Power Supply. With efficient fuel consumption'
    },
    {
      title: 'Automatic Burner',
      desc: ' single-stage, steady heat.'
    }
  ],

  specifications: [
    { label: 'Height', value: '4400 mm' },
    { label: 'Width', value: '2903 mm' },
    { label: 'Total Length', value: '6105 mm' },
    { label: 'Weight', value: '2000 Kg' },
    { label: 'Power Required', value: '11.2KW (30 PTO HP)' },
    { label: 'Batch Capacity (Maize)', value: '2.5 Ton' },
    { label: 'Batch Capacity (Paddy)', value: '2 Ton' },

    {
      label: 'Average Daily Output (Paddy)',
      value: '12* t/day'
    },
    {
      label: 'Average Daily Output (Maize)',
      value: '15* t/day'
    },
    { label: 'Electric Motors', value: '5' },
    { label: 'Fan Type', value: 'Centrifugal' },
    { label: 'Agitator', value: 'Yes' },
    {
      label: 'Burner Diesel Automatic Single Stage',
      value: 'Yes'
    }
  ]
}

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
}

export default function ProductPage ({
  product = basic25
}: {
  product?: Product
}) {
  const speedMultiple = product.sunDriedHrs / product.dryingTimeHrs

  return (
    <>
      <KardiBackgroundGray>
        <Navbar />

        <main className=' text-white pt-20'>
          {/* Breadcrumb */}
          <div className='mx-auto max-w-6xl px-6 pt-10 md:px-0'>
            <a
              href='/products'
              className='text-xs uppercase tracking-[0.2em] transition-colors hover:text-white'
            >
              ← All Dryers
            </a>
          </div>

          {/* Hero */}
          <section className='px-6 pb-20 pt-10 lg:px-12'>
            <div className='mx-auto grid max-w-6xl gap-12 lg:grid-cols-12 lg:gap-16'>
              <motion.div {...(fadeUp as any)} className='lg:col-span-5'>
                <div className='max-w-md overflow-hidden border border-[#D8D2C2] bg-white p-2 shadow-[0_20px_60px_rgba(43,43,38,0.08)]'>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={product.heroImage}
                    alt={product.name}
                    className='h-auto w-full object-cover'
                  />
                </div>
                <p className='mt-3 text-xs tracking-widest '>
                  **Images for reference purpose only
                </p>
              </motion.div>

              <motion.div
                {...(fadeUp as any)}
                transition={{ ...fadeUp.transition, delay: 0.1 }}
                className='flex flex-col justify-center lg:col-span-7'
              >
                <p className='mb-5 text-sm font-medium tracking-[0.2em] uppercase text-white'>
                  {product.category}
                </p>
                <h1
                  className='text-5xl leading-none tracking-tight text-white md:text-6xl'
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
                    Get a Quote
                  </a>
                  <a
                    href='#specifications'
                    className='border border-[#C9B98F] px-7 py-3.5 text-sm tracking-wider  transition-colors duration-300 hover:border-[#A6824F] hover:text-white'
                  >
                    See Specifications
                  </a>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Stat strip */}
          <motion.section
            {...(fadeUp as any)}
            className='border-y border-[#D8D2C2] bg-white/40'
          >
            <div className='mx-auto grid max-w-6xl grid-cols-1 divide-y divide-[#D8D2C2] px-6 sm:grid-cols-3 sm:divide-y-0 sm:divide-x lg:px-12'>
              <StatBlock value={product.capacityRange} label='Capacity' />
              <StatBlock
                value={`${product.dryingTimeHrs} * hrs`}
                label='Drying Time depends on ambion temperature'
              />
              <StatBlock
                value={`${speedMultiple.toFixed(1)}×`}
                label='Drying time days to hours'
              />
            </div>
          </motion.section>

          {/* Highlights */}
          <section className='px-6 py-24 lg:px-12'>
            <div className='mx-auto max-w-6xl'>
              <div className='grid gap-10 md:grid-cols-3 md:gap-12'>
                {product.highlights.map((h, i) => (
                  <motion.div
                    key={h.title}
                    {...(fadeUp as any)}
                    transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                    className='border-t border-[#A6824F] pt-6'
                  >
                    <h3
                      className='text-xl text-white'
                      style={{
                        fontFamily: 'var(--font-serif, Georgia, serif)'
                      }}
                    >
                      {h.title}
                    </h3>
                    <p className='mt-3 text-[15px] leading-[1.8]'>{h.desc}</p>
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
                className='mb-12 text-sm font-medium tracking-[0.2em] uppercase text-white'
              >
                Specifications
              </motion.p>

              <div className='border-t border-[#D8D2C2]'>
                {product.specifications.map(spec => (
                  <SpecRow key={spec.label} label={spec.label}>
                    <span className='text-lg text-white'>{spec.value}</span>
                  </SpecRow>
                ))}
              </div>
            </div>
          </section>
          <section>
            <Certificates />
          </section>

          {/* CTA band */}
          {/* CTA band */}
          <section
            id='enquire'
            className='bg-white px-6 py-24 text-black lg:px-12'
          >
            <motion.div
              {...(fadeUp as any)}
              className='mx-auto max-w-6xl text-center'
            >
              <h2 className='text-3xl md:text-4xl'>
                Want this dryer on your farm?
              </h2>
              <p className='mx-auto mt-4 max-w-xl text-black/60'>
                Tell us your crop, volume and location. We'll recommend the
                right configuration.
              </p>
              <a
                href='/contact'
                className='mt-9 inline-block bg-[#145947] text-white px-8 py-4 text-sm tracking-wider  transition-colors duration-300  hover:text-white hover:bg-black'
              >
                Get a Quote
              </a>
            </motion.div>
          </section>
        </main>
        <Footer />
      </KardiBackgroundGray>
    </>
  )
}

function StatBlock ({ value, label }: { value: string; label: string }) {
  return (
    <div className='flex flex-col items-center gap-2 px-6 py-10 text-center'>
      <span
        className='text-4xl text-white md:text-5xl'
        style={{ fontFamily: 'var(--font-serif, Georgia, serif)' }}
      >
        {value}
      </span>
      <span className='text-xs uppercase tracking-[0.15em] '>{label}</span>
    </div>
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
      <span className='text-sm uppercase tracking-widest '>{label}</span>
      <div>{children}</div>
    </div>
  )
}
