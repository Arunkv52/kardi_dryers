
const offices = [
  {
    type: 'Headquarters',
    location: 'Wood Log Furnace',
  },
  {
    type: 'Field office',
    location: 'Wood Chips Furnace',
  },
  {
    type: 'Field office',
    location: 'Biomass Pellet Burner',
  },
  {
    type: 'Field office',
    location: 'Diesel/Kerosene Burner',
  },
  {
    type: 'Headquarters',
    location: 'Biomass Heater',
  },
  {
    type: 'Field office',
    location: 'Thermic Fluid Heater',
  },
  {
    type: 'Field office',
    location: 'Hot Water System',
  }
]

const AlliedProducts = () => {
  return (
    <section className="bg-black/80 text-white min-h-screen py-20">
      <div className="px-6 md:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Content */}
          <div className="flex flex-col justify-start">
            <span className="mb-6 text-sm font-thin">
              Furnaces, Burners & Heating Systems
            </span>

            <h2 className="max-w-2xl text-4xl font-light leading-tight tracking-tight md:text-3xl">
             Complete heat source solutions to power every dryer — from wood log furnaces to thermic fluid heaters.


            </h2>
          </div>

          {/* Right Cards */}
          <div className="grid gap-5 sm:grid-cols-3">
            {offices.map((office, index) => (
              <div
                key={index}
                className="group relative h-[120px] border border-white/5 bg-white/50  p-3 transition-all duration-300 hover:-translate-y-2 hover:border-white/10"
              >
               

                <div className="absolute bottom-12 left-5 flex items-center gap-3">
                 

                  <h3 className="text-base font-light text-white">
                    {office.location}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AlliedProducts