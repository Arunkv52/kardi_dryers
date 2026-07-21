import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
}

const topics = ['Field Notes', 'Product Deep-Dives', 'Farmer Stories']

export default function BlogComingSoon () {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  function handleSubmit (e: FormEvent) {
    e.preventDefault()
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError('Enter a valid email address.')
      return
    }
    setError('')
    setSubmitted(true)
  }

  return (
    <>
      <Navbar />
      <main className='bg-[#d3d3d3] text-[#2B2B26]'>
        <section className='mx-auto flex min-h-[80vh] max-w-3xl flex-col items-center justify-center px-6 py-30 text-center'>
          <motion.p
            {...fadeUp as any}
            className='text-sm font-medium tracking-[0.2em] uppercase text-[#A6824F]'
          >
            Blog
          </motion.p>

          <motion.h1
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.08 } as any}
            className='mt-5 text-4xl leading-tight text-[#2B2B26] md:text-5xl'
            style={{ fontFamily: 'var(--font-serif, Georgia, serif)' }}
          >
            Stories from the drying floor,
            <br />
            coming soon.
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.16 } as any}
            className='mt-6 max-w-xl text-lg leading-relaxed text-[#5B564B]'
          >
            We're writing up what we've learned from years on farms and in
            mills — crop by crop, harvest by harvest. Leave your email and
            we'll send the first post the day it goes live.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.24 } as any}
            className='mt-8 flex flex-wrap items-center justify-center gap-3'
          >
            {topics.map(topic => (
              <span
                key={topic}
                className='rounded-full border border-[#C9B98F] px-5 py-2 text-sm text-[#5B564B]'
              >
                {topic}
              </span>
            ))}
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.32 } as any}
            className='mt-10 w-full max-w-md'
          >
            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                noValidate
                className='flex flex-col gap-3 sm:flex-row'
              >
                <label htmlFor='blog-notify-email' className='sr-only'>
                  Email address
                </label>
                <input
                  id='blog-notify-email'
                  type='email'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder='you@yourfarm.com'
                  className='h-12 flex-1 border border-[#D8D2C2] bg-white/60 px-4 text-sm text-[#2B2B26] outline-none placeholder:text-[#8C8678] focus:border-[#A6824F] transition-colors'
                />
                <button
                  type='submit'
                  className='h-12 shrink-0 bg-[#2B2B26] px-7 text-sm tracking-[0.05em] text-white transition-colors duration-300 hover:bg-[#A6824F]'
                >
                  Notify Me
                </button>
              </form>
            ) : (
              <div
                role='status'
                className='border border-[#C9B98F] bg-white/60 px-6 py-4 text-sm text-[#5B564B]'
              >
                You're on the list. We'll write to{' '}
                <span className='text-[#A6824F]'>{email}</span> when the
                first post is live.
              </div>
            )}
            {error && (
              <p className='mt-2 text-xs text-left text-[#A6824F]' role='alert'>
                {error}
              </p>
            )}
          </motion.div>

          <motion.a
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.4 } as any}
            href='/products'
            className='mt-14 text-xs uppercase tracking-[0.2em] text-[#8C8678] transition-colors hover:text-[#A6824F]'
          >
            ← Back to Products
          </motion.a>
        </section>
      </main>
      <Footer />
    </>
  )
}
