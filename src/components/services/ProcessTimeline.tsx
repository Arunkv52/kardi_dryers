import { motion } from 'framer-motion'

const steps = [
  {
    title: 'Enquiry & site visit',
    desc: 'Tell us what you’re drying and where. For most projects, an engineer visits the site before any design work starts.'
  },
  {
    title: 'Engineering & proposal',
    desc: 'We size the dryer to your crop, throughput and available fuel, and put it in writing — capacity, drying time and cost, no guesswork.'
  },
  {
    title: 'Manufacturing',
    desc: 'Your dryer is built at our Chennai or Kerala facility, to the specification agreed in the proposal.'
  },
  {
    title: 'Installation & commissioning',
    desc: 'Our team assembles the system on-site and runs it through a supervised first batch before handover.'
  },
  {
    title: 'Training & handover',
    desc: 'Your operators are trained on the actual machine, on your crop, before we leave.'
  },
  {
    title: 'Ongoing support',
    desc: 'Spare parts, scheduled maintenance and an AMC keep the dryer running for the years ahead.'
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
            <div className='absolute left-0 right-0 top-[22px] h-px bg-white/15' />

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
