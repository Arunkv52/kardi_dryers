import type { ReactNode } from 'react'

type Feature = {
  title: string
  description: string
  icon: ReactNode
  gradient: string
}

const iconClass = 'h-6 w-6 text-white'

const features: Feature[] = [
  {
    title: 'Fast Delivery',
    description:
      'We ship projects on time with a streamlined process that keeps you updated at every step.',
    gradient: 'from-indigo-500 to-blue-500',
    icon: (
      <svg className={iconClass} fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.8}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M13 10V3L4 14h7v7l9-11h-7z' />
      </svg>
    ),
  },
  {
    title: 'Trusted Quality',
    description:
      'Every detail is reviewed and tested so you get reliable results you can count on.',
    gradient: 'from-emerald-500 to-teal-500',
    icon: (
      <svg className={iconClass} fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.8}>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M9 12.75L11.25 15 15 9.75m6 2.25a9 9 0 11-18 0 9 9 0 0118 0z'
        />
      </svg>
    ),
  },
  {
    title: 'Expert Team',
    description:
      'Work with experienced professionals who bring creativity and technical depth to your goals.',
    gradient: 'from-fuchsia-500 to-pink-500',
    icon: (
      <svg className={iconClass} fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.8}>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M15 19.13a9.4 9.4 0 002.62.37 9.34 9.34 0 004.12-.95 4.13 4.13 0 00-7.53-2.49M15 19.13v-.01c0-.78-.12-1.53-.34-2.24M15 19.13v.1A12.3 12.3 0 018.62 21c-2.33 0-4.51-.64-6.37-1.77v-.1a6.38 6.38 0 0111.96-3.12M15 7.5a3.38 3.38 0 11-6.75 0 3.38 3.38 0 016.75 0zm6 3a2.63 2.63 0 11-5.25 0 2.63 2.63 0 015.25 0zm-13.5 0a2.63 2.63 0 11-5.25 0 2.63 2.63 0 015.25 0z'
        />
      </svg>
    ),
  },
  {
    title: '24/7 Support',
    description:
      'Questions or issues? Our support team is always available to help you move forward.',
    gradient: 'from-orange-500 to-amber-500',
    icon: (
      <svg className={iconClass} fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.8}>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z'
        />
      </svg>
    ),
  },
]

const Whychoosus = () => {
  return (
    <>
      {/* Why choose us */}
      <section className='why-choose relative overflow-hidden bg-slate-50 py-16 sm:py-20 lg:py-28'>
        {/* Decorative blurred blobs */}
        <div className='pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-indigo-300/30 blur-3xl' />
        <div className='pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-fuchsia-300/30 blur-3xl' />

        <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          {/* Heading */}
          <div className='mx-auto max-w-2xl text-center'>
            <span className='inline-block rounded-full bg-indigo-100 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-600'>
              Why choose us
            </span>
            <h2 className='mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl'>
              Built to help you{' '}
              <span className='bg-gradient-to-r from-indigo-600 to-fuchsia-600 bg-clip-text text-transparent'>
                grow faster
              </span>
            </h2>
            <p className='mt-4 text-base text-slate-600 sm:text-lg'>
              Four reasons businesses trust us to deliver results that last.
            </p>
          </div>

          {/* Cards */}
          <div className='mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4'>
            {features.map((item, index) => (
              <div
                key={item.title}
                className='group relative rounded-2xl border border-white/60 bg-white/70 p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/10'
              >
                {/* Gradient glow on hover */}
                <div
                  className={`absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br ${item.gradient} opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-20`}
                />

                {/* Number */}
                <span className='absolute right-5 top-4 text-4xl font-black text-slate-100 transition-colors group-hover:text-slate-200'>
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Icon */}
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${item.gradient} shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                >
                  {item.icon}
                </div>

                <h3 className='mt-5 text-lg font-semibold text-slate-900'>{item.title}</h3>
                <p className='mt-2 text-sm leading-relaxed text-slate-600'>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Whychoosus