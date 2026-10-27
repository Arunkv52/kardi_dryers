import { useEffect, useState, type ReactNode } from 'react'

import { createPortal } from 'react-dom'

import { Link, useLocation } from 'react-router'

import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  ArrowUpRight,
  Phone
} from 'lucide-react'

import Logo from '../assets/logo/logo.png'

type MenuItem = {
  name: string

  link?: string

  submenu?: MenuItem[]

  children?: MenuItem[]
}

const menuItems: MenuItem[] = [
  { name: 'Home', link: '/' },

  { name: 'About', link: '/about' },

  {
    name: 'Products',

    link: '/products',

    submenu: [
      {
        name: 'Mobile Paddy Dryers',

        link: '/mobilepaddydryers',

        children: [
          { name: 'Basic 15', link: '/basic15' },

          { name: 'Basic 25', link: '/basic25' },

          { name: 'Basic 35', link: '/basic35' },

          { name: ' More Models (Pedrotti, Italy)', link: 'https://pedrottisrl.it/' }
        ]
      },

      {
        name: 'Spices',

        children: [{ name: 'Hot Air Dryers', link: '/spices' }]
      },

      {
        name: 'Coffee',

        children: [{ name: 'Hot Air Dryers', link: '/cofeedryers' }]
      },

      {
        name: 'Sago and Starch',

        children: [
          { name: 'Sago Pearl Dryers (Sabudana)', link: '/sagopearl' },

          { name: 'Starch and Flash Dryers (Custom-Built Dryers)', link: '/custombuilt' }
        ]
      },

      {
        name: 'Vegetables, Herbs and Leaves',

        link: '/comesoon'
      },

      {
        name: 'Dehydrators',

        children: [{ name: 'Custom-Built Dryers', link: '/custombuilt' }]
      },

      {
        name: 'Chilli',

        children: [{ name: 'Custom-Built Dryers', link: '/custombuilt' }]
      },

      {
        name: 'Groundnut',

        children: [{ name: 'Custom-Built Dryers', link: '/custombuilt' }]
      }
    ]
  },

  { name: 'Services', link: '/services' },

  { name: 'Videos', link: '/videos' },

  { name: 'News', link: '/blogsoon' }
]

const isExternal = (url?: string) => !!url && /^https?:\/\//i.test(url)

/** Renders a router Link, or a plain anchor for external URLs */

const SmartLink = ({
  to,

  className,

  children,

  onClick
}: {
  to?: string

  className?: string

  children: ReactNode

  onClick?: () => void
}) => {
  if (isExternal(to)) {
    return (
      <a
        href={to}
        target='_blank'
        rel='noopener noreferrer'
        className={className}
        onClick={onClick}
      >
        {children}
      </a>
    )
  }

  return (
    <Link to={to || '/'} className={className} onClick={onClick}>
      {children}
    </Link>
  )
}

const Navbar = () => {
  const { pathname } = useLocation()

  const [mobileMenu, setMobileMenu] = useState(false)

  const [mobileOpen, setMobileOpen] = useState<string | null>(null)

  const [mobileSub, setMobileSub] = useState<string | null>(null)

  const [scrolled, setScrolled] = useState(false)

  const [progress, setProgress] = useState(0)

  const [mounted, setMounted] = useState(false)

  /* Portal target only exists in the browser (safe for SSR) */

  useEffect(() => setMounted(true), [])

  /* Sticky behaviour: track scroll position + page progress */

  useEffect(() => {
    let ticking = false

    const onScroll = () => {
      if (ticking) return

      ticking = true

      requestAnimationFrame(() => {
        const y = window.scrollY

        const max = document.documentElement.scrollHeight - window.innerHeight

        setScrolled(y > 20)

        setProgress(max > 0 ? Math.min(100, (y / max) * 100) : 0)

        ticking = false
      })
    }

    onScroll()

    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Close mobile menu on route change */

  useEffect(() => {
    setMobileMenu(false)

    setMobileOpen(null)

    setMobileSub(null)
  }, [pathname])

  /* Lock body scroll while the mobile drawer is open */

  useEffect(() => {
    document.body.style.overflow = mobileMenu ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenu])

  const isActive = (item: MenuItem) =>
    item.link === '/'
      ? pathname === '/'
      : !!item.link && pathname.startsWith(item.link)

  if (!mounted) return null

  /* Rendered straight into <body> so no parent can trap it in a lower stacking context */

  return createPortal(
    <>
      {/* z-[9999] keeps the header above sliders, Elementor-like overlays, modals etc. */}

      <header className='fixed inset-x-0 top-0 z-9999'>
        {/* Scroll progress line */}

        <div
          className='absolute inset-x-0 bottom-0 h-0.75 bg-transparent'
          aria-hidden='true'
        >
          <div
            className='h-full bg-[#ff5938] transition-[width] duration-100 ease-out'
            style={{ width: `${progress}%` }}
          />
        </div>

        <nav
          className={`transition-all duration-500 ${
            scrolled
              ? 'bg-[#031c14]/90 backdrop-blur-xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]'
              : 'bg-linear-to-b from-black/60 to-transparent'
          }`}
        >
          <div
            className={`container mx-auto flex items-center justify-between gap-4 px-5 transition-all duration-500 ${
              scrolled ? 'py-2' : 'py-4'
            }`}
          >
            {/* Logo */}

            <Link to='/' className='shrink-0' aria-label='Kardi Dryers home'>
              <img
                src={Logo}
                alt='Kardi Dryers'
                className={`cursor-pointer transition-all duration-500 ${
                  scrolled ? 'w-12' : 'w-16.25'
                }`}
              />
            </Link>

            {/* Desktop menu */}

            <ul className='hidden lg:flex items-center gap-1 rounded-full border border-white/15 bg-white/10 px-2 py-1.5 backdrop-blur-md'>
              {menuItems.map(item => {
                const active = isActive(item)

                return (
                  <li key={item.name} className='group relative'>
                    <Link
                      to={item.link || '#'}
                      className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium tracking-wide transition-colors ${
                        active
                          ? 'bg-[#52813b] text-white'
                          : 'text-white/85 hover:bg-white/15 hover:text-white'
                      }`}
                    >
                      {item.name}

                      {item.submenu && (
                        <ChevronDown
                          size={15}
                          className='transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180'
                        />
                      )}
                    </Link>

                    {/* Dropdown (pt-4 bridges the hover gap so it never closes on the way down) */}

                    {item.submenu && (
                      <div className='invisible absolute left-0 top-full pt-4 opacity-0 translate-y-2 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100'>
                        <div className='min-w-70 rounded-xl bg-white py-3 shadow-2xl'>
                          {item.submenu.map(sub => (
                            <div key={sub.name} className='group/sub relative'>
                              {/* Category row */}

                              {sub.children ? (
                                <div className='flex items-center justify-between px-5 py-3 text-gray-800 transition hover:bg-orange-50'>
                                  {sub.link ? (
                                    <SmartLink to={sub.link} className='flex-1'>
                                      {sub.name}
                                    </SmartLink>
                                  ) : (
                                    <span>{sub.name}</span>
                                  )}

                                  <ChevronRight size={16} />
                                </div>
                              ) : (
                                <SmartLink
                                  to={sub.link}
                                  className='flex items-center justify-between px-5 py-3 text-gray-800 transition hover:bg-orange-50'
                                >
                                  <span>{sub.name}</span>
                                </SmartLink>
                              )}

                              {/* Side flyout */}

                              {sub.children && (
                                <div className='invisible absolute left-full top-0 pl-2 opacity-0 transition-all duration-300 group-hover/sub:visible group-hover/sub:opacity-100'>
                                  <div className='min-w-60 rounded-xl bg-white py-3 shadow-2xl'>
                                    {sub.children.map(child => (
                                      <SmartLink
                                        key={child.name}
                                        to={child.link}
                                        className='flex items-center justify-between px-5 py-3 text-gray-700 transition hover:bg-orange-50'
                                      >
                                        <span>{child.name}</span>

                                        {isExternal(child.link) && (
                                          <ArrowUpRight size={14} />
                                        )}
                                      </SmartLink>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </li>
                )
              })}
            </ul>

            {/* CTA (Link styled directly – no <button> wrapping <a>) */}

            <Link
              to='/contact'
              className='hidden lg:inline-flex items-center gap-2 rounded-full bg-[#ff5938] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#ff5938]/30 transition hover:bg-[#e54d2c] hover:-translate-y-0.5'
            >
              <Phone size={16} />
              Get a Quote
            </Link>

            {/* Mobile toggle */}

            <button
              onClick={() => setMobileMenu(v => !v)}
              aria-label={mobileMenu ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenu}
              className='lg:hidden rounded-full bg-[#52813b] p-3 text-white shadow-lg transition active:scale-95'
            >
              {mobileMenu ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}

      <div
        className={`lg:hidden fixed inset-0 z-9998 bg-[#031c14] pt-24 transition-all duration-500 ${
          mobileMenu
            ? 'visible opacity-100 translate-y-0'
            : 'invisible opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className='h-full overflow-y-auto px-5 pb-10'>
          {menuItems.map(item => {
            const open = mobileOpen === item.name

            return (
              <div key={item.name} className='border-b border-white/10'>
                <div className='flex items-center justify-between'>
                  <Link
                    to={item.link || '#'}
                    className={`flex-1 py-4 text-lg font-medium ${
                      isActive(item) ? 'text-[#ff5938]' : 'text-white'
                    }`}
                  >
                    {item.name}
                  </Link>

                  {item.submenu && (
                    <button
                      onClick={() => setMobileOpen(open ? null : item.name)}
                      aria-label={`Toggle ${item.name} menu`}
                      aria-expanded={open}
                      className='p-4 text-white'
                    >
                      <ChevronDown
                        size={20}
                        className={`transition-transform duration-300 ${
                          open ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  )}
                </div>

                {item.submenu && (
                  <div
                    className={`grid transition-all duration-300 ${
                      open ? 'grid-rows-[1fr] pb-3' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className='overflow-hidden'>
                      {item.submenu.map(sub => {
                        const subOpen = mobileSub === sub.name

                        return (
                          <div
                            key={sub.name}
                            className='ml-2 border-l border-[#52813b]/60 pl-4'
                          >
                            {sub.children ? (
                              <>
                                <div className='flex items-center justify-between py-3 font-medium text-[#ff8a70]'>
                                  {sub.link ? (
                                    <SmartLink to={sub.link} className='flex-1'>
                                      {sub.name}
                                    </SmartLink>
                                  ) : (
                                    <span className='flex-1'>{sub.name}</span>
                                  )}

                                  <button
                                    type='button'
                                    onClick={() =>
                                      setMobileSub(subOpen ? null : sub.name)
                                    }
                                    aria-label={`Toggle ${sub.name} submenu`}
                                    aria-expanded={subOpen}
                                    className='p-2'
                                  >
                                    <ChevronDown
                                      size={16}
                                      className={`transition-transform duration-300 ${
                                        subOpen ? 'rotate-180' : ''
                                      }`}
                                    />
                                  </button>
                                </div>

                                <div
                                  className={`grid transition-all duration-300 ${
                                    subOpen
                                      ? 'grid-rows-[1fr] pb-2'
                                      : 'grid-rows-[0fr]'
                                  }`}
                                >
                                  <div className='overflow-hidden space-y-1'>
                                    {sub.children.map(child => (
                                      <SmartLink
                                        key={child.name}
                                        to={child.link}
                                        className='block py-2 pl-2 text-white/70 hover:text-white'
                                      >
                                        {child.name}
                                      </SmartLink>
                                    ))}
                                  </div>
                                </div>
                              </>
                            ) : (
                              <SmartLink
                                to={sub.link}
                                className='block py-3 font-medium text-[#ff8a70]'
                              >
                                {sub.name}
                              </SmartLink>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>
            )
          })}

          <Link
            to='/contact'
            className='mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-[#ff5938] py-4 font-semibold text-white'
          >
            <Phone size={18} />
            Get a Quote
          </Link>
        </div>
      </div>
    </>,

    document.body
  )
}

export default Navbar
