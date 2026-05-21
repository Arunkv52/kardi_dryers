import WorldLogo from '../../assets/products/wind.svg'
const WorldWide = () => {
  return (
    <>
      <div className='md:flex justify-between items-center gap-10 md:px-10 px-5 md:py-0 py-10'>
        <div className='md:w-[40%] w-full'>
          <h2 className='text-white md:text-7xl text-5xl'>
            Worldwide <br /> <span className='text-white/50'>impact</span>
          </h2>
          <p className='text-base mt-10 text-white'>Present across <span className='text-white/50'>3 continents</span>, <br />
           in <span className='text-white/50'>15+ countries</span></p>
           <div className='md:mt-10 mt-10'>
          <button className='bg-white py-5 cursor-pointer px-8 rounded-2xl'>Who Am I ?</button>

           </div>
        </div>
        <div className='md:w-[60%] w-full md:mt-0 mt-20'>
          <img src={WorldLogo} alt='' className='w-full'/>
        </div>
      </div>
    </>
  )
}

export default WorldWide
