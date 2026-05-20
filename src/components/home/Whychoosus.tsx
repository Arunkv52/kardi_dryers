
const Whychoosus = () => {
  return (
    <>
      {/* Why choose us */}
      <section className='why-choose relative overflow-hidden'>
        <div className='md:px-10 px-10 relative z-10'>
          <div className='py-20 text-white'>
            <p className='uppercase text-[12px] font-bold mb-5 text-[#ff5938]'>
              Why Choose us
            </p>

            <h2 className='md:text-4xl text-xl md:w-1/2 leading-10'>
              Our engineering approach ensures uniform drying, reduced moisture
              loss, and improved product quality across every batch. By adapting
              each system to local farming conditions, we help farmers achieve
              better efficiency, higher market value, and long-term reliability.
            </h2>
          </div>
        </div>

        {/* Rotating Shape */}
        <div className='rotating-shape'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </section>
    </>
  )
}

export default Whychoosus
