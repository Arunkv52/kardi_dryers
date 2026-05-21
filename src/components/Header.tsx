// Header.tsx
import type { RefObject } from 'react'
import Navbar from './Navbar'
import HeroVideo from '../assets/Home/videos/Hero-videos.mp4'
import { motion, useScroll, useTransform } from 'framer-motion'

interface HeaderProps {
  scrollContainer: RefObject<HTMLElement | null>
}

const Header = ({ scrollContainer }: HeaderProps) => {
  // ✅ Now tracks the actual scrolling element, not the window
  const { scrollY } = useScroll({ container: scrollContainer })

  const scale = useTransform(scrollY, [0, 800], [1, 1])
  const overlayOpacity = useTransform(scrollY, [0, 400], [0.3, 0.9])
  const textY = useTransform(scrollY, [0, 500], [0, -100])
  const textOpacity = useTransform(scrollY, [0, 400], [1, 0])
  const cardsOpacity = useTransform(scrollY, [150, 400], [0, 1])
  const cardsY = useTransform(scrollY, [150, 400], [80, 0])
  const bubbleScale = useTransform(scrollY, [100, 700], [0, 15])
  const bubbleOpacity = useTransform(scrollY, [100, 250], [0, 1])

  return (
    <section className='relative h-[200vh]'>
      <div className='sticky top-0 h-screen overflow-hidden'>
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

        <motion.div
          style={{ opacity: overlayOpacity }}
          className='absolute inset-0 bg-[#083326] z-10'
        />

        <motion.div
          style={{ scale: bubbleScale, opacity: bubbleOpacity }}
          className='absolute bottom-[-200px] right-[-200px] w-[400px] h-[400px] rounded-full bg-black/30 blur-3xl z-20'
        />

        <div className='relative z-50'>
          <Navbar />
        </div>

        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className='relative z-30 h-full flex flex-col justify-center px-6 md:px-20'
        >
          
          <h1 className='text-white text-5xl md:text-7xl font-light leading-[1.05] max-w-6xl'>
            Leading the way<br />
            In Plantation <br />
            Drying Solution
          </h1>
        </motion.div>

        <motion.div
          style={{ opacity: cardsOpacity, y: cardsY }}
          className='absolute bottom-10 left-0 w-full z-40 px-6 md:pl-150'
        >
          <div className='grid md:grid-cols-2 gap-5 py-10'>
            <div className='bg-white/10 border border-white/10 backdrop-blur-xl rounded-[30px] p-6'>
              <p className='text-white/70 mt-4 leading-7'>
                Access detailed information about our customized drying systems,
                engineering expertise, and global agricultural solutions.
                Discover reliable technology designed to deliver efficient and
                consistent drying performance.
              </p>
            </div>
            <div className='bg-white/10 border border-white/10 backdrop-blur-xl rounded-[30px] p-6'>
              <p className='text-white/70 mt-4 leading-7'>
                Get detailed insights into Kardi Dryers’ advanced agro drying
                technology, including product features, applications, and
                technical specifications. Find the right drying solution
                tailored to your crop, climate, and operational needs.{' '}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Header
