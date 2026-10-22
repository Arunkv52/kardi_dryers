import { motion } from 'framer-motion'
import Footer from '../components/Footer'
import KardiBackgroundGray from '../components/KardiBackgroundGray'
import Navbar from '../components/Navbar'
import BasicImg from '../assets/products/grain-dryers/pedrotti-basic-range-series.jpg'
import { Link } from 'react-router'



const specifications = [
  {
    model: 'BASIC 55',
    height: '3,47',
    workingPositionHeight: '3,47',
    width: '2,5',
    workingLength: '(7,82)',
    power: '22.5 kW (30 HP)',
    batchCapacity: '5.5',
    dailyOutput: '25'
  },
  {
    model: 'BASIC 90',
    height: '4,37',
    workingPositionHeight: '4,37',
    width: '2,5',
    workingLength: '(7,82)',
    power: '30 kW (40 HP)',
    batchCapacity: '9',
    dailyOutput: '35'
  },
  {
    model: 'JUNIOR 120',
    height: '7,09',
    workingPositionHeight: '7,09',
    width: '2,5',
    workingLength: '(7,72)',
    power: '30 kW (40 HP)',
    batchCapacity: '12',
    dailyOutput: '42'
  },
  {
    model: 'BASIC 140',
    height: '4,72',
    workingPositionHeight: '4,72',
    width: '3',
    workingLength: '(7,79)',
    power: '30 kW (40 HP)',
    batchCapacity: '13,5',
    dailyOutput: '55'
  }
]

const tableHeadings = [
  'Model',
  'Height',
  'Height working position',
  'Width',
  'Total length working (rest)',
  'Power req. kW (PTO drive HP)',
  'Batch capacity maize A.W. 0/0',
  'Daily output avg.'
]

const specificationKeys: (keyof typeof specifications[number])[] = [
  'model',
  'height',
  'workingPositionHeight',
  'width',
  'workingLength',
  'power',
  'batchCapacity',
  'dailyOutput'
]

const upcomingModels = [
  {
    name: 'Basic 15',
    image: BasicImg,
    description: 'Explore the Basic 15 grain dryer.',
    link: '/basic15'
  },
  {
    name: 'Basic 25',
    image: BasicImg,
    description: 'Explore the Basic 25 grain dryer.',
    link: '/basic25'
  },
  {
    name: 'Basic 35',
    image: BasicImg,
    description: 'Explore the Basic 35 grain dryer.',
    link: '/basic35'
  }
]

export default function GrainDryers () {
  return (
    <KardiBackgroundGray>
      <Navbar />

      <main className='text-[#252525] mt-20'>
        {/* Page heading */}
        <section className='px-6 pb-10 pt-16 text-center md:px-10 md:pt-24'>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='mb-4 text-sm uppercase tracking-[0.25em] text-[#ed2529]'
          >
            Grain Dryers
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className='font-serif text-4xl md:text-6xl text-white'
          >
            Basic Range Series
          </motion.h1>

          <div className='mx-auto mt-6 h-1 w-16 bg-[#ed2529]' />
        </section>

        {/* Product banner */}
        <section className='px-6 pb-16 md:px-10'>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='relative mx-auto min-h-80 max-w-7xl overflow-hidden bg-[#dedede] md:min-h-120'
          >
            <img
              src={BasicImg}
              alt='Kardi Pedrotti Basic Range grain dryer'
              className='absolute inset-0 h-full w-full object-cover'
            />

            <div className='absolute inset-0 bg-linear-to-r from-black/55 via-black/10 to-transparent' />

            <div className='relative flex min-h-80 items-end p-8 md:min-h-120 md:p-14'>
              <div className='max-w-lg text-white'>
                <p className='mb-3 text-sm uppercase tracking-[0.2em] text-white/80'>
                  Kardi Pedrotti
                </p>
                <h2 className='font-serif text-4xl md:text-6xl'>Basic Range</h2>
                <p className='mt-4 text-lg text-white/85'>
                  Compact, reliable mobile grain dryers for your farm.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Range description */}
        <section className='px-6 pb-20 md:px-10 text-white'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='mx-auto max-w-7xl'
          >
            <SectionHeading>Basic Range</SectionHeading>

            <div className='mt-8 space-y-5 text-base leading-8 text-white md:text-lg'>
              <p>
                The Basic Range is the first step in exploring the wide range of
                Pedrotti dryer models. It offers a compact solution for farms
                looking to dry their products on-site and maintain direct
                control over the final quality.
              </p>

              <p>
                Each model has reduced dimensions, is easy to move during the
                drying season, and can be stored in a suitable space when not in
                use. The maximum daily output across the range is approximately
                60 tons, depending on the product and drying conditions.
              </p>

              <p>
                The Basic Range shares the mechanical strength, reliability,
                energy efficiency, and durability found throughout the Pedrotti
                range.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Technical specifications */}
        <section className='px-6 pb-24 md:px-10 text-white'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='mx-auto max-w-7xl'
          >
            <SectionHeading>Technical Specifications</SectionHeading>

            <div className='mt-8 overflow-x-auto rounded-sm'>
              <table className='w-full min-w-250 border-collapse text-left'>
                <thead>
                  <tr className='bg-[#ed2529] text-white'>
                    {tableHeadings.map(heading => (
                      <th
                        key={heading}
                        className='border border-white/30 px-5 py-5 text-center text-sm font-semibold uppercase leading-5'
                      >
                        {heading}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {specifications.map((row, rowIndex) => (
                    <tr
                      key={row.model}
                      className={
                        rowIndex % 2 === 0 ? 'bg-white' : 'bg-[#f4f4f4]'
                      }
                    >
                      {specificationKeys.map(key => (
                        <td
                          key={key}
                          className={`border border-[#dedede] px-5 py-5 text-sm leading-6 text-[#777] ${
                            key === 'model'
                              ? 'font-medium uppercase text-[#ed2529]'
                              : ''
                          }`}
                        >
                          {row[key]}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className='mt-4 text-sm text-[#777]'>
              Swipe or scroll horizontally to view all specifications.
            </p>
          </motion.div>
        </section>

        <section className='px-6 pb-20 md:px-10'>
          <div className='mx-auto max-w-7xl text-white'>
            <SectionHeading>More Basic Range Models</SectionHeading>

            <div className='mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
              {upcomingModels.map((model, index) => (
                <motion.article
                  key={model.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className='overflow-hidden border border-[#dedede] bg-white'
                >
                  <div className='aspect-4/3 overflow-hidden bg-[#f4f4f4]'>
                    <img
                      src={model.image}
                      alt={`${model.name} grain dryer`}
                      loading='lazy'
                      className='h-full w-full object-contain p-4 transition-transform duration-500 hover:scale-105'
                    />
                  </div>

                  <div className='p-6'>
                    <h3 className='font-serif text-2xl text-[#252525]'>
                      {model.name}
                    </h3>

                    <p className='mt-2 text-sm leading-6 text-[#737373]'>
                      {model.description}
                    </p>

                    <Link
                      to={model.link}
                      className='mt-5 inline-flex bg-[#ed2529] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#c91c20]'
                    >
                      View model
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </KardiBackgroundGray>
  )
}

function SectionHeading ({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h2 className='text-2xl font-medium uppercase tracking-wide md:text-3xl'>
        {children}
      </h2>
      <div className='mt-4 h-1 w-20 bg-[#ed2529]' />
    </div>
  )
}
