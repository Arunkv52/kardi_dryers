import { useState } from 'react'
import { Link } from 'react-router'
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
} from 'lucide-react'

import Logo from '../assets/logo/logo.png'

type MenuItem = {
  name: string
  link?: string
  submenu?: MenuItem[]
  children?: MenuItem[]
}

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false)
  const [mobileOpen, setMobileOpen] = useState<string | null>(null)

  const menuItems: MenuItem[] = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'About',
      link: '/about',
    },
    {
      name: 'Products',
      link: '/products',
      submenu: [
        {
          name: 'Grain Dryers',
          children: [
            {
              name: 'Basic 15',
              link: '/basic15',
            },
            {
              name: 'Basic 25',
              link: '/grain/basic-25',
            },
            {
              name: 'Basic 35',
              link: '/grain/basic-35',
            },
             {
              name: 'Other Models',
              link: '/',
            },
          ],
        },
        {
          name: 'Spices Dryers',
          children: [
            {
              name: 'Hot Air Dryers',
              link: '/spices/hot-air',
            },
            {
              name: 'Dehydrators',
              link: '/spices/Dehydrator',
            },
          ],
        },
        {
          name: 'Coffee Dryers',
          children: [
            {
              name: 'Hot Air Dryers',
              link: '/coffee/hot-air',
            },
            {
              name: 'Dehydrators',
              link: '/coffee/Dehydrator',
            },
          ],
        },
        {
          name: 'Sago Dryers',
          children: [
            {
              name: 'Sago Pearl Dryers (Sabuthana)',
              link: '/',
            },
             {
              name: 'Starch / Flash Dryers (Custom Built)',
              link: '/',
            }
          ]
        },
        {
          name: 'Vegetable / Herbs / Leaves Dryers',
          link: '/products/vegetable',
        },
        {
          name: 'Chilli Dryers',
          children: [
            {
              name: 'Custom Built',
              link: '/products/groundnut',
            }
          ]
        },
        {
          name: 'Groundnut Dryers',
          children: [
            {
              name: 'Custom Built',
              link: '/products/groundnut',
            }
          ]
        },
       
      ],
    },
    {
      name: 'Services',
      link: '/services',
    },
    {
      name: 'Videos',
      link: '/videos',
    },
    {
      name: 'Newsroom',
      link: '/newsroom',
    },
  ]

  return (
    <nav className="absolute top-0 left-0 z-50 w-full">
      <div className="container mx-auto flex items-center justify-between px-5 py-4">
        {/* Logo */}
        <Link to="/">
          <img
            src={Logo}
            alt="Kardi Dryers"
            className="w-[65px]"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {menuItems.map(item => (
            <div
              key={item.name}
              className="relative group"
            >
              <Link
                to={item.link || '#'}
                className="flex items-center gap-1 uppercase text-sm font-medium text-white hover:text-[#ff5938] transition"
              >
                {item.name}

                {item.submenu && (
                  <ChevronDown size={16} />
                )}
              </Link>

              {/* First Dropdown */}
              {item.submenu && (
                <div className="absolute left-0 top-full invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 bg-white rounded-xl shadow-2xl min-w-[280px] py-3 mt-3">
                  {item.submenu.map(subItem => (
                    <div
                      key={subItem.name}
                      className="relative group/sub"
                    >
                      {/* Category */}
                      <div className="flex items-center justify-between px-5 py-3 hover:bg-orange-50 cursor-pointer transition">
                        <span className="text-gray-800">
                          {subItem.name}
                        </span>

                        {subItem.children && (
                          <ChevronRight size={16} />
                        )}
                      </div>

                      {/* Child Menu */}
                      {subItem.children && (
                        <div className="absolute left-full top-0 invisible opacity-0 group-hover/sub:visible group-hover/sub:opacity-100 transition-all duration-300 bg-white rounded-xl shadow-2xl min-w-[240px] py-3">
                          {subItem.children.map(child => (
                            <Link
                              key={child.name}
                              to={child.link || '/'}
                              className="block px-5 py-3 hover:bg-orange-50 text-gray-700"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}

                      {!subItem.children && (
                        <Link
                          to={subItem.link || '/'}
                          className="absolute inset-0"
                        />
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <button className="hidden lg:block bg-[#52813b] px-6 py-3 rounded-lg text-white font-medium hover:bg-[#e54d2c] transition">
          Get The Expert
        </button>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="lg:hidden text-white"
        >
          {mobileMenu ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="lg:hidden bg-[#031c14] text-white px-5 py-6">
          {menuItems.map(item => (
            <div key={item.name}>
              <div
                className="flex items-center justify-between py-4 border-b border-white/10"
                onClick={() =>
                  setMobileOpen(
                    mobileOpen === item.name
                      ? null
                      : item.name
                  )
                }
              >
                <Link
                  to={item.link || '#'}
                  className="font-medium"
                >
                  {item.name}
                </Link>

                {item.submenu && (
                  <ChevronDown size={18} />
                )}
              </div>

              {mobileOpen === item.name &&
                item.submenu && (
                  <div className="pl-5 py-3">
                    {item.submenu.map(subItem => (
                      <div
                        key={subItem.name}
                        className="mb-4"
                      >
                        <p className="font-medium text-orange-400">
                          {subItem.name}
                        </p>

                        {subItem.children && (
                          <div className="pl-4 mt-2 space-y-2">
                            {subItem.children.map(
                              child => (
                                <Link
                                  key={child.name}
                                  to={child.link || '/'}
                                  className="block text-white/70"
                                >
                                  {child.name}
                                </Link>
                              )
                            )}
                          </div>
                        )}

                        {!subItem.children && (
                          <Link
                            to={subItem.link || '/'}
                            className="block mt-2 text-white/70"
                          >
                            View Product
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                )}
            </div>
          ))}

          <button className="w-full mt-5 bg-[#ff5938] py-3 rounded-lg font-medium">
            Let's Talk
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar