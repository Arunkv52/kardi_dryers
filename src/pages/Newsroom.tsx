import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import KardiBackgroundGray from '../components/KardiBackground'


type Category =
  | 'Field Notes'
  | 'Product Deep Dives'
  | 'Farmer Stories'


type Article = {
  id: string
  category: Category
  date: string
  title: string
  excerpt: string
  readTime: string
}



const ARTICLES: Article[] = [
  {
    id: 'ap-dedication',
    category: 'Field Notes',
    date: 'August 2016',
    title: 'Mobile Paddy Dryer Dedicated to Andhra Pradesh',
    excerpt:
      "Andhra Pradesh's Chief Minister, Thiru N. Chandrababu Naidu, formally dedicated Kardi's Mobile Paddy Dryer to farmers across the state — a milestone in the technology's adoption beyond Tamil Nadu and Kerala.",
    readTime: '2 min read'
  },
  {
    id: 'angrau-approval',
    category: 'Product Deep Dives',
    date: 'February 2014',
    title:
      'Mobile Paddy Dryer Cleared by Acharya N.G. Ranga Agricultural University',
    excerpt:
      'Independent testing by Acharya N.G. Ranga Agricultural University confirmed the performance of the Mobile Paddy Dryer, giving farmers and state agencies a university-backed reference ahead of wider deployment.',
    readTime: '2 min read'
  },
  {
    id: 'kerala-curing-house',
    category: 'Farmer Stories',
    date: 'June 2018',
    title: 'Kardi Cardamom Curing House Opens in Kerala',
    excerpt:
      'Alongside its expanded manufacturing base in Kerala, Kardi Dryers opened the Kardi Cardamom Curing House — a community drying centre giving smallholder spice growers shared access to high-value crop drying equipment.',
    readTime: '2 min read'
  },
 
]

const CATEGORIES: Array<'All' | Category> = [
  'All',
 
  'Field Notes',
  'Product Deep Dives',
  'Farmer Stories',
 
]

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }
}

export default function NewsroomPage () {
  const [active, setActive] = useState<'All' | Category>('All')



  const visible =
    active === 'All' ? ARTICLES : ARTICLES.filter(a => a.category === active)



  return (
    <>
      <KardiBackgroundGray>
        <Navbar />
        <main className=' text-[#ffffff]'>
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
                Milestones, partnerships, and updates from Kardi Dryers
                 straight from our team.
              </p>
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
                      className='relative border border-[#D8D2C2] px-4 py-2 text-xs uppercase tracking-widest transition-colors duration-300'
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
              <p className='shrink-0 text-xs uppercase tracking-widest text-[#8C8678]'>
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

         
        </main>
        <Footer />
      </KardiBackgroundGray>
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
      className={`relative flex items-center justify-center overflow-hidden bg-linear-to-br from-[#EDE9DD] to-[#E0D9C4] ${
        large ? 'aspect-4/3 md:aspect-auto md:h-full' : 'aspect-16/10'
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
