import VisionImg from '../../assets/about/landscape-img.jpg'

const Vision = () => {
  return (
    <>
      <div className='md:px-10 px-5 bg-white'>
        <div className='bg-[#f4f1ea] md:flex justify-start items-center gap-3 '>
          <div className='md:w-1/2 w-full'>
            <img
              src={VisionImg}
              alt=''
              className='h-[600px] w-full object-cover'
            />
          </div>
          <div className='md:w-1/2 w-full md:px-20 px-5'>
            <div className='text-black'>
              <p className='text-sm py-5 font-semibold text-black/50 '>
                OUR EXPERTISE
              </p>
              <h4 className='text-5xl py-5 text-[#52813b] '>
                A Legacy of Innovation in Drying Technology
              </h4>
              <p className='py-5 text-base leading-6 font-inter'>
                Kardi Dryers combines over two decades of engineering excellence
                with global grain drying expertise to deliver advanced drying
                solutions for agriculture and food processing industries. From
                pioneering cardamom dryers to large-scale grain and sago drying
                systems, our technology is designed to improve product quality,
                maximize efficiency, and support sustainable post-harvest
                management.
              </p>
              <p>
                With more than 4,000 installations worldwide and customized
                capacities ranging from 50 kg/hr to 170 tons/per batch, we serve
                farmers, processors, and agribusinesses across India, Sri Lanka,
                Africa, the Middle East, and beyond.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Vision
