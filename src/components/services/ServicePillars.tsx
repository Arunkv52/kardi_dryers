const pillars = [
  {
    title: 'Site Assessment',
    desc: ' we visit first, checking crop, volume, climate and existing facilities, then recommend a system'
  },
  {
    title: 'Custom Design',
    desc: ' capacity, airflow and heat source built around your crop, from 50 kg/hr trial units to 170 t/day industrial lines.'
  },
  {
    title: 'Our Own Factories',
    desc: 'every dryer is built in Chennai or Kerala by the team that designed it.'
  },
  {
    title: 'Installation',
    desc: ' on-site assembly, calibration and a supervised first run on your crop.'
  },
  {
    title: 'Support and AMC',
    desc: 'scheduled maintenance, spares and upgrades to keep dryers running for decades.'
  },
  {
    title: 'Training and Community Drying Centres',
    desc: ' shared centres, such as the Kardi Cardamom Curing House in Kerala, give small farmers access to drying capacity they could not afford alone.'
  }
]

const ServicePillars = () => {
  return (
    <section className=' py-24 px-6 md:px-10 text-white'>
      <div className='mx-auto'>
        <div className='md:flex justify-between items-start gap-10 mb-16'>
          <div className='md:w-1/2'>
            <p className='text-leaf text-xs uppercase tracking-[0.18em] font-medium mb-4'>
              What We Do
            </p>
            <h2 className='text-4xl md:text-5xl text-charcoal leading-tight font-serif'>
              Everything between harvest and dry crop
            </h2>
          </div>
          <div className='md:w-[40%] mt-6 md:mt-0'>
            <p className='text-body leading-7'>
              One team handles it all: assessment, design, manufacturing,
              installation and long-term support. No hand-offs between
              contractors.
            </p>
          </div>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12'>
          {pillars.map(item => (
            <div key={item.title} className='pt-6 border-t border-line'>
              <h3 className='text-2xl text-charcoal mb-3 font-serif'>
                {item.title}
              </h3>
              <p className='text-body leading-7 text-[15px]'>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicePillars
