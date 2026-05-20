import ServiceImage from '../../assets/Home/hero-sections.jpg'

const Service = () => {
  return (
    <>
      {/* Service Highlight */}
      <section className='text-2xl md:my-20 my-20'>
        <div className='md:flex flex-row'>
          <div className='md:w-1/2 w-full service-section'>
            <img src={ServiceImage} alt='' className='w-full md:h-dvh ' />
          </div>
          <div className='md:w-1/2 w-full md:p-10 p-5'>
            <h2 className='md:text-6xl text-4xl text-white'>
              We deliver advanced agricultural{' '}
              <span className='text-white/50'>
                <strong>Drying solutions</strong>
              </span>{' '}
            </h2>
            <p className='text-base font-light mt-5 text-white'>
              Kardi Dryers designs, manufactures, and supports high-performance
              drying systems for agricultural commodities across diverse
              climates and farming conditions. Our solutions help farmers and
              processors improve product quality, reduce post-harvest losses,
              and achieve efficient, reliable drying operations.
            </p>
            <div className='md:relative md:right-190 md:top-10'>
              <div className='md:grid md:grid-cols-4 md:gap-90 grid grid-cols-1 gap-10 mt-10'>
                <div className='w-[350px] h-[250px] border border-[#083326] rounded-[35px] p-8 bg-white/70'>
                  {/* Content */}
                  <div className='mt-5'>
                    <h2 className='text-2xl font-medium text-black/80 leading-none'>
                        Trusted Industry Expertise
                    </h2>

                    <p className='mt-15 text-base leading-[20px] text-black font-normal'>
                     Over 20 years of innovation with 4,000+ installations serving farmers and processors worldwide.
                    </p>
                  </div>
                </div>
                <div className='w-[350px] h-[250px] border border-[#083326] rounded-[35px] p-8 bg-white/70'>
                  {/* Content */}
                  <div className='mt-5'>
                    <h2 className='text-2xl font-medium text-black/80 leading-none'>
                        Customized Drying Systems
                    </h2>

                    <p className='mt-15 text-base leading-[20px] text-black font-normal'>
                      Tailored solutions designed for different crops, capacities, climates, and fuel requirements.
                    </p>
                  </div>
                </div>
                <div className='w-[350px] h-[250px] border border-[#083326] rounded-[35px] p-8 bg-white/70'>
                  {/* Content */}
                  <div className='mt-5'>
                    <h2 className='text-2xl font-medium text-black/80 leading-none'>
                        Energy Efficient Technology
                    </h2>

                    <p className='mt-15 text-base leading-[20px] text-black font-normal'>
                      Advanced drying solutions engineered to reduce fuel consumption while maintaining consistent drying quality.
                    </p>
                  </div>
                </div>
                <div className='w-[350px] h-[250px] border border-[#083326] rounded-[35px] p-8 bg-white/70'>
                  {/* Content */}
                  <div className='mt-5'>
                    <h2 className='text-2xl font-medium text-black/80 leading-none'>
                        Reliable Crop Protection
                    </h2>

                    <p className='mt-15 text-base leading-[20px] text-black font-normal'>
                      Preserve product quality, color, aroma, and moisture balance with uniform drying performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Service
