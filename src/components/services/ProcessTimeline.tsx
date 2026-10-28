import { motion } from 'framer-motion'

const steps = [
  {
    title: 'Enquiry and Site Visit',
    desc: 'tell us your crop and location. An engineer usually visits before design begins.'
  },
  {
    title: 'Design and Proposal',
    desc: 'we size the dryer to your crop, volume and fuel, and put capacity, drying time and cost in writing.'
  },
  {
    title: 'Manufacturing',
    desc: ' built in Chennai or Kerala to the agreed specification.'
  },
  {
    title: 'Installation',
    desc: 'our team assembles it on site and runs a supervised first batch before handover.'
  },
  {
    title: 'Training',
    desc: ' your operators learn on the real machine, with your crop, before we leave.'
  },
  {
    title: 'Support',
    desc: ' spares, scheduled maintenance and AMC for the years ahead.'
  }
]

const ProcessTimeline = () => {
  return (
    <section className='px-6 py-24 md:px-10'>
      <div className=''>
        <p className='mb-4 text-xs font-medium uppercase tracking-[0.18em] text-white/70'>
          How a project moves
        </p>

        <h2 className='mb-16  font-serif text-4xl leading-tight text-white md:text-5xl'>
          From enquiry to your first harvest-ready batch
        </h2>

        {/* Scroll horizontally on smaller screens */}
        <div className='overflow-x-auto pb-5'>
          <div className='relative lg:min-w-0'>
            {/* Connecting line through the center of the markers */}
            <div className='absolute left-0 right-0 top-5.5 h-px bg-white/15' />

            <div className='grid grid-cols-6 gap-4'>
              {steps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className='relative z-10'
                >
                  <div className='mb-6 flex h-11 w-11 items-center justify-center rounded-full border border-gold/60 bg-forest'>
                    <span className='font-serif text-sm text-white'>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className='mb-2 pr-3 font-serif text-lg text-white'>
                    {step.title}
                  </h3>

                  <p className='pr-4 text-sm leading-6 text-white'>
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessTimeline
