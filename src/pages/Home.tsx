import Header from '../components/Header'
import '../App.css'
import Footer from '../components/Footer'
import CarousalItem from '../components/CarousalItem'
import Download from '../assets/Home/brochure-img.jpg'
import Button from '../components/myui/Button'


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
            <h3 className='text-4xl'>
              The process of turning processedresidual streams into energycan be
              improved to be better,smarter, and more transparent.
            </h3>

            <div className=' mt-5'>
              <Button text="Know More" className='px-4' />
            </div>
          </div>
        </div>
        {/* 3 columns */}
        <div className='abt-start md:px-0 px-0 md:mt-0 mt-20 md:grid md:grid-cols-4 grid grid-cols-1 gap-10 md:mt-20 mt-0'>
          <div className='abt-bg'>
            <div className='text-area text-white md:text-2xl text-xl relative top-10/12 md:left-5 left-5'>
              <p>From residual stream to raw material</p>
            </div>
          </div>
          <div className='abt-bg'>
            <div className='text-area text-white md:text-2xl text-xl relative top-10/12 md:left-5 left-5'>
              <p>From residual stream to raw material</p>
            </div>
          </div>
          <div className='abt-bg'>
            <div className='text-area text-white md:text-2xl text-xl relative top-10/12 md:left-5 left-5'>
              <p>From residual stream to raw material</p>
            </div>
          </div>
          <div className='abt-bg'>
            <div className='text-area text-white md:text-2xl text-xl relative top-10/12 md:left-5 left-5'>
              <p>From residual stream to raw material</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className='why-choose relative overflow-hidden'>
        <div className='md:px-20 px-10 relative z-10'>
          <div className='py-20 text-white'>
            <p className='uppercase text-[12px] font-bold mb-5'>
              Why Choose us
            </p>

            <h2 className='md:text-4xl text-xl md:w-1/2 leading-10'>
              We understand the importance of a reliable and efficient
              propulsion system for your boat, which is why we offer
              state-of-the-art marine engines that deliver outstanding
              performance, reliability, and durability.
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
      <section className='text-2xl md:my-20 my-10'>
        <div className='md:px-80 px-10'>
          <h2 className='md:text-7xl text-4xl'>
            We develop{' '}
            <span className='text-black/50'>
              sustainable <br />
              energy solutions
            </span>{' '}
          </h2>
          <p className='text-base font-semibold mt-5'>
            Virya Energy develops, finances, constructs, and operates
            sustainable energy assets. We accelerate the energy transition by
            scaling new technologies across the sustainable energy ecosystem. By
            delivering “fit for purpose energy,” we ensure our renewable
            solutions match each client’s specific needs, scale, and operational
            rhythms. We provide renewable energy in the right form, exactly when
            needed.
          </p>
          <div className='md:grid md:grid-cols-3 md:gap-50 grid grid-cols-1 gap-10 mt-10'>
            <div className='w-[350px] h-[320px] border border-[#e8e2dd] rounded-[35px] p-12 bg-white'>
              {/* Icon */}
              <div className='relative w-12 h-12'>
                {/* Head */}
                <div className='w-6 h-6 bg-[#e8e2dd] rounded-full absolute left-3 top-0'></div>

                {/* Body */}
                <div className='w-12 h-9 bg-[#ff5b36] rounded-t-full rounded-b-[14px] absolute bottom-0'></div>
              </div>

              {/* Content */}
              <div className='mt-16'>
                <h2 className='text-6xl font-medium text-black leading-none'>
                  700+
                </h2>

                <p className='mt-4 text-[20px] leading-[20px] text-black font-normal'>
                  Employees over multiple markets
                </p>
              </div>
            </div>
            <div className='w-[350px] h-[320px] border border-[#e8e2dd] rounded-[35px] p-12 bg-white'>
              {/* Icon */}
              <div className='relative w-12 h-12'>
                {/* Head */}
                <div className='w-6 h-6 bg-[#e8e2dd] rounded-full absolute left-3 top-0'></div>

                {/* Body */}
                <div className='w-12 h-9 bg-[#ff5b36] rounded-t-full rounded-b-[14px] absolute bottom-0'></div>
              </div>

              {/* Content */}
              <div className='mt-16'>
                <h2 className='text-6xl font-medium text-black leading-none'>
                  700+
                </h2>

                <p className='mt-4 text-[20px] leading-[20px] text-black font-normal'>
                  Employees over multiple markets
                </p>
              </div>
            </div>
            <div className='w-[350px] h-[320px] border border-[#e8e2dd] rounded-[35px] p-12 bg-white'>
              {/* Icon */}
              <div className='relative w-12 h-12'>
                {/* Head */}
                <div className='w-6 h-6 bg-[#e8e2dd] rounded-full absolute left-3 top-0'></div>

                {/* Body */}
                <div className='w-12 h-9 bg-[#ff5b36] rounded-t-full rounded-b-[14px] absolute bottom-0'></div>
              </div>

              {/* Content */}
              <div className='mt-16'>
                <h2 className='text-6xl font-medium text-black leading-none'>
                  700+
                </h2>

                <p className='mt-4 text-[20px] leading-[20px] text-black font-normal'>
                  Employees over multiple markets
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
            <h2 className='md:text-4xl text-4xl text-center'>Product Ranges</h2>
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
            <h4 className='text-5xl pb-5'>Our Fit For Purpose <span className='text-black/50'>Brand Promise</span> </h4>
            <p className='pb-10'>
              For Virya Energy, the energy transition must be adapted to each
              reality. Our “fit for purpose” approach reflects our commitment to
              developing customized solutions that exactly meet everyone’s
              needs. By simplifying access to renewable energy, we we are
              building a path towards a sustainable future.
            </p>
            <Button text='Download Brochure'/>
          </div>
          <div className="md:w-1/2 w-full md:py-0 py-10">
            <img src={Download} alt="" />          
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default Home
