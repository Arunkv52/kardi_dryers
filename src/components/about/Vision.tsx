import VisionImg from '../../assets/about/landscape-img.jpg'

const Vision = () => {
  return (
    <>
      <div className='md:px-10 px-5 '>
        <div className='bg-[#f4f1ea] md:flex justify-start items-center gap-3 '>
          <div className='md:w-1/2 w-full'>
            <img src={VisionImg} alt='' className='h-150 w-full object-cover' />
          </div>
          <div className='md:w-1/2 w-full md:px-20 px-5'>
            <div className='text-black'>
              <p className='text-sm py-5 font-semibold text-black/50 '>
                Our Expertise
              </p>
              <h4 className='text-5xl py-5 text-[#52813b] '>
                Two decades of drying innovation
              </h4>
              <p className='py-5 text-base leading-6 font-inter'>
                From pioneering cardamom dryers to large grain and sago systems,
                we engineer dryers that improve quality, save energy and reduce
                post-harvest loss.
              </p>
              <p>
                4,000+ installations, from 50 kg/batch units to 170 T/batch
                system, in India, Sri Lanka, Africa, the Middle East and beyond.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Vision
