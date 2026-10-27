import { Link } from 'react-router'
import Logo from '../assets/logo/logo.png'
import Button from './myui/Button'
import { RiFacebookFill } from 'react-icons/ri'
import { BsInstagram } from 'react-icons/bs'
import { FaXTwitter } from 'react-icons/fa6'
import { AiFillYoutube } from 'react-icons/ai'

const Footer = () => {
  const FooterItem = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    {
      name: 'Products',
      link: '/products'
    },
    { name: 'Services', link: '/services' },
    { name: 'Videos', link: '/videos' },
    { name: 'Blog', link: '/blogsoon' },
    { name: 'Contact', link: '/contact' }
  ]

  const ProductItem = [
    { name: 'Cardamom Dryers', link: '/cofeedryers' },
    { name: 'Coffee Dryers', link: '/cofeedryers' },
    { name: 'Paddy Dryers', link: '/' },

    {
      name: 'Mobile Grain Dryers',
      link: '/mobilepaddydryers'
    },
    { name: 'Sago and Starch Dryers', link: '/sagopearl' },
    { name: ' Chilli and Spice Dryers ', link: '/spices' },
    { name: 'Tray Dryers', link: '/comesoon' },
    { name: 'Custom Drying Systems', link: '/custombuilt' }
  ]

  return (
    <>
      <footer className=' md:px-10 px-5 md:py-2 py-20'>
        <section className='px-0 py-10 '>
          <div className='relative overflow-hidden rounded-[40px] bg-[#135846] px-10 md:px-15 py-10 flex flex-col md:flex-row items-center justify-between'>
            {/* Background Decorative Shapes */}
            <div className='absolute inset-0 overflow-hidden'>
              {/* Top Right Orange Shape */}
              <div className='absolute top-0 right-10 w-16 h-40 bg-[#ff5938] rotate-90 rounded-xl'></div>

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
              <h1 className='text-white text-4xl md:text-4xl leading-tight font-light md:mt-0 mt-5'>
                Dry smarter.
                <span className='text-[#ff5938]'>
                  <strong>Preserve better. </strong>
                </span>
                Protect quality. Grow with confidence
              </h1>
            </div>

            {/* Button */}
            <div className='relative z-10 mt-10 md:mt-0'>
              <Link to='/contact'>
                <Button text='Talk to an Engineer' variant='orange' />
              </Link>
            </div>
          </div>
        </section>

        <div className='footer-top md:grid grid md:grid-cols-4 grid-cols-1'>
          <div className='w-full'>
            <img src={Logo} alt='' className='w-12.5' />
            <h1 className='text-white py-2 font-semibold'>
              Kardi Dryers Pvt. Ltd.
            </h1>
          </div>
          <div className=' w-full md:mt-0 mt-10'>
            <h6 className='text-[#ffffff] font-bold text-sm mb-5 '>
              Quick Links
            </h6>

            {FooterItem.map(item => (
              <>
                <ul className='text-white text-base'>
                  <li key={item.name} className='mb-0'>
                    <Link
                      to={item.link}
                      className='cursor-pointer text-sm transition-all duration-300 hover:text-[#ff5938]'
                    >
                      {item.name}
                    </Link>
                  </li>
                </ul>
              </>
            ))}
          </div>
          <div className=' w-full md:mt-0 mt-10'>
            <h6 className='text-[#ffffff] font-bold text-sm mb-5 '>
              Our Products
            </h6>
            {ProductItem.map(item => (
              <>
                <ul className='text-white text-base'>
                  <li key={item.name} className='mb-0'>
                    <Link
                      to={item.link}
                      className='cursor-pointer text-sm transition-all duration-300 hover:text-[#ff5938]'
                    >
                      {item.name}
                    </Link>
                  </li>
                </ul>
              </>
            ))}
          </div>
          <div className=' w-full md:mt-0 mt-10'>
            <h6 className='text-[#ffffff] font-bold text-sm mb-5 '>Contact</h6>
            <ul className='text-white text-base'>
              <li className='mb-2 text-sm text-white/80'>Registered Office</li>
              <li className='mb-2 text-sm cursor-pointer  hover:text-[#ff5938] transition-all duration-300'>
                 284, Avvai Shanmugam Salai, Gopalapuram, <br /> Chennai 600 086
              </li>
            </ul>
            <ul className='text-white text-base'>
              <li className='mb-2 text-sm text-white/80'>Admin Office</li>
              <li className='mb-2 text-sm cursor-pointer  hover:text-[#ff5938] transition-all duration-300'>
                Survey No. 203/2 (Old No. 86), New No. 69, 2nd Extension,
                Nageswara Rao Road, Athipet, <br /> Chennai – 600 058
              </li>
            </ul>

            <ul className='text-white text-base md:mt-5'>
              <li className='mb-2 text-sm text-white/80'>Call us</li>
              <li className='mb-2 text-sm cursor-pointer  hover:text-[#ff5938] transition-all duration-300'>
                Phone : +91 97916 64050
              </li>
              <li className='mb-2 text-sm cursor-pointer  hover:text-[#ff5938] transition-all duration-300'>
                Phone : +91 94449 25948
              </li>
              <li className='mb-2 text-sm cursor-pointer  hover:text-[#ff5938] transition-all duration-300'>
                Email: sales@kardidryers.com & info@kardidryers.com
              </li>
            </ul>
          </div>
        </div>
        <div className='footer-bottom mt-10 border-t border-white/20 pt-6 flex flex-col md:flex-row items-center justify-between'>
          <p className='text-sm text-gray-300'>
             © 2026 Kardi Dryers Pvt. Ltd. All rights reserved. Website by <a href="www.prismadverto.com"> Prism Adverto Pvt Ltd </a>
          </p>

          <div className='bt-left md:mt-0 mt-3'>
            <ul className='flex items-center md:gap-6 gap-4 text-white text-sm font-medium'>
              <li className='cursor-pointer hover:text-green-400 transition-all duration-300'>
                <RiFacebookFill /> Facebook
              </li>
              <li className='cursor-pointer hover:text-green-400 transition-all duration-300'>
                <a href='https://www.instagram.com/kardipedrottidryers/'>
                  <BsInstagram /> Instagram
                </a>
              </li>
              <li className='cursor-pointer hover:text-green-400 transition-all duration-300'>
                <a href='https://x.com/kdryers'>
                  {' '}
                  <FaXTwitter /> X{' '}
                </a>
              </li>
              <li className='cursor-pointer hover:text-green-400 transition-all duration-300'>
                <a href='https://youtu.be/N9-Nq5g_-uo?si=q83wvsdYXxZGgBRv'>
                  {' '}
                  <AiFillYoutube /> Youtube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
