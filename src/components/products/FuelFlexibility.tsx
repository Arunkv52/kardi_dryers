
const cards = [
  {
    title: 'Careers'
  },
  {
    title: 'Briquettes'
  },
  {
    title: 'Wood Pellets'
  },
  {
    title: 'Wood Chips'
  },
  {
    title: 'Firewood'
  },
  {
    title: 'Diesel'
  },
  {
    title: 'Kerosene'
  },
  {
    title: 'LPG'
  },
  {
    title: 'Thermic Fluid'
  },
  {
    title: 'Natural Gas'
  },
  {
    title: 'Hot Water'
  },
  {
    title: 'Steam'
  }
]

export default function LearnMore () {
  return (
    <section className='bg-white py-24 md:py-20'>
      <div className='mx-auto  px-6 lg:px-12'>
        {/* Heading Row */}
        <div className='grid gap-12 lg:grid-cols-12'>
          <div className='lg:col-span-3'>
            <p className='text-sm font-medium text-black'>Fuel Flexibility</p>
          </div>

          <div className='lg:col-span-8'>
            <h2 className='font-inter text-4xl leading-none tracking-tight text-black md:text-4xl'>
              Any Fuel, Any Location
            </h2>
            <p className='py-4'>
              Kardi dryers can be customized for the fuel available in your
              region — from biomass pellets to thermic fluid.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className='mt-20 grid gap-5 lg:grid-cols-6'>
          {cards.map((card, index) => (
            <div
              key={index}
              className='group relative flex h-[100px] flex-col bg-[#b4b0b0] p-8 transition-all duration-500 hover:-translate-y-2 hover:bg-[#141414]'
            >
              {/* Title */}
              <h3 className='font-inter text-2xl font-light text-white md:text-lg'>
                {card.title}
              </h3>

              
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
