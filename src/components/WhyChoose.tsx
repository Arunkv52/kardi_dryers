import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from '../assets/Home/why-choose.jpg'

const WhyChoose = () => {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  // Scale animation
  const scale = useTransform(scrollYProgress, [0, 1], [0.3, 1.5])

  return (
    <section
      ref={ref}
      className='why-choose relative h-screen overflow-hidden'
    >
      {/* Background Image */}
      <motion.div
        style={{ scale }}
        className='absolute inset-0'
      >
        <img
          src={Image}
          alt='Why Choose Us'
          className='h-full w-full object-cover rounded-2xl'
        />
      </motion.div>

      

      {/* Content */}
      <div className='relative z-20 flex h-full items-center px-5'>
        <div className='max-w-2xl text-white'>
          <h2 className='text-5xl font-bold mb-5'>
            Why Choose Us?
          </h2>

          <p className='text-lg leading-8 text-neutral-200'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Inventore voluptas totam consequatur delectus quas iste
            porro excepturi provident reprehenderit qui.
          </p>
        </div>
      </div>
    </section>
  )
}

export default WhyChoose