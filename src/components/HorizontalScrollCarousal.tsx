import { motion, useTransform, useScroll } from 'framer-motion'
import { useRef } from 'react'
import Prod from '../assets/Home/Cardamom-dryer.webp'

type CardType = {
  id: number
  title: string
  url: string
}


const Example = () => {
  return (
    <div className=''>
      <HorizontalScrollCarousel />
    </div>
  )
}

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef
  })

  const x = useTransform(scrollYProgress, [0, 1], ['8%', '-95%'])

  return (
    <section ref={targetRef} className='relative h-[300vh]'>
      <div className='sticky top-0 flex h-screen items-center overflow-hidden'>
        <motion.div style={{ x }} className='flex gap-30'>
          {cards.map(card => {
            return <Card card={card} key={card.id} />
          })}
        </motion.div>
      </div>
    </section>
  )
}

const Card = ({ card }: { card: CardType }) => {
  return (
    <div className='w-[450px]'>
      
      {/* Image Card */}
      <div className='group relative h-[450px] overflow-hidden  bg-neutral-200'>
        <div
          style={{
            backgroundImage: `url(${card.url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
          className='absolute inset-0 transition-transform duration-300 group-hover:scale-110'
        ></div>

        {/* Overlay */}
        <div className='absolute inset-0 bg-black/20'></div>
      </div>

      {/* Title Below Image */}
      <div className='mt-4'>
        <h2 className='text-2xl text-black'>
          {card.title}
        </h2>
      </div>
    </div>
  )
}

export default Example

const cards = [
  {
    url: Prod,
    title: 'Mobile Grain Dryer',
    id: 1
  },
  {
    url: '/imgs/abstract/2.jpg',
    title: 'Title 2',
    id: 2
  },
  {
    url: '/imgs/abstract/3.jpg',
    title: 'Title 3',
    id: 3
  },
  {
    url: '/imgs/abstract/4.jpg',
    title: 'Title 4',
    id: 4
  },
  {
    url: '/imgs/abstract/5.jpg',
    title: 'Title 5',
    id: 5
  },
  {
    url: '/imgs/abstract/6.jpg',
    title: 'Title 6',
    id: 6
  },
  {
    url: '/imgs/abstract/7.jpg',
    title: 'Title 7',
    id: 7
  }
]
