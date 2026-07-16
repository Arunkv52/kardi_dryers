import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

// ── Content note ──────────────────────────────────────────────────────────
// This is dummy/placeholder content, as requested. Five of the eight items
// below are grounded in real milestones already used elsewhere on this site
// (the company history timeline) — those carry real Month/Year dates. The
// other three are invented filler to fill out the grid and are marked with
// "Sample — date TBD" instead of a real date so they're easy to spot before
// publishing. None of these link anywhere real yet (no article detail pages
// exist) — "Read Story" is wired to '#' with a comment marking where real
// routing would go.
// ─────────────────────────────────────────────────────────────────────────

type Category =
  | 'Partnership'
  | 'Recognition'
  | 'Expansion'
  | 'Company News'
  | 'Product Launch'
  | 'Event'

type Article = {
  id: string
  category: Category
  date: string
  title: string
  excerpt: string
  readTime: string
}

const FEATURED: Article = {
  id: 'pedrotti-jv',
  category: 'Partnership',
  date: 'March 2023',
  title: "Kardi Dryers Enters Joint Venture with Italy's Fratelli Pedrotti",
  excerpt:
    "Kardi Dryers Pvt Ltd has formalised a joint venture with Fratelli Pedrotti s.r.l. of Italy, combining six decades of Italian mobile grain dryer engineering with Kardi's manufacturing base in India. The partnership is registered as Kardi Pedrotti Dryers Pvt Ltd and is focused on mobile dryers for paddy, maize, and other agro commodities.",
  readTime: '3 min read'
}

const ARTICLES: Article[] = [
  {
    id: 'ap-dedication',
    category: 'Recognition',
    date: 'August 2016',
    title: 'Mobile Paddy Dryer Dedicated to Andhra Pradesh',
    excerpt:
      "Andhra Pradesh's Chief Minister, Thiru N. Chandrababu Naidu, formally dedicated Kardi's Mobile Paddy Dryer to farmers across the state — a milestone in the technology's adoption beyond Tamil Nadu and Kerala.",
    readTime: '2 min read'
  },
  {
    id: 'angrau-approval',
    category: 'Recognition',
    date: 'February 2014',
    title:
      'Mobile Paddy Dryer Cleared by Acharya N.G. Ranga Agricultural University',
    excerpt:
      'Independent testing by Acharya N.G. Ranga Agricultural University confirmed the performance of the Mobile Paddy Dryer, giving farmers and state agencies a university-backed reference ahead of wider deployment.',
    readTime: '2 min read'
  },
  {
    id: 'kerala-curing-house',
    category: 'Expansion',
    date: 'June 2018',
    title: 'Kardi Cardamom Curing House Opens in Kerala',
    excerpt:
      'Alongside its expanded manufacturing base in Kerala, Kardi Dryers opened the Kardi Cardamom Curing House — a community drying centre giving smallholder spice growers shared access to high-value crop drying equipment.',
    readTime: '2 min read'
  },
  {
    id: '4000-milestone',
    category: 'Company News',
    date: 'January 2025',
    title: 'Kardi Dryers Surpasses 4,000 Units Across Eight States',
    excerpt:
      'Kardi-built dryers now operate across eight Indian states and several countries abroad, serving 35 different agricultural commodities — from spices and grains to herbs and leafy crops.',
    readTime: '2 min read'
  },
  {
    id: 'thermic-fluid-sample',
    category: 'Product Launch',
    date: 'Sample — date TBD',
    title:
      'New Thermic Fluid Heater Line in Development for High-Capacity Facilities',
    excerpt:
      'An expanded thermic fluid heater range aimed at larger processing facilities that need steady, indirect heat across long production runs. Full specifications to follow closer to launch.',
    readTime: '2 min read'
  },
  {
    id: 'expo-sample',
    category: 'Event',
    date: 'Sample — date TBD',
    title: 'Kardi Pedrotti to Exhibit at Regional AgriTech Showcase',
    excerpt:
      "Representatives from Kardi Pedrotti will demonstrate mobile grain dryer technology and take questions from processors and farm cooperatives at this year's regional agricultural technology showcase.",
    readTime: '1 min read'
  },
  {
    id: 'service-network-sample',
    category: 'Expansion',
    date: 'Sample — date TBD',
    title: 'Service Network Expands Across South India',
    excerpt:
      'New regional service points across South India aim to shorten response times for maintenance and spare-parts requests during peak harvest season.',
    readTime: '1 min read'
  }
]

const CATEGORIES: Array<'All' | Category> = [
  'All',
  'Company News',
  'Product Launch',
  'Partnership',
  'Recognition',
  'Expansion',
  'Event'
]

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }
}

export default function NewsroomPage () {
  const [active, setActive] = useState<'All' | Category>('All')
  const [emailInput, setEmailInput] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const visible =
    active === 'All' ? ARTICLES : ARTICLES.filter(a => a.category === active)

  function handleSubscribe (e: React.FormEvent) {
    e.preventDefault()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput)) return
    // TODO: wire to a real mailing list provider (Mailchimp, etc.) — this is local-only for now.
    setSubscribed(true)
  }

  return (
    <>
    <Navbar />
      <main className='bg-[#083326] text-[#ffffff]'>
        {/* Heading */}
        <section className='px-6 pb-4 pt-40 lg:px-12'>
          <motion.div {...fadeUp} className='mx-auto max-w-6xl text-center'>
            <p className='mb-5 text-sm font-medium tracking-[0.25em] uppercase text-[#A6824F]'>
              Newsroom
            </p>
            <h1
              className='text-4xl leading-tight md:text-5xl'
              style={{ fontFamily: 'var(--font-serif, Georgia, serif)' }}
            >
              News &amp; Announcements
            </h1>
            <p className='mx-auto mt-5 max-w-xl leading-[1.8] text-[#e1e1e1]'>
              Milestones, partnerships, and updates from Kardi Dryers and Kardi
              Pedrotti, straight from our team.
            </p>
          </motion.div>
        </section>

        {/* Featured story */}
        <section className='px-6 pb-16 pt-12 lg:px-12'>
          <motion.div {...fadeUp} className='mx-auto max-w-6xl'>
            <a
              href='#'
              className='group grid gap-0 overflow-hidden border border-[#D8D2C2] bg-white/40 transition-colors duration-300 hover:border-[#A6824F] md:grid-cols-2'
            >
              <PlaceholderArt category={FEATURED.category} large />
              <div className='flex flex-col justify-center p-8 md:p-12'>
                <p className='mb-4 text-xs font-medium tracking-[0.2em] uppercase text-[#A6824F]'>
                  Featured · {FEATURED.category}
                </p>
                <h2
                  className='text-2xl leading-tight text-[#2B2B26] md:text-3xl'
                  style={{ fontFamily: 'var(--font-serif, Georgia, serif)' }}
                >
                  {FEATURED.title}
                </h2>
                <p className='mt-4 leading-[1.8] text-[#5B564B]'>
                  {FEATURED.excerpt}
                </p>
                <div className='mt-6 flex items-center gap-3 text-xs text-[#8C8678]'>
                  <span>{FEATURED.date}</span>
                  <span>·</span>
                  <span>{FEATURED.readTime}</span>
                </div>
                <span className='mt-6 inline-flex items-center gap-2 text-sm text-[#2B2B26] transition-colors duration-300 group-hover:text-[#A6824F]'>
                  Read Story
                  <ArrowIcon />
                </span>
              </div>
            </a>
          </motion.div>
        </section>

        {/* Filters */}
        <section className='px-6 lg:px-12'>
          <div className='mx-auto flex max-w-6xl flex-col gap-6 border-t border-[#D8D2C2] pt-10 sm:flex-row sm:items-center sm:justify-between'>
            <div className='flex flex-wrap gap-2'>
              {CATEGORIES.map(cat => {
                const isActive = active === cat
                return (
                  <button
                    key={cat}
                    type='button'
                    onClick={() => setActive(cat)}
                    className='relative border border-[#D8D2C2] px-4 py-2 text-xs uppercase tracking-[0.1em] transition-colors duration-300'
                  >
                    {isActive && (
                      <motion.span
                        layoutId='active-category-pill'
                        className='absolute inset-0 bg-[#2B2B26]'
                        transition={{
                          type: 'spring',
                          stiffness: 380,
                          damping: 32
                        }}
                      />
                    )}
                    <span
                      className={`relative z-10 ${
                        isActive ? 'text-white' : 'text-[#dedede]'
                      }`}
                    >
                      {cat}
                    </span>
                  </button>
                )
              })}
            </div>
            <p className='flex-shrink-0 text-xs uppercase tracking-[0.1em] text-[#8C8678]'>
              {visible.length} {visible.length === 1 ? 'story' : 'stories'}
            </p>
          </div>
        </section>

        {/* Grid */}
        <section className='px-6 py-12 lg:px-12'>
          <div className='mx-auto max-w-6xl'>
            <motion.div
              layout
              className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'
            >
              <AnimatePresence mode='popLayout'>
                {visible.map((article, i) => (
                  <motion.a
                    key={article.id}
                    href='#'
                    layout
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{
                      duration: 0.35,
                      delay: i * 0.04,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    className='group flex flex-col overflow-hidden border border-[#D8D2C2] bg-white/40 transition-all duration-300 hover:-translate-y-1 hover:border-[#A6824F]'
                  >
                    <PlaceholderArt category={article.category} />
                    <div className='flex flex-1 flex-col p-6'>
                      <p className='mb-3 text-xs font-medium tracking-[0.15em] uppercase text-[#A6824F]'>
                        {article.category}
                      </p>
                      <h3
                        className='text-lg leading-snug text-[#2B2B26]'
                        style={{
                          fontFamily: 'var(--font-serif, Georgia, serif)'
                        }}
                      >
                        {article.title}
                      </h3>
                      <p className='mt-3 flex-1 text-sm leading-[1.7] text-[#5B564B]'>
                        {article.excerpt}
                      </p>
                      <div className='mt-5 flex items-center justify-between border-t border-[#D8D2C2] pt-4'>
                        <span className='text-xs text-[#8C8678]'>
                          {article.date} · {article.readTime}
                        </span>
                        <span className='text-[#C9B98F] transition-colors duration-300 group-hover:text-[#A6824F]'>
                          <ArrowIcon />
                        </span>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* Media contact + updates */}
        <section className='bg-[#15140F] px-6 py-20 text-white lg:px-12'>
          <div className='mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:gap-20'>
            <motion.div {...fadeUp}>
              <p className='mb-5 text-sm font-medium tracking-[0.25em] uppercase text-[#A6824F]'>
                Media Enquiries
              </p>
              <h2
                className='text-3xl leading-tight'
                style={{ fontFamily: 'var(--font-serif, Georgia, serif)' }}
              >
                Reporting on Kardi Dryers?
              </h2>
              <p className='mt-4 max-w-sm leading-[1.8] text-white/60'>
                For interviews, factory visits, or press assets, reach our team
                directly.
              </p>
              <a
                href='mailto:info@kardidryers.com'
                className='mt-6 inline-block border-b border-[#A6824F] pb-1 text-[#A6824F] transition-opacity hover:opacity-70'
              >
                info@kardidryers.com
              </a>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
            >
              <p className='mb-5 text-sm font-medium tracking-[0.25em] uppercase text-[#A6824F]'>
                Stay Updated
              </p>
              <h2
                className='text-3xl leading-tight'
                style={{ fontFamily: 'var(--font-serif, Georgia, serif)' }}
              >
                Get news as it happens
              </h2>

              <AnimatePresence mode='wait'>
                {subscribed ? (
                  <motion.p
                    key='thanks'
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className='mt-6 flex items-center gap-2 text-sm text-[#53823c]'
                  >
                    <svg
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth={2}
                      className='h-4 w-4'
                    >
                      <path
                        d='M5 13l4 4L19 7'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                    You're on the list — thank you.
                  </motion.p>
                ) : (
                  <motion.form
                    key='form'
                    onSubmit={handleSubscribe}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className='mt-6 flex max-w-sm gap-3'
                  >
                    <input
                      type='email'
                      required
                      value={emailInput}
                      onChange={e => setEmailInput(e.target.value)}
                      placeholder='you@company.com'
                      className='w-full border border-white/20 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#A6824F] focus:outline-none'
                    />
                    <button
                      type='submit'
                      className='flex-shrink-0 border border-[#A6824F] px-5 py-3 text-sm text-[#A6824F] transition-colors duration-300 hover:bg-[#A6824F] hover:text-[#15140F]'
                    >
                      Subscribe
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  )
}

function PlaceholderArt ({
  category,
  large = false
}: {
  category: Category
  large?: boolean
}) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#EDE9DD] to-[#E0D9C4] ${
        large ? 'aspect-[4/3] md:aspect-auto md:h-full' : 'aspect-[16/10]'
      }`}
    >
      <div className='absolute inset-0 opacity-[0.07]' style={DIAGONAL_LINES} />
      <span className={`relative text-[#A6824F] ${large ? 'scale-150' : ''}`}>
        <CategoryIcon category={category} />
      </span>
    </div>
  )
}

const DIAGONAL_LINES = {
  backgroundImage:
    'repeating-linear-gradient(135deg, #2B2B26 0, #2B2B26 1px, transparent 1px, transparent 14px)'
}

function CategoryIcon ({ category }: { category: Category }) {
  const common = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.3
  } as const

  switch (category) {
    case 'Partnership':
      return (
        <svg viewBox='0 0 24 24' {...common} className='h-8 w-8'>
          <circle cx='9' cy='12' r='6' />
          <circle cx='15' cy='12' r='6' />
        </svg>
      )
    case 'Recognition':
      return (
        <svg viewBox='0 0 24 24' {...common} className='h-8 w-8'>
          <circle cx='12' cy='8' r='5' />
          <path
            d='M9 12.5L7 21l5-3 5 3-2-8.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      )
    case 'Expansion':
      return (
        <svg viewBox='0 0 24 24' {...common} className='h-8 w-8'>
          <path
            d='M4 9V4h5M4 4l6 6M20 15v5h-5M20 20l-6-6'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      )
    case 'Company News':
      return (
        <svg viewBox='0 0 24 24' {...common} className='h-8 w-8'>
          <rect x='3' y='5' width='18' height='14' rx='1' />
          <path d='M3 9h18M8 13h3M8 16h7' strokeLinecap='round' />
        </svg>
      )
    case 'Product Launch':
      return (
        <svg viewBox='0 0 24 24' {...common} className='h-8 w-8'>
          <path
            d='M12 2l1.6 4.8L18 8l-4.4 1.2L12 14l-1.6-4.8L6 8l4.4-1.2L12 2z'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15z'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      )
    case 'Event':
      return (
        <svg viewBox='0 0 24 24' {...common} className='h-8 w-8'>
          <rect x='3' y='5' width='18' height='16' rx='1' />
          <path d='M3 10h18M8 3v4M16 3v4' strokeLinecap='round' />
        </svg>
      )
  }
}

function ArrowIcon () {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth={1.5}
      className='h-4 w-4'
    >
      <path
        d='M5 12h14M13 6l6 6-6 6'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
