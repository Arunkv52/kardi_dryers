import { motion } from 'framer-motion'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import HeroSection from '../../components/products/HeroSection'
import ProdImage from '../../assets/products/Kardi-Dryers.jpg'

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

  category: 'Mobile Paddy Dryer',

  name: 'Basic 15',

  tagline:
    'Compact mobile paddy dryer designed for efficient grain drying with reliable performance.',

  overview:
    'Basic 15 is suitable for small and medium-scale farmers who require a compact, fuel-efficient mobile drying solution for paddy and maize.',

  heroImage: ProdImage,

  type: 'Mobile Paddy Dryer',

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
    { label: 'Height', value: '3975 mm' },
    { label: 'Width', value: '2010 mm' },
    { label: 'Total Length', value: '5718 mm' },
    { label: 'Weight', value: '1500 Kg' },
    { label: 'Power Required', value: '10KW (25 PTO HP)' },
    { label: 'Batch Capacity (Maize)', value: '1.25 Ton' },
    { label: 'Batch Capacity (Paddy)', value: '1 Ton' },
    { label: 'Loading Time', value: '10 min' },
    { label: 'Unloading Time', value: '5 min' },
    { label: 'Average Daily Output (Paddy)', value: '8 Ton' },
    { label: 'Average Daily Output (Maize)', value: '9 Ton' },
    { label: 'Electric Motors', value: '5' },
    { label: 'Fan Type', value: 'Centrifugal' },
    { label: 'Agitator', value: 'Yes' },
    { label: 'Burner', value: 'Diesel Automatic Single Stage' }
  ]
}

const relatedProducts = [
  {
    name: 'Cardamom & Pepper Dryer',
    category: 'Spice Processing',
    slug: 'cardamom-pepper-dryer'
  },
  {
    name: 'Mobile Paddy Dryer',
    category: 'Grain Processing',
    slug: 'mobile-paddy-dryer'
  }
]

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
}

export default function ProductPage ({
  product = basic15
}: {
  product?: Product
}) {
  const speedMultiple = product.sunDriedHrs / product.dryingTimeHrs

  return (
    <>
      <Navbar />
      <HeroSection />
      <main className='bg-[#F4F1EA] text-[#2B2B26] py-20'>
        {/* Breadcrumb */}
        <div className='mx-auto max-w-6xl px-6 pt-10 md:px-0'>
          <a
            href='/products'
            className='text-xs uppercase tracking-[0.2em] text-[#8C8678] transition-colors hover:text-[#A6824F]'
          >
            ← All Dryers
          </a>
        </div>

        {/* Hero */}
        <section className='px-6 pb-20 pt-10 lg:px-12'>
          <div className='mx-auto grid max-w-6xl gap-12 lg:grid-cols-12 lg:gap-16'>
            <motion.div {...fadeUp as any} className='lg:col-span-5'>
              <div className='max-w-md overflow-hidden border border-[#D8D2C2] bg-white/40 p-2 shadow-[0_20px_60px_rgba(43,43,38,0.08)]'>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={product.heroImage}
                  alt={product.name}
                  className='h-auto w-full object-cover'
                />
              </div>
              <p className='mt-3 text-xs tracking-[0.1em] text-[#8C8678]'>
                Fig. 01 — {product.type} system, {product.locations.join(', ')}{' '}
                facility
              </p>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 } as any}
              className='flex flex-col justify-center lg:col-span-7'
            >
              <p className='mb-5 text-sm font-medium tracking-[0.2em] uppercase text-[#A6824F]'>
                {product.category}
              </p>
              <h1
                className='text-5xl leading-none tracking-tight text-[#2B2B26] md:text-6xl'
                style={{ fontFamily: 'var(--font-serif, Georgia, serif)' }}
              >
                {product.name}
              </h1>
              <p className='mt-6 max-w-xl text-lg leading-relaxed text-[#5B564B]'>
                {product.tagline}
              </p>

              <div className='mt-10 flex flex-wrap items-center gap-4'>
                <a
                  href='#enquire'
                  className='bg-[#2B2B26] px-7 py-3.5 text-sm tracking-[0.05em] text-white transition-colors duration-300 hover:bg-[#A6824F]'
                >
                  Request a Quote
                </a>
                <a
                  href='#specifications'
                  className='border border-[#C9B98F] px-7 py-3.5 text-sm tracking-[0.05em] text-[#5B564B] transition-colors duration-300 hover:border-[#A6824F] hover:text-[#A6824F]'
                >
                  View Specifications
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stat strip */}
        <motion.section
          {...fadeUp as any} 
          className='border-y border-[#D8D2C2] bg-white/40'
        >
          <div className='mx-auto grid max-w-6xl grid-cols-1 divide-y divide-[#D8D2C2] px-6 sm:grid-cols-3 sm:divide-y-0 sm:divide-x lg:px-12'>
            <StatBlock value={product.capacityRange} label='Capacity' />
            <StatBlock
              value={`${product.dryingTimeHrs} hrs`}
              label='Drying Time'
            />
            <StatBlock
              value={`${speedMultiple.toFixed(1)}×`}
              label='Faster Than Sun Drying'
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
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: i * 0.08 } as any}
                  className='border-t border-[#A6824F] pt-6'
                >
                  <h3
                    className='text-xl text-[#2B2B26]'
                    style={{ fontFamily: 'var(--font-serif, Georgia, serif)' }}
                  >
                    {h.title}
                  </h3>
                  <p className='mt-3 text-[15px] leading-[1.8] text-[#5B564B]'>
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
              {...fadeUp as any}
              className='mb-12 text-sm font-medium tracking-[0.2em] uppercase text-[#A6824F]'
            >
              Specifications
            </motion.p>

            <div className='border-t border-[#D8D2C2]'>
           

              {product.specifications.map(spec => (
                <SpecRow key={spec.label} label={spec.label}>
                  <span className='text-lg text-[#2B2B26]'>{spec.value}</span>
                </SpecRow>
              ))}
            </div>
          </div>
        </section>

        {/* CTA band */}
        <section
          id='enquire'
          className='bg-[#15140F] px-6 py-24 text-white lg:px-12'
        >
          <motion.div {...fadeUp as any} className='mx-auto max-w-6xl text-center'>
            <h2
              className='text-3xl md:text-4xl'
              style={{ fontFamily: 'var(--font-serif, Georgia, serif)' }}
            >
              Ready to bring this to your facility?
            </h2>
            <p className='mx-auto mt-4 max-w-xl text-white/60'>
              Tell us your crop, your volume, and your location — we'll
              recommend the right configuration of the{' '}
              {product.name.toLowerCase()}.
            </p>
            <a
              href='/contact'
              className='mt-9 inline-block bg-[#A6824F] px-8 py-4 text-sm tracking-[0.05em] text-[#15140F] transition-colors duration-300 hover:bg-white'
            >
              Talk to Our Team
            </a>
          </motion.div>
        </section>

        {/* Related products */}
        <section className='px-6 py-24 lg:px-12'>
          <div className='mx-auto max-w-6xl'>
            <motion.p
              {...fadeUp as any}
              className='mb-10 text-sm font-medium tracking-[0.2em] uppercase text-[#A6824F]'
            >
              Explore Other Dryers
            </motion.p>
            <div className='grid gap-5 sm:grid-cols-2'>
              {relatedProducts.map(p => (
                <a
                  key={p.slug}
                  href={`/products/${p.slug}`}
                  className='group flex items-center justify-between border border-[#D8D2C2] px-7 py-6 transition-colors duration-300 hover:border-[#A6824F]'
                >
                  <div>
                    <p className='text-xs uppercase tracking-[0.15em] text-[#8C8678]'>
                      {p.category}
                    </p>
                    <p
                      className='mt-1 text-xl text-[#2B2B26]'
                      style={{
                        fontFamily: 'var(--font-serif, Georgia, serif)'
                      }}
                    >
                      {p.name}
                    </p>
                  </div>
                  <span className='text-[#C9B98F] transition-colors duration-300 group-hover:text-[#A6824F]'>
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

function StatBlock ({ value, label }: { value: string; label: string }) {
  return (
    <div className='flex flex-col items-center gap-2 px-6 py-10 text-center'>
      <span
        className='text-4xl text-[#2B2B26] md:text-5xl'
        style={{ fontFamily: 'var(--font-serif, Georgia, serif)' }}
      >
        {value}
      </span>
      <span className='text-xs uppercase tracking-[0.15em] text-[#8C8678]'>
        {label}
      </span>
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
      <span className='text-sm uppercase tracking-[0.1em] text-[#8C8678]'>
        {label}
      </span>
      <div>{children}</div>
    </div>
  )
}


