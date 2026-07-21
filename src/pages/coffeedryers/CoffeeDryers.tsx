import { motion } from 'framer-motion'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import HeroSection from '../../components/products/HeroSection'
import ProdImage from '../../assets/products/Kardi-Dryers.jpg'

// Crop-form photos, extracted from the "Capacities of Kardi Coffee Dryers" sheet
import driedParchment from '../../assets/products/coffee/crop-dried-parchment.png'
import coffeeCherry from '../../assets/products/coffee/crop-coffee-cherry.png'
import driedCherry from '../../assets/products/coffee/crop-dried-cherry.png'
import greenPepper from '../../assets/products/coffee/crop-green-pepper.jpg'
import blackPepper from '../../assets/products/coffee/crop-black-pepper.jpg'

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
  // Optional sections — only render when a product supplies them
  benefits?: string[]
  capacities?: {
    batches: string[]
    note: string
    forms: { label: string; image: string }[]
  }
  models?: {
    sNo: number
    model: string
    capacityKg: string
  }[]
  modelSpecNotes?: string[]
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

// Kardi Coffee Dryer — content sourced from the Benefits / Capacities / Model
// Range sheets
const coffeeDryer: Product = {
  slug: 'coffee-dryer',

  category: 'Coffee & Spice Processing',

  name: 'Coffee Dryer',

  tagline:
    'Flat bed coffee dryer with indirect heat exchange, built to take your harvest from wet parchment to storage-ready in a single day.',

  overview:
    'Kardi Coffee Dryers use an indirect heat exchanger to deliver controlled, uniform hot air, so parchment, cherry and pepper all dry evenly without scorching or uneven moisture pockets.',

  heroImage: ProdImage,

  type: 'Flat Bed Coffee Dryer',

  crops: ['Coffee Parchment', 'Coffee Cherry', 'Green Pepper', 'Black Pepper'],

  capacityRange: '500 - 4000 kgs/batch',

  dryingTimeHrs: 24,
  sunDriedHrs: 168, // sun drying typically runs 5-7 days vs 24 hrs harvest-to-storage

  fuel: 'Diesel / Biomass',

  locations: ['India'],
  height: '—',

  highlights: [
    {
      title: 'Controlled & Uniform Temperature',
      desc: 'Indirect heat exchanger keeps drying chamber temperature below 40°C throughout the batch.'
    },
    {
      title: 'Prevents Fungal Infestation',
      desc: 'Even, consistent drying stops moisture pockets before they can spoil a batch.'
    },
    {
      title: 'Automated Drying Process',
      desc: 'Automatic ON/OFF firing keeps the batch on schedule without constant supervision.'
    },
    {
      title: 'Multiple Fuel Options',
      desc: 'Runs on diesel or biomass, so fuel choice follows what is available on site.'
    }
  ],

  // Benefits sheet → distilled to the outcomes that matter most to a buyer
  benefits: [
    'Controlled & uniform temperature',
    'Prevents fungal infestation',
    'Consistent quality of dried coffee beans',
    'Automated drying process',
    'More than 80% savings on drying time & labour cost',
    'Less maintenance cost',
    'Better returns',
    'Multiple fuel options',
    'Harvest to storage in 24 hours'
  ],

  capacities: {
    batches: [
      '500 kgs/batch',
      '1000 kgs/batch',
      '1500 kgs/batch',
      '2000 kgs/batch',
      '2500 kgs/batch',
      '4000 kgs/batch'
    ],
    note: 'Models available with or without Mixer / Racker.',
    forms: [
      { label: 'Dried Parchment', image: driedParchment },
      { label: 'Coffee Cherry', image: coffeeCherry },
      { label: 'Dried Cherry', image: driedCherry },
      { label: 'Green Pepper', image: greenPepper },
      { label: 'Black Pepper', image: blackPepper }
    ]
  },

  models: [
    { sNo: 1, model: 'KDF-CO(GC)-05 & KDF-CO(GC)-05MR', capacityKg: '500' },
    { sNo: 2, model: 'KDF-CO(GC)-10 & KDF-CO(GC)-10MR', capacityKg: '1000' },
    { sNo: 3, model: 'KDF-CO(GC)-15 & KDF-CO(GC)-15MR', capacityKg: '1500' },
    { sNo: 4, model: 'KDF-CO(GC)-20 & KDF-CO(GC)-20MR', capacityKg: '2000' },
    { sNo: 5, model: 'KDF-CO(GC)-25 & KDF-CO(GC)-25MR', capacityKg: '2500' },
    { sNo: 6, model: 'KDF-CO(GC)-40 & KDF-CO(GC)-40MR', capacityKg: '4000' }
  ],

  modelSpecNotes: [
    'Flat bed dryer with indirect-type heat exchanger for generating hot air.',
    'Temperature gauges at the drying chamber and hot air blower.',
    'Control mechanism to maintain desired hot air temperature below 40°C.',
    'Automatic firing with ON/OFF mechanism.',
    'Centrifugal blower and combustion air blower with motors.',
    'Note: Transportation and installation charges are additional.'
  ],

  specifications: [
    { label: 'Capacity Range', value: '500 - 4000 kgs/batch' },
    { label: 'Dryer Type', value: 'Flat Bed, Indirect Heat Exchanger' },
    { label: 'Chamber Temperature', value: 'Below 40°C, gauge-controlled' },
    { label: 'Firing', value: 'Automatic ON/OFF' },
    { label: 'Fan Type', value: 'Centrifugal' },
    { label: 'Combustion Air Blower', value: 'Yes, motorised' },
    { label: 'Fuel', value: 'Diesel or Biomass' },
    { label: 'Mixer / Racker', value: 'Available as an option per model' },
    { label: 'Harvest-to-Storage Time', value: '24 hours' }
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

export default function CofeeDryers ({
  product = coffeeDryer
}: {
  product?: Product
}) {
  const speedMultiple = product.sunDriedHrs / product.dryingTimeHrs

  return (
    <>
      <Navbar />
      <HeroSection />
      <main className='bg-[#F4F1EA] text-[#2B2B26] pt-20'>       
       
 {/* Benefits */}
        {product.benefits && (
          <section className='px-6 py-15 lg:px-12'>
            <div className='mx-auto max-w-6xl'>
              <motion.p
                {...fadeUp as any}
                className='mb-4 text-sm font-medium tracking-[0.2em] uppercase text-[#A6824F]'
              >
                Benefits
              </motion.p>
              <motion.h2
                {...fadeUp as any}
                className='mb-12 max-w-2xl text-3xl text-[#2B2B26] md:text-4xl'
                style={{ fontFamily: 'var(--font-serif, Georgia, serif)' }}
              >
                Why processors choose the {product.name.toLowerCase()}
              </motion.h2>

              <div className='grid gap-x-10 gap-y-6 sm:grid-cols-2'>
                {product.benefits.map((benefit, i) => (
                  <motion.div
                    key={benefit}
                    {...fadeUp}
                    transition={{ ...fadeUp.transition, delay: i * 0.04 } as any}
                    className='flex items-start gap-3 border-b border-[#D8D2C2] pb-4'
                  >
                    <svg
                      viewBox='0 0 20 20'
                      className='mt-0.5 h-4 w-4 shrink-0 text-[#A6824F]'
                      fill='none'
                      aria-hidden='true'
                    >
                      <path
                        d='M4 10.5 8 14.5 16 5.5'
                        stroke='currentColor'
                        strokeWidth='1.6'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                    <span className='text-[15px] leading-[1.7] text-[#2B2B26]'>
                      {benefit}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}
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

       

        {/* Capacities & crop forms */}
        {product.capacities && (
          <section className='border-t border-[#D8D2C2] bg-white/40 px-6 py-24 lg:px-12'>
            <div className='mx-auto max-w-6xl'>
              <motion.p
                {...fadeUp as any}
                className='mb-4 text-sm font-medium tracking-[0.2em] uppercase text-[#A6824F]'
              >
                Capacities
              </motion.p>
              <motion.h2
                {...fadeUp as any}
                className='mb-8 max-w-2xl text-3xl text-[#2B2B26] md:text-4xl'
                style={{ fontFamily: 'var(--font-serif, Georgia, serif)' }}
              >
                Batch sizes for every scale of operation
              </motion.h2>

              <motion.div {...fadeUp as any} className='flex flex-wrap gap-3'>
                {product.capacities.batches.map(batch => (
                  <span
                    key={batch}
                    className='rounded-full border border-[#C9B98F] px-5 py-2 text-sm text-[#5B564B]'
                  >
                    {batch}
                  </span>
                ))}
              </motion.div>
              <motion.p
                {...fadeUp as any}
                className='mt-5 text-sm italic text-[#8C8678]'
              >
                {product.capacities.note}
              </motion.p>

              <div className='mt-16 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-5'>
                {product.capacities.forms.map((form, i) => (
                  <motion.div
                    key={form.label}
                    {...fadeUp}
                    transition={{ ...fadeUp.transition, delay: i * 0.06 } as any}
                    className='flex flex-col items-center text-center'
                  >
                    <div className='h-28 w-28 overflow-hidden rounded-full border border-[#D8D2C2] bg-[#F4F1EA] shadow-[0_10px_30px_rgba(43,43,38,0.08)] sm:h-32 sm:w-32'>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={form.image}
                        alt={form.label}
                        className='h-full w-full object-cover'
                      />
                    </div>
                    <p className='mt-4 text-xs uppercase tracking-[0.12em] text-[#8C8678]'>
                      {form.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Model range */}
        {product.models && (
          <section className='border-t border-[#D8D2C2] px-6 py-24 lg:px-12'>
            <div className='mx-auto max-w-6xl'>
              <motion.p
                {...fadeUp as any}
                className='mb-4 text-sm font-medium tracking-[0.2em] uppercase text-[#A6824F]'
              >
                Model Range
              </motion.p>
              <motion.h2
                {...fadeUp as any}
                className='mb-12 max-w-2xl text-3xl text-[#2B2B26] md:text-4xl'
                style={{ fontFamily: 'var(--font-serif, Georgia, serif)' }}
              >
                Six capacities, one drying principle
              </motion.h2>

              <motion.div
                {...fadeUp as any}
                className='overflow-x-auto border border-[#D8D2C2]'
              >
                <table className='w-full min-w-[480px] border-collapse text-left'>
                  <thead>
                    <tr className='bg-white/60'>
                      <th className='w-16 border-b border-[#D8D2C2] px-5 py-4 text-xs uppercase tracking-[0.12em] text-[#8C8678]'>
                        S.No
                      </th>
                      <th className='border-b border-[#D8D2C2] px-5 py-4 text-xs uppercase tracking-[0.12em] text-[#8C8678]'>
                        Model
                      </th>
                      <th className='border-b border-[#D8D2C2] px-5 py-4 text-xs uppercase tracking-[0.12em] text-[#8C8678]'>
                        Capacity (kgs/batch)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.models.map(m => (
                      <tr key={m.sNo} className='border-b border-[#D8D2C2] last:border-b-0'>
                        <td className='px-5 py-4 text-sm text-[#8C8678]'>{m.sNo}</td>
                        <td className='px-5 py-4 text-sm text-[#2B2B26]'>{m.model}</td>
                        <td className='px-5 py-4 text-sm text-[#2B2B26]'>{m.capacityKg}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>

              {product.modelSpecNotes && (
                <motion.div
                  {...fadeUp as any}
                  className='mt-8 border border-[#D8D2C2] bg-white/40 p-7'
                >
                  <p className='mb-4 text-xs uppercase tracking-[0.15em] text-[#8C8678]'>
                    Shared Specifications
                  </p>
                  <ul className='space-y-2.5'>
                    {product.modelSpecNotes.map(note => (
                      <li
                        key={note}
                        className='text-[15px] leading-[1.7] text-[#5B564B]'
                      >
                        {note}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>
          </section>
        )}

       
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