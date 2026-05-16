import Header from '../components/Header'
import '../App.css'
import Footer from '../components/Footer'
import CarousalItem from '../components/CarousalItem'
import Download from '../assets/Home/download-brochure.jpg'
import Button from '../components/myui/Button'
import Icon1 from '../assets/icons/global-1.svg'
import Icon2 from '../assets/icons/agri-commodities.svg'
import Icon3 from '../assets/icons/agri-tech.svg'


const Home = () => {
  return (
    <>
      <Header />
      {/* About section */}
      <section className='px-5 md:py-20 py-20'>
        <div className='abt-all md:flex flex md:flex-row flex-col md:justify-start md:gap-20 gap-5 md:px-20 px-0'>
          <div className='md:w-1/2 w-full'>
            <p className='uppercase text-[12px] font-bold'>
              ** Are you interest to whom am i?
            </p>
          </div>
          <div className='md:w-1/2 w-full'>
            <h3 className='text-2xl'>
              Kardi Dryers is India’s trusted name in agro crop drying
              technology, delivering customized drying solutions for farmers,
              plantations, and processors worldwide. Backed by innovation,
              experience, and global partnerships, we help preserve harvest
              quality with precision engineering.
            </h3>

            <div className=' mt-5'>
              <Button text='Know More' className='px-4' />
            </div>
          </div>
        </div>
        {/* 3 columns */}
        <div className='abt-start md:px-0 px-0 md:mt-0 mt-20 md:grid md:grid-cols-4 grid grid-cols-1 gap-10 md:mt-20 mt-0'>
          <div className='abt-bg'>
            <div className='text-area text-white md:text-2xl text-xl relative top-10/12 md:left-5 left-5'>
              <p className='text-[#ff5938] font-bold'>4,000+</p>
              <h6 className='text-lg'>Dryers Supplied</h6>
              <p className='text-sm text-white/50'>Globally</p>
            </div>
          </div>
          <div className='abt-bg-1'>
            <div className='text-area text-white md:text-2xl text-xl relative top-10/12 md:left-5 left-5'>
              <p className='text-[#ff5938] font-bold'>35+</p>
              <h6 className='text-lg'>Agricultural Commodities</h6>
              <p className='text-sm text-white/50'>Served</p>
            </div>
          </div>
          <div className='abt-bg-2'>
            <div className='text-area text-white md:text-2xl text-xl relative top-10/12 md:left-5 left-5'>
              <p className='text-[#ff5938] font-bold'>8+</p>
              <h6 className='text-lg'>States & International</h6>
              <p className='text-sm text-white/50'>Presence</p>
            </div>
          </div>
          <div className='abt-bg-3'>
            <div className='text-area text-white md:text-2xl text-xl relative top-10/12 md:left-5 left-5'>
              <p className='text-[#ff5938] font-bold'>20+</p>
              <h6 className='text-lg'>Years of Experience</h6>
              <p className='text-sm text-white/50'>Since 2001</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className='why-choose relative overflow-hidden'>
        <div className='md:px-20 px-10 relative z-10'>
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

      {/* Service Highlight */}
      <section className='text-2xl md:my-20 my-20'>
        <div className='md:px-80 px-10'>
          <h2 className='md:text-6xl text-4xl'>
            We deliver advanced agricultural{' '}
            <span className='text-black/50'>
              <strong>Drying solutions</strong>
            </span>{' '}
          </h2>
          <p className='text-base font-semibold mt-5'>
            Kardi Dryers designs, manufactures, and supports high-performance
            drying systems for agricultural commodities across diverse climates
            and farming conditions. Our solutions help farmers and processors
            improve product quality, reduce post-harvest losses, and achieve
            efficient, reliable drying operations.
          </p>
          <div className='md:grid md:grid-cols-3 md:gap-50 grid grid-cols-1 gap-10 mt-10'>
            <div className='w-[350px] h-[320px] border border-[#083326] rounded-[35px] p-12 bg-white'>
              {/* Icon */}
              <div className='relative w-12 h-12'>
               <img src={Icon1} alt="" />
              </div>

              {/* Content */}
              <div className='mt-16'>
                <h2 className='text-6xl font-medium text-[#ff5938] leading-none'>
                  4,000+
                </h2>

                <p className='mt-4 text-[20px] leading-[20px] text-black font-normal'>
                  Dryers installed across India and global markets
                </p>
              </div>
            </div>
            <div className='w-[350px] h-[320px] border border-[#083326] rounded-[35px] p-12 bg-white'>
              {/* Icon */}
              <div className='relative w-12 h-12'>
               <img src={Icon2} alt="" />
              </div>

              {/* Content */}
              <div className='mt-16'>
                <h2 className='text-6xl font-medium  text-[#ff5938] leading-none'>
                  35+
                </h2>

                <p className='mt-4 text-[20px] leading-[20px] text-black font-normal'>
                  Agricultural commodities successfully processed
                </p>
              </div>
            </div>
            <div className='w-[350px] h-[320px] border border-[#083326] rounded-[35px] p-12 bg-white'>
             {/* Icon */}
              <div className='relative w-12 h-12'>
               <img src={Icon3} alt="" />
              </div>

              {/* Content */}
              <div className='mt-16'>
                <h2 className='text-6xl font-medium  text-[#ff5938] leading-none'>
                  20+
                </h2>

                <p className='mt-4 text-[20px] leading-[20px] text-black font-normal'>
                  Years of innovation in agro drying technology
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Ranges */}
      <section className='bg-white py-20'>
        <div>
          <div className='prod-heading'>
            <h2 className='md:text-5xl text-4xl text-center'>
              Engineered Dryers for{' '}
              <span className='text-black/50'>Modern Agriculture</span>
            </h2>
            <p></p>
          </div>
          <div className='prod-scroll'>
            <CarousalItem />
          </div>
        </div>
      </section>

      {/* Download Brochure */}
      <section className='py-20 md:px-40 px-10'>
        <div className='down-brochure md:flex justify-around items-center gap-5'>
          <div className='md:w-1/2 w-full'>
            <h4 className='text-5xl pb-5'>
              Discover Our
              <span className='text-black/50'><strong> Drying Solutions </strong></span>{' '}
            </h4>
            <p className='pb-10'>
              Get detailed insights into Kardi Dryers’ advanced agro drying
              technology, including product features, applications, and
              technical specifications. Find the right drying solution tailored
              to your crop, climate, and operational needs.
            </p>
            <Button text='Download Brochure' />
          </div>
          <div className='md:w-1/2 w-full md:py-0 py-10'>
            <img src={Download} alt='' className='h-[500px]' />
          </div>
        </div>
        
      </section>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default Home
