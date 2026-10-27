import type { RefObject } from 'react'
import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import HeroVideo from '../assets/kardi-hero-bg.mp4'
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence
} from 'framer-motion'

interface HeaderProps {
  scrollContainer: RefObject<HTMLElement | null>
}

const heroTexts = [
  {
    line1: "Dryers that grow ",
    line2: 'with your harvest.'
   
  },
  {
    line1: 'Leading the ',
    line2: 'Post Harvest',
    line3: 'Value Addition'
  }
]

const Header = ({ scrollContainer }: HeaderProps) => {
  const { scrollY } = useScroll({ container: scrollContainer })

  const scale = useTransform(scrollY, [0, 800], [1, 1])
  const textY = useTransform(scrollY, [0, 500], [0, -100])
  const textOpacity = useTransform(scrollY, [0, 400], [1, 0])



  const [currentText, setCurrentText] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText(prev => (prev + 1) % heroTexts.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className='relative h-[200vh]'>
      <div className='sticky top-0 h-screen overflow-hidden'>
        {/* Background Video */}
        <motion.div style={{ scale }} className='absolute inset-0'>
          <video
            autoPlay
            loop
            muted
            playsInline
            className='w-full h-full object-cover'
          >
            <source src={HeroVideo} type='video/mp4' />
          </video>
        </motion.div>

       

        {/* Bubble Effect */}


        {/* Navbar */}
        <div className='relative z-50'>
          <Navbar />
        </div>

        {/* Hero Content */}
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className='relative z-30 h-full flex flex-col justify-center px-6 md:px-10'
        >
          <AnimatePresence mode='wait'>
            <motion.h1
              key={currentText}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -60 }}
              transition={{ duration: 0.8 }}
              className='text-white text-5xl md:text-7xl font-light leading-[1.05] max-w-6xl'
            >
              {heroTexts[currentText].line1}
              <br />
              {heroTexts[currentText].line2}
              <br />
              {heroTexts[currentText].line3}
            </motion.h1>
          </AnimatePresence>
        </motion.div>

       
      </div>
    </section>
  )
}

export default Header