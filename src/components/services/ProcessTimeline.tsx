import { motion } from 'framer-motion'

const steps = [
  {
    title: 'Enquiry & site visit',
    desc: 'Tell us what you\u2019re drying and where. For most projects, an engineer visits the site before any design work starts.'
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
    <section className="bg-[#083326] py-24 px-6 md:px-10">
      <div className="max-w-4xl mx-auto">
        <p className="text-white/70 text-xs uppercase tracking-[0.18em] font-medium mb-4">
          How a project moves
        </p>
        <h2 className="text-4xl md:text-5xl text-white leading-tight font-serif mb-16 max-w-xl">
          From enquiry to your first harvest-ready batch
        </h2>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-5 top-2 bottom-2 w-px bg-white/15 hidden sm:block" />

          <div className="flex flex-col gap-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative flex items-start gap-7"
              >
                <div className="relative z-10 flex-shrink-0 w-11 h-11 rounded-full border border-gold/60 bg-forest flex items-center justify-center">
                  <span className="text-white text-sm font-serif">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="pt-1.5">
                  <h3 className="text-white text-xl mb-2 font-serif">
                    {step.title}
                  </h3>
                  <p className="text-white/60 leading-7 max-w-md text-[15px]">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessTimeline
