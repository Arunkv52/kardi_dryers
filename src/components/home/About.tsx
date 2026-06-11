import { motion } from 'framer-motion'

const About = () => {
  return (
    <>
      <section className='md:px-10 px-5 md:py-0 py-30'>
        <div className='abt-all md:flex flex md:flex-row flex-col md:justify-start md:gap-10 gap-5 md:px-0 px-0'>
          <div className='md:w-[30%] w-full'>
            <div className='relative overflow-hidden md:mt-15 bg-black/80 p-5 md:h-[90%] h-[450px] rounded-2xl text-white'>
              {/* Content */}
              <div className='relative z-20 mt-5'>
                <p className='uppercase text-[10px] font-bold text-white/50'>
                  ** Are you interested to know who we are?
                </p>

                <h3 className='md:text-2xl text-2xl md:pt-5 pt-5 leading-tight'>
                  Kardi Dryers is India’s trusted name in agro crop drying
                  technology, delivering customized drying solutions for
                  farmers, plantations, and processors worldwide. Backed by
                  innovation, experience, and global partnerships, we help
                  preserve harvest quality with precision engineering.
                </h3>
              </div>

              {/* Background Decorative Shapes */}
              <div className='absolute inset-0 overflow-hidden z-10'>
                {/* Top Right Orange Shape */}

                {/* Large Diagonal Line */}
                <div className='absolute bottom-30 right-62 w-20 h-150 bg-[#0a4a3a] rotate-45 rounded-xl opacity-60'></div>

                {/* Horizontal Line */}
                <div className='absolute top-40 right-80 w-125 h-14 bg-[#0a4a3a] rounded-md opacity-50'></div>

                {/* Vertical Line */}
                <div className='absolute bottom-0 right-40 w-14 h-75 bg-[#0a4a3a] rounded-md opacity-50'></div>

                {/* Small Top Line */}
                <div className='absolute top-0 right-52 w-14 h-12 bg-[#0a4a3a] rounded-md opacity-70'></div>

                {/* Right Cross Shape */}
                <div className='absolute bottom-24 -right-5 w-16 h-56 bg-[#0a4a3a] rotate-45 rounded-xl opacity-60'></div>
              </div>
            </div>
          </div>
          <div className='md:w-[70%] w-full mt-15'>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-3'>
              {/* Card 1 */}
              <div className='relative overflow-hidden rounded-[35px] border border-[#e5dfdb] bg-[#f5f3f17d] min-h-[250px] flex items-start justify-start p-10'>
                {/* Icon */}
                <div className='absolute top-5'>
                  <motion.div
                    animate={{
                      rotate: 360
                    }}
                    transition={{
                      duration: 12,
                      repeat: Infinity,
                      ease: 'linear'
                    }}
                    className='relative w-14 h-14'
                  >
                    {/* Vertical */}
                    <motion.span
                      animate={{
                        scaleY: [1, 1.3, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut'
                      }}
                      className='absolute w-1 h-14 bg-[#ff5938] left-1/2 -translate-x-1/2 rounded-full'
                    ></motion.span>

                    {/* Horizontal */}
                    <motion.span
                      animate={{
                        scaleX: [1, 1.3, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 0.2
                      }}
                      className='absolute w-14 h-1 bg-[#ff5938] top-1/2 -translate-y-1/2 rounded-full'
                    ></motion.span>

                    {/* Diagonal 1 */}
                    <motion.span
                      animate={{
                        scaleY: [1, 1.2, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 0.4
                      }}
                      className='absolute w-1 h-14 bg-[#ff5938] rotate-45 left-1/2 -translate-x-1/2 rounded-full'
                    ></motion.span>

                    {/* Diagonal 2 */}
                    <motion.span
                      animate={{
                        scaleY: [1, 1.2, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 0.6
                      }}
                      className='absolute w-1 h-14 bg-[#ff5938] -rotate-45 left-1/2 -translate-x-1/2 rounded-full'
                    ></motion.span>
                  </motion.div>
                </div>

                {/* Content */}
                <div className='text-left mt-20'>
                  <h2 className='text-6xl font-bold text-black'>4,000+</h2>

                  <p className='text-base leading-tight mt-4 text-black'>
                    Dryers Supplied
                  </p>

                  <p className='text-sm text-black/70'>Globally</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className='relative overflow-hidden rounded-[35px] border border-[#e5dfdb] bg-[#f5f3f1] min-h-[250px] flex items-start justify-start p-10'>
                {/* Icon */}
                <div className='absolute top-5'>
                  <motion.div
                    animate={{
                      y: [0, -8, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                    className='flex flex-col items-center'
                  >
                    {/* Head */}
                    <motion.div
                      animate={{
                        scale: [1, 1.08, 1],
                        opacity: [0.8, 1, 0.8]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut'
                      }}
                      className='w-6 h-6 rounded-full bg-[#d8d1cc]'
                    ></motion.div>

                    {/* Body */}
                    <motion.div
                      animate={{
                        borderTopLeftRadius: ['999px', '40px', '999px'],
                        borderTopRightRadius: ['999px', '40px', '999px'],
                        scaleX: [1, 1.05, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 0.2
                      }}
                      className='w-12 h-8 bg-[#ff5938] rounded-t-full rounded-b-2xl mt-2'
                    ></motion.div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className='text-left mt-20'>
                  <h2 className='text-6xl font-bold text-black'>35+</h2>

                  <p className='text-base leading-tight mt-4 text-black'>
                    Agricultural Commodities
                  </p>

                  <p className='text-sm text-black/70'>Served</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className='relative overflow-hidden rounded-[35px] border border-[#e5dfdb] bg-[#f5f3f1] min-h-[250px] flex items-start justify-start p-10'>
                {/* Icon */}
                <div className='absolute top-5'>
                  <motion.div
                    animate={{
                      rotate: [0, 360]
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: 'linear'
                    }}
                    className='relative flex items-center justify-center'
                  >
                    {/* Outer Ring */}
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut'
                      }}
                      className='w-12 h-12 rounded-full border-4 border-[#ff5938] flex items-center justify-center'
                    >
                      {/* Inner Dot */}
                      <motion.div
                        animate={{
                          scale: [1, 1.4, 1]
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: 'easeInOut'
                        }}
                        className='w-4 h-4 bg-[#ff5938] rounded-full'
                      ></motion.div>
                    </motion.div>

                    {/* Glow Effect */}
                    <motion.div
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0, 0.3]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeOut'
                      }}
                      className='absolute w-14 h-14 rounded-full bg-[#ff5938]/20 blur-md'
                    ></motion.div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className='text-left mt-20'>
                  <h2 className='text-6xl font-bold text-black'>8+</h2>

                  <p className='text-base leading-tight mt-4 text-black'>
                    States & International
                  </p>

                  <p className='text-sm text-black/70'>Presence</p>
                </div>
              </div>

              {/* Card 4 */}
              <div className='relative overflow-hidden rounded-[35px] border border-[#e5dfdb] bg-[#f5f3f17d] min-h-[250px] flex items-start justify-start p-10'>
                {/* Icon */}
                <div className='absolute top-5'>
                  <div className='relative flex items-center justify-center'>
                    {/* Pulsing Glow */}
                    <motion.div
                      animate={{
                        scale: [1, 1.6, 1],
                        opacity: [0.3, 0, 0.3]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeOut'
                      }}
                      className='absolute w-16 h-16 rounded-full bg-[#ff5938]/20 blur-md'
                    ></motion.div>

                    {/* Outer Circle */}
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                        borderRadius: ['50%', '45%', '50%']
                      }}
                      transition={{
                        rotate: {
                          duration: 10,
                          repeat: Infinity,
                          ease: 'linear'
                        },
                        borderRadius: {
                          duration: 4,
                          repeat: Infinity,
                          ease: 'easeInOut'
                        }
                      }}
                      className='w-14 h-14 border-4 border-[#ff5938] rounded-full flex items-center justify-center'
                    >
                      {/* Center Line */}
                      <motion.div
                        animate={{
                          scaleY: [1, 1.5, 1],
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: 'easeInOut'
                        }}
                        className='w-1 h-5 bg-[#ff5938] rounded-full'
                      ></motion.div>
                    </motion.div>
                  </div>
                </div>

                {/* Content */}
                <div className='text-left mt-20'>
                  <h2 className='text-6xl font-bold text-black'>25+</h2>

                  <p className='text-base leading-tight mt-4 text-black'>
                    Years of Experience
                  </p>

                  <p className='text-sm text-black/70'>Since 2001</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
