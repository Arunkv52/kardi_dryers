import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef } from 'react'

const timeline = [
  {
    year: '2001',
    chapter: 'I',
    title: 'Founded',
    desc: 'Kardi Dryers established in Chennai, pioneering small-scale crop drying solutions.'
  },
  {
    year: '2005',
    chapter: 'II',
    title: 'Cardamom dryer launch',
    desc: "Developed the world's first small-scale dryer for high-value crops like cardamom and pepper."
  },
  {
    year: '2010',
    chapter: 'III',
    title: '1,000+ dryers supplied',
    desc: 'Crossed the milestone of 1,000 dryers supplied across India.'
  },
  {
    year: '2014',
    chapter: 'IV',
    title: 'Government recognition',
    desc: 'Mobile Paddy Dryer tested & approved by Acharya N.G. Ranga Agricultural University.'
  },
  {
    year: '2016',
    chapter: 'V',
    title: 'AP Chief Minister inauguration',
    desc: 'CM Thiru. N. Chandrababu Naidu dedicated the Mobile Paddy Dryer to Andhra Pradesh.'
  },
  {
    year: '2018',
    chapter: 'VI',
    title: 'Kerala operations',
    desc: 'Expanded manufacturing to Kerala; launched Kardi Cardamom Curing House community drying centre.'
  },
  {
    year: '2020',
    chapter: 'VII',
    title: '3,000+ dryers globally',
    desc: 'Expanded to Sri Lanka, the Far East, the Middle East, and Africa.'
  },
  {
    year: '2023',
    chapter: 'VIII',
    title: 'Pedrotti joint venture',
    desc: 'Joint venture with Fratelli Pedrotti of Italy for mobile grain dryers, formalised as Kardi Pedrotti Dryers Pvt Ltd.'
  },
  {
    year: '2025',
    chapter: 'IX',
    title: '4,000+ dryers',
    desc: 'Serving 35 agricultural commodities across 8 states and multiple countries.'
  }
]

export default function HorizontalTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  // Spring-smoothed scroll progress so the pan has gentle inertia
  // rather than tracking the scrollbar one-to-one. This is the
  // single biggest lever for making horizontal scroll-jacking feel
  // considered rather than mechanical.
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.5
  })

  const x = useTransform(smoothProgress, [0, 1], ['0%', '-88.9%'])

  const counterIndex = useTransform(
    smoothProgress,
    [0, 1],
    [1, timeline.length]
  )

  return (
    <section
      ref={containerRef}
      className="relative h-[400vh] bg-[#F4F1EA]"
    >
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">

        {/* Fixed chrome: top label + bottom counter, independent of horizontal pan */}
        <div className="absolute top-12 left-10 z-30">
          <p className="text-base tracking-[0.2em] uppercase text-[#53823c]">
            Kardi Dryers — A History
          </p>
          <div className="w-10  bg-[#A6824F] mt-3" />
           
        </div>

        <div className="absolute bottom-12 right-20 z-30 flex items-center gap-2">
          <Counter index={counterIndex} />
          <span className="text-[11px] text-[#8C8678]">
            {' '}/ {String(timeline.length).padStart(2, '0')}
          </span>
        </div>

        <motion.div style={{ x }} className="relative flex items-center">
          {timeline.map((item, i) => (
            <Panel key={item.year} item={item} index={i} total={timeline.length} />
          ))}
        </motion.div>
      </div>
    
    </section>
  )
}

function Counter({ index }: { index: any }) {
  const rounded = useTransform(index, (v: number) =>
    String(Math.min(Math.round(v), 9)).padStart(2, '0')
  )
  return (
    <motion.span className="text-[11px] text-[#5B564B] font-medium tabular-nums">
      {rounded}
    </motion.span>
  )
}

function Panel({
  item,
  index,
  total
}: {
  item: (typeof timeline)[number]
  index: number
  total: number
}) {
  return (
    <div className="relative w-7xl flex-shrink-0 px-20 flex items-center justify-center">
      <div className="flex items-start gap-16 max-w-4xl">

     



        {/* Year + chapter marker */}
        <div className="flex-shrink-0 w-44 pt-1">
          <span
            className="block leading-none text-[#2B2B26] text-7xl"          >
            {item.year}
          </span>

          <div className="flex items-center gap-3 mt-30">
            <div className="w-9 h-9 rounded-full border border-[#C9B98F] flex items-center justify-center flex-shrink-0">
              <span
                className="text-[12px] text-[#A6824F]"
                style={{ fontFamily: 'var(--font-serif, Georgia, serif)' }}
              >
                {item.chapter}
              </span>
            </div>
            <span className="text-[11px] tracking-[0.12em] uppercase text-[#8C8678]">
              Chapter
            </span>
          </div>
        </div>

        {/* Vertical hairline divider */}
        <div className="w-px self-stretch bg-[#D8D2C2] flex-shrink-0" />

        {/* Content */}
        <div className="max-w-md pt-1">
          <h2
            className="text-[#2B2B26] mb-4 text-3xl font-bold"
          >
            {item.title}
          </h2>
          <p className="text-[15px] leading-[1.8] text-[#5B564B] font-inter">
            {item.desc}
          </p>
        </div>
      </div>

      {/* Footer rule: filled segment shows position within the full run */}
      <div className="absolute bottom-24 left-20 right-20 flex items-center gap-3">
        <div className="flex-1 h-px bg-[#D8D2C2] relative overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 bg-[#A6824F]"
            style={{ width: `${((index + 1) / total) * 100}%` }}
          />
        </div>
      </div>
    </div>
  )
}