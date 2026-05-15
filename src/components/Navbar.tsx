import { Link } from 'react-router'
import Logo from '../assets/logo/logo.png'
import { useState } from 'react'
import { Logs } from 'lucide-react';
import { X } from 'lucide-react';



const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(null)
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
          name: 'Products 1',
          link: '/products1'
        },
        {
          name: 'Products 2',
          link: '/products2'
        }
      ]
    },
    {
      name: 'Services',
      link: '/services'
    },
    {
      name: 'Download Brochure',
      link: '/downloadbrochure'
    },
    {
      name: 'Blog',
      link: '/blog'
    }
  ]

  return (
    <>

      <nav className=''>

        <div className='flex justify-between items-center px-5 text-white'>

          {/* Logo */}
          <div>
            <img
              src={Logo}
              alt=''
              className='md:w-[40px] w-[60px]'
            />
          </div>

          {/* Desktop Menu */}
          <div className='hidden lg:flex items-center gap-10 '>

            {Menu.map(item => (

              <div
                key={item.name}
                className='relative'
              >

                <div
                  onClick={() =>
                    setOpenMenu( openMenu === item.name ? null : item.name )
                  }
                  className='cursor-pointer hover:border-b hover:border-b-[#257341]'
                >

                  <Link to={item.link}>
                    {item.name}
                  </Link>

                </div>

                {openMenu === item.name &&
                  item.submenu && (

                  <div className='absolute top-8 left-0 bg-[#F28C28] shadow-lg p-2  flex flex-col gap-3 min-w-[130px]'>

                    {item.submenu.map(subItem => (

                      <Link
                        key={subItem.name}
                        to={subItem.link}
                        className='hover:text-black'
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
          <button className='hidden lg:block bg-[#ff5938] text-white px-8 py-2 cursor-pointer'>
            Lets Talk
          </button>

          {/* Mobile Menu Button */}
          <div
            className='lg:hidden cursor-pointer bg-[#031c14] p-3 rounded-sm shadow-2xl'
            onClick={() =>
              setmobilemenu(!mobilemenu)
            }
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
                    setOpenMenu(openMenu === item.name ? null: item.name
                    )
                  }
                >

                  <Link to={item.link}>
                    {item.name}
                  </Link>

                </div>

                {openMenu === item.name &&
                  item.submenu && (

                  <div className='flex flex-col gap-3 pl-5 pt-3'>

                    {item.submenu.map(subItem => (

                      <Link
                        key={subItem.name}
                        to={subItem.link}
                      >
                        {subItem.name}
                      </Link>

                    ))}

                  </div>

                )}

              </div>

            ))}

            <button className='bg-[#ff5938] text-white py-3'>
              Lets Talk
            </button>

          </div>

        )}

      </nav>

    </>
  )
}

export default Navbar