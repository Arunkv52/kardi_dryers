const pillars = [
  {
    title: 'Site assessment & consultation',
    desc: "We visit the farm, plantation or processing site to assess crop, throughput, climate and existing infrastructure before recommending a system — not after."
  },
  {
    title: 'Custom engineering & design',
    desc: 'Capacity, airflow and heat source are engineered around your crop and operation, from 50 kg/hr trial units to 170 tonnes/day industrial lines.'
  },
  {
    title: 'In-house manufacturing',
    desc: 'Every dryer is built at our own facilities in Chennai and Kerala, by the same engineering team that designed it.'
  },
  {
    title: 'Installation & commissioning',
    desc: 'On-site assembly, calibration and a supervised first run, so the system is handed over already proven on your crop.'
  },
  {
    title: 'After-sales support & AMC',
    desc: 'Scheduled maintenance, spare parts and retrofits keep dryers running for decades, not just through the warranty period.'
  },
  {
    title: 'Farmer training & community drying centres',
    desc: "Beyond individual installations, we've set up community drying centres — like the Kardi Cardamom Curing House in Kerala — so smallholders can access drying capacity they couldn't justify alone."
  }
]

const ServicePillars = () => {
  return (
    <section className="bg-[#062920] py-24 px-6 md:px-10 text-white">
      <div className="mx-auto">
        <div className="md:flex justify-between items-start gap-10 mb-16">
          <div className="md:w-1/2">
            <p className="text-leaf text-xs uppercase tracking-[0.18em] font-medium mb-4">
              What we handle
            </p>
            <h2 className="text-4xl md:text-5xl text-charcoal leading-tight font-serif">
              Everything between a harvest and a dry one
            </h2>
          </div>
          <div className="md:w-[40%] mt-6 md:mt-0">
            <p className="text-body leading-7">
              Kardi runs the full project in-house — assessment, design,
              manufacturing, installation and the years of support after —
              rather than handing you off between contractors.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {pillars.map(item => (
            <div
              key={item.title}
              className="pt-6 border-t border-line"
            >
              <h3 className="text-2xl text-charcoal mb-3 font-serif">
                {item.title}
              </h3>
              <p className="text-body leading-7 text-[15px]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicePillars
