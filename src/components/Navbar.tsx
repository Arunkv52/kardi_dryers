import { Link } from 'react-router'
import Logo from '../assets/logo/logo.png'
import { useState } from 'react'
import { Logs } from 'lucide-react'
import { X } from 'lucide-react'

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobilemenu, setmobilemenu] = useState(false)

  const Menu = [
    {
      name: 'Home',
      link: '/'
    },
    {
      name: 'About',
      link: '/about'
    },
    {
      name: 'Products',
      link: '/',
      submenu: [
        {
          name: 'Coffee Dryer',
          link: '/products1'
        },
        {
          name: 'Paddy Dryer',
          link: '/products2'
        },
        {
          name: 'Mobile Dryer',
          link: '/products2'
        },
        {
          name: 'Sago Dryer',
          link: '/products2'
        }
      ]
    },
    {
      name: 'Services',
      link: '/services'
    },
    {
      name: 'Brochure',
      link: '/downloadbrochure'
    },
    {
      name: 'Newsroom',
      link: '/blog'
    }
  ]

  return (
    <>
      <nav className=''>
        <div className='flex justify-between items-center px-5 pt-2 text-white'>
          {/* Logo */}
          <div>
            <img src={Logo} alt='' className='md:w-[60px] w-[60px]' />
          </div>

          {/* Desktop Menu */}
          <div className='hidden lg:flex items-center gap-2 uppercase'>
            {Menu.map(item => (
              <div
                key={item.name}
                className='relative group'
                onMouseEnter={() => setOpenMenu(item.name)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                {/* Menu Item */}
                <div className='cursor-pointer relative overflow-hidden py-2 px-3 rounded-lg transition-all duration-300 hover:bg-[#ff5938]/10'>
                  <Link
                    to={item.link}
                    className='transition-all duration-300 group-hover:text-[#ff5938]'
                  >
                    {item.name}
                  </Link>

                  {/* Animated Underline */}
                  <span className='absolute left-0 bottom-0 h-[2px] w-0 bg-[#ff5938] transition-all duration-500 group-hover:w-full'></span>
                </div>

                {/* Dropdown */}
                {openMenu === item.name && item.submenu && (
                  <div className='absolute top-12 left-0 bg-[#F28C28] shadow-2xl rounded-xl p-3 flex flex-col gap-2 min-w-[200px] animate-dropdown origin-top'>
                    {item.submenu.map(subItem => (
                      <Link
                        key={subItem.name}
                        to={subItem.link}
                        className='px-3 py-2 rounded-lg hover:bg-white/20 hover:text-black transition-all duration-300 hover:translate-x-2'
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* Desktop Button */}
          <button className='hidden lg:block bg-[#ff5938] text-white px-8 py-2 cursor-pointer rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_30px_rgba(255,89,56,0.4)] hover:bg-[#ff4722] active:scale-95'>
            Get The Expert
          </button>

          {/* Mobile Menu Button */}
          <div
            className='lg:hidden cursor-pointer bg-[#031c14] p-3 rounded-sm shadow-2xl'
            onClick={() => setmobilemenu(!mobilemenu)}
          >
            {mobilemenu ? <X /> : <Logs />}
          </div>
        </div>

        {/* Mobile Menu */}
        {mobilemenu && (
          <div className='lg:hidden px-5 pb-5 flex flex-col gap-5 bg-black/70 pt-5 text-white text-lg'>
            {Menu.map(item => (
              <div key={item.name}>
                <div
                  className='cursor-pointer'
                  onClick={() =>
                    setOpenMenu(openMenu === item.name ? null : item.name)
                  }
                >
                  <Link to={item.link}>{item.name}</Link>
                </div>

                {openMenu === item.name && item.submenu && (
                  <div className='flex flex-col gap-3 pl-5 pt-3'>
                    {item.submenu.map(subItem => (
                      <Link key={subItem.name} to={subItem.link}>
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <button className='bg-[#ff5938] text-white py-3'>Lets Talk</button>
          </div>
        )}
      </nav>
    </>
  )
}

export default Navbar
