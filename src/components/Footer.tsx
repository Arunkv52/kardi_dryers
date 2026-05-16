import Logo from '../assets/logo/logo.png'
import Button from './myui/Button'


const Footer = () => {
  return (
    <>
      <footer className='bg-[#0f4237] md:px-15 px-5 py-10'>
        <section className='px-0 py-15 '>
          <div className='relative overflow-hidden rounded-[40px] bg-[#135846] px-10 md:px-28 py-16 flex flex-col md:flex-row items-center justify-between'>
            {/* Background Decorative Shapes */}
            <div className='absolute inset-0 overflow-hidden'>
              {/* Top Right Orange Shape */}
              <div className='absolute top-0 right-10 w-16 h-40 bg-[#ff5938] rotate-45 rounded-xl'></div>

              {/* Large Diagonal Line */}
              <div className='absolute bottom-30 right-62.5 w-20 h-150 bg-[#0a4a3a] rotate-45 rounded-xl'></div>

              {/* Horizontal Line */}
              <div className='absolute top-40 right-80 w-125 h-14 bg-[#0a4a3a] rounded-md'></div>

              {/* Vertical Line */}
              <div className='absolute bottom-0 right-40 w-14 h-75 bg-[#0a4a3a] rounded-md'></div>

              {/* Small Top Line */}
              <div className='absolute top-0 right-52 w-14 h-12.5 bg-[#0a4a3a] rounded-md'></div>

              {/* Right Cross Shape */}
              <div className='absolute bottom-24 right-0 w-16 h-56 bg-[#0a4a3a] rotate-45 rounded-xl'></div>
            </div>

            {/* Content */}
            <div className='relative z-10 max-w-3xl'>
              <h1 className='text-white text-5xl md:text-6xl leading-tight font-light md:mt-0 mt-5'>
                Dry smarter. 
                 <span className='text-[#ff5938]'><strong>Preserve better. </strong></span>
                
                Grow stronger.
              </h1>
            </div>

            {/* Button */}
            <div className='relative z-10 mt-10 md:mt-0'>
              <Button text="Get Ready" variant='orange' />
            </div>
          </div>
        </section>

        <div className='footer-top md:flex flex md:flex-row flex-col justify-between'>
          <div className='md:w-[70%] w-full'>
            <img src={Logo} alt='' className='w-12.5' />
          </div>
          <div className='md:w-[15%] w-full md:mt-0 mt-10'>
            <h6 className='text-[#ffffff] font-bold text-sm mb-5 '>
              Quick Links
            </h6>
            <ul className='text-white text-base'>
              <li className='mb-2 text-sm cursor-pointer  hover:text-[#ff5938] transition-all duration-300'>
                Home
              </li>
              <li className='mb-2 text-sm cursor-pointer  hover:text-[#ff5938] transition-all duration-300'>
                About
              </li>
              <li className='mb-2 text-sm cursor-pointer  hover:text-[#ff5938] transition-all duration-300'>
                Products
              </li>
              <li className='mb-2 text-sm cursor-pointer  hover:text-[#ff5938] transition-all duration-300'>
                Services
              </li>
              <li className='mb-2 text-sm cursor-pointer  hover:text-[#ff5938] transition-all duration-300'>
                Download Brochure
              </li>
              <li className='mb-2 text-sm cursor-pointer  hover:text-[#ff5938] transition-all duration-300'>
                Blog
              </li>
            </ul>
          </div>
          <div className='md:w-[15%] w-full md:mt-0 mt-10'>
            <h6 className='text-[#ffffff] font-bold text-sm mb-5 '>
              Our Products
            </h6>
            <ul className='text-white text-base'>
              <li className='mb-2 text-sm cursor-pointer  hover:text-[#ff5938] transition-all duration-300'>
                Cardamom Dryer
              </li>
              <li className='mb-2 text-sm cursor-pointer  hover:text-[#ff5938] transition-all duration-300'>
                Coffee Dryer
              </li>
              <li className='mb-2 text-sm cursor-pointer  hover:text-[#ff5938] transition-all duration-300'>
                Paddy Dryer
              </li>
              <li className='mb-2 text-sm cursor-pointer  hover:text-[#ff5938] transition-all duration-300'>
                Mobile Grain Dryer
              </li>
              <li className='mb-2 text-sm cursor-pointer  hover:text-[#ff5938] transition-all duration-300'>
                Sago & Starch Dryer
              </li>
              <li className='mb-2 text-sm cursor-pointer  hover:text-[#ff5938] transition-all duration-300'>
                Chilli & Spice Dryer
              </li>
              <li className='mb-2 text-sm cursor-pointer  hover:text-[#ff5938] transition-all duration-300'>
                Tray Dryer
              </li>
              <li className='mb-2 text-sm cursor-pointer  hover:text-[#ff5938] transition-all duration-300'>
                Custom Drying Systems
              </li>
            </ul>
          </div>
        </div>
        <div className='footer-bottom mt-20 border-t border-white/20 pt-6 flex flex-col md:flex-row items-center justify-between'>
          <p className='text-sm text-gray-300'>
            © 2026 Kardi Dryers. Developed by Prism.
          </p>

          <div className='bt-left md:mt-0 mt-3'>
            <ul className='flex items-center md:gap-6 gap-4 text-white text-sm font-medium'>
              <li className='cursor-pointer hover:text-green-400 transition-all duration-300'>
                Facebook
              </li>
              <li className='cursor-pointer hover:text-green-400 transition-all duration-300'>
                Instagram
              </li>
              <li className='cursor-pointer hover:text-green-400 transition-all duration-300'>
                Twitter
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
