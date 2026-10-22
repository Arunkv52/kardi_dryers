import { motion } from 'framer-motion'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import KardiBackground from '../../components/KardiBackground'
import ProdImage from '../../assets/products/spices-products.png'

const crops = [
  'Cardamom',
  'Pepper',
  'Cocoa',
  'Ginger',
  'Turmeric',
  'Clove',
  'Coffee',
]

const capacities = ['100', '200', '300', '500', '700', '1,000']

const fuelOptions = ['Biomass', 'Firewood', 'Fuel oils', 'Gas']

const highlights = [
  {
    title: 'Multiple crops',
    description:
      'Drying solutions for cardamom, pepper, cocoa, ginger, turmeric, clove, and coffee.',
  },
  {
    title: 'Capacity options',
    description:
      'Choose from the capacity options shown: 100, 200, 300, 500, 700, or 1,000 kg.',
  },
  {
    title: 'Fuel options',
    description:
      'Select from biomass, firewood, fuel oils, or gas, according to your requirements.',
  },
  {
    title: 'Special rotary dryer',
    description:
      'A special rotary dryer is offered for coffee, ginger, and turmeric.',
  },
]

const specifications = [
  { label: 'Crops', value: crops.join(', ') },
  { label: 'Capacity options', value: `${capacities.join(', ')} kg` },
  { label: 'Fuel options', value: fuelOptions.join(', ') },
  {
    label: 'Special dryer',
    value: 'Rotary dryer for coffee, ginger, and turmeric',
  },
  {
    label: 'Operating requirement',
    value: 'Electricity and fuel are required to generate hot air',
  },
]

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: {
    duration: 0.6,
    ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
  },
}

export default function ProductPage() {
  return (
    <KardiBackground>
      <Navbar />
      

      <main className="pt-20 text-white">
       
        {/* Product hero */}
        <section className="px-6 pb-20 pt-10 lg:px-12">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-12 lg:gap-16">
            <motion.div {...fadeUp} className="lg:col-span-5">
              <div className="max-w-md overflow-hidden border border-[#D8D2C2] bg-white/40 p-2 shadow-[0_20px_60px_rgba(43,43,38,0.08)]">
                <img
                  src={ProdImage}
                  alt="Kardi dryer for spices and plantation crops"
                  className="h-auto w-full object-cover"
                />
              </div>

              <p className="mt-3 text-xs tracking-widest text-white/80">
                Dryers for spices and plantation crops
              </p>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className="flex flex-col justify-center lg:col-span-7"
            >
              <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-white/70">
                Dryers — Spices &amp; Plantation Crops
              </p>

              <h1 className="text-4xl leading-tight tracking-tight text-white md:text-6xl">
                Crop Drying Solutions
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
                Dryers for cardamom, pepper, cocoa, ginger, turmeric, clove, and
                coffee, with multiple capacity and fuel options.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#enquire"
                  className="bg-[#2B2B26] px-7 py-3.5 text-sm tracking-wider text-white transition-colors duration-300 hover:bg-[#A6824F]"
                >
                  Request a Quote
                </a>

                <a
                  href="#specifications"
                  className="border border-[#C9B98F] px-7 py-3.5 text-sm tracking-wider transition-colors duration-300 hover:border-primary hover:text-primary"
                >
                  View Specifications
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <motion.section
          {...fadeUp}
          className="border-y border-[#D8D2C2] bg-white/10"
        >
          <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-[#D8D2C2] px-6 sm:grid-cols-3 sm:divide-y-0 sm:divide-x lg:px-12">
            <StatBlock value="07" label="Crops" />
            <StatBlock value="100–1,000 kg" label="Capacity Options" />
            <StatBlock value="04" label="Fuel Options" />
          </div>
        </motion.section>

        {/* Highlights */}
        <section className="px-6 py-24 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 md:grid-cols-2 md:gap-12">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  {...fadeUp}
                  transition={{
                    ...fadeUp.transition,
                    delay: index * 0.08,
                  }}
                  className="border-t border-[#A6824F] pt-6"
                >
                  <h2
                    className="text-xl text-white"
                    style={{
                      fontFamily: 'var(--font-serif, Georgia, serif)',
                    }}
                  >
                    {item.title}
                  </h2>

                  <p className="mt-3 text-[15px] leading-[1.8] text-white/70">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Specifications */}
        <section id="specifications" className="px-6 py-24 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <motion.p
              {...fadeUp}
              className="mb-12 text-sm font-medium uppercase tracking-[0.2em] text-white"
            >
              Specifications
            </motion.p>

            <div className="border-t border-[#D8D2C2]">
              {specifications.map((item) => (
                <div
                  key={item.label}
                  className="grid gap-4 border-b border-[#D8D2C2] py-7 sm:grid-cols-[200px_1fr] sm:items-center"
                >
                  <span className="text-sm uppercase tracking-widest text-white/80">
                    {item.label}
                  </span>
                  <span className="text-lg text-white">{item.value}</span>
                </div>
              ))}
            </div>

            <h2 className="mb-4 mt-12 text-sm font-medium uppercase tracking-[0.2em] text-white">
              Fuel Options
            </h2>

            <ul className="flex flex-wrap gap-3">
              {fuelOptions.map((fuel) => (
                <li
                  key={fuel}
                  className="border border-white/20 px-4 py-2 text-sm text-white/80"
                >
                  {fuel}
                </li>
              ))}
            </ul>

            <p className="mt-8 text-sm leading-6 text-white/60">
              Please indicate your preferred fuel. All dryers require
              electricity and fuel to generate hot air.
            </p>
          </div>
        </section>

        {/* Contact call to action */}
        <section
          id="enquire"
          className="bg-white px-6 py-24 text-center text-black lg:px-12"
        >
          <motion.div {...fadeUp} className="mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl">
              Looking for a dryer for your crop?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-black/60">
              Tell us which crop you need to dry, your required capacity, and
              your preferred fuel option. Our team can help you find a suitable
              solution.
            </p>

            <a
              href="/contact"
              className="mt-9 inline-block bg-[#145947] px-8 py-4 text-sm tracking-wider text-white transition-colors duration-300 hover:bg-black"
            >
              Talk to Our Team
            </a>
          </motion.div>
        </section>
      </main>

      <Footer />
    </KardiBackground>
  )
}

function StatBlock({
  value,
  label,
}: {
  value: string
  label: string
}) {
  return (
    <div className="flex flex-col items-center gap-2 px-6 py-10 text-center">
      <span
        className="text-3xl text-white md:text-4xl"
        style={{ fontFamily: 'var(--font-serif, Georgia, serif)' }}
      >
        {value}
      </span>

      <span className="text-xs uppercase tracking-[0.15em] text-white/70">
        {label}
      </span>
    </div>
  )
}