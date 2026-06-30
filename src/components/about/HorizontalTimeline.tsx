'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

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

export default function VerticalTimeline() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section className="relative bg-[#083326] py-28 px-6">
      {/* Section label */}
      <div className="max-w-3xl mx-auto mb-20 text-center">
        <p className="text-sm tracking-[0.25em] uppercase text-[#53823c]">
          Kardi Dryers — A History
        </p>
        <div className="w-12 h-px bg-[#ffffff] mx-auto mt-4" />
      </div>

      {/* Timeline */}
      <div className="relative max-w-3xl mx-auto">
        {/* spine — center aligns with marker midpoint at every breakpoint */}
        <div className="absolute left-7 md:left-8 top-2 bottom-2 w-px bg-[#D8D2C2]" />

        {timeline.map((item, i) => (
          <TimelineRow
            key={item.year}
            item={item}
            isActive={activeIndex === i}
            onEnter={() => setActiveIndex(i)}
            onLeave={() => setActiveIndex((curr) => (curr === i ? null : curr))}
            onToggle={() => setActiveIndex((curr) => (curr === i ? null : i))}
          />
        ))}
      </div>
    </section>
  )
}

function TimelineRow({
  item,
  isActive,
  onEnter,
  onLeave,
  onToggle
}: {
  item: (typeof timeline)[number]
  isActive: boolean
  onEnter: () => void
  onLeave: () => void
  onToggle: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="relative pl-20 md:pl-28 pb-16 md:pb-20 last:pb-0"
    >
      {/* chapter marker, sits on the spine */}
      <div
        className={`absolute left-0 top-0 flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full border bg-[#F4F1EA] transition-all duration-500 ${
          isActive ? 'scale-105 border-[#A6824F]' : 'border-[#C9B98F]'
        }`}
      >
        <span
          className={`text-sm transition-colors duration-500 ${
            isActive ? 'text-[#A6824F]' : 'text-[#8C8678]'
          }`}
          
        >
          {item.chapter}
        </span>
      </div>

      {/* year — dormant by default, wakes up on hover/tap */}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isActive}
        className="group flex w-full items-baseline gap-4 text-left focus:outline-none"
      >
        <span
          className={`text-5xl md:text-6xl leading-none transition-colors duration-500 ${
            isActive ? 'text-[#ffffff]' : 'text-[#ffffff]'
          }`}
          
        >
          {item.year}
        </span>

        <span
          className={`text-xs tracking-[0.15em] uppercase text-[#A6824F] transition-opacity duration-500 ${
            isActive ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {item.title}
        </span>

        {/* plus → × hint that something opens here */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          className={`ml-auto h-3 w-3 flex-shrink-0 transition-all duration-500 ${
            isActive ? 'rotate-45 text-[#A6824F]' : 'text-[#C9B98F]'
          }`}
        >
          <path d="M12 5v14M5 12h14" strokeLinecap="round" />
        </svg>
      </button>

      {/* detail card — height-animated, fully collapsed when dormant */}
      <motion.div
        initial={false}
        animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden"
      >
        <div className="mt-5 max-w-xl rounded-sm border-l-2 border-[#A6824F] bg-white/60 px-7 py-6 shadow-[0_8px_30px_rgba(43,43,38,0.06)]">
          <h3
            className="mb-2 text-xl md:text-2xl text-[#2B2B26]"
            style={{ fontFamily: 'var(--font-serif, Georgia, serif)' }}
          >
            {item.title}
          </h3>
          <p className="text-[15px] leading-[1.8] text-[#5B564B]">{item.desc}</p>
        </div>
      </motion.div>
    </motion.div>
  )
}
