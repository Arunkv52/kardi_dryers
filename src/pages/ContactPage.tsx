import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

// ── Real contact details, pulled directly from kardidryers.com/contact.htm ──
// Re-check these before publishing, especially the phone number — that page
// looked dated and may not have been updated in a while.
const CONTACT = {
  headOffice:
    '284, Avvai Shanmugam Salai, Chennai – 600 086, Tamil Nadu, India',
  factory:
    'Survey No. 203/2 (Old No. 86), New No. 69, 2nd Extension, Nageswara Rao Road, Athipet, Chennai – 600 058',
  phone: '+91 97916 64050',
  email: 'sales@kardidryers.com'
}

// Built from the phone number above — confirm it's actually WhatsApp-active
// before relying on it (Justdial's listing for Kardi Dryers offers a
// WhatsApp option, which is what this is based on).
const WHATSAPP_URL = 'https://wa.me/919791664050'

// Only channels confirmed live during research. Add Instagram/Facebook here
// once you have the official handles — a wrong link is worse than no link.
const SOCIALS = [
  { name: 'YouTube', href: 'https://www.youtube.com/@KardiPedrotti' },
  {
    name: 'LinkedIn',
    href: 'https://in.linkedin.com/company/kardi-dryers-pvt-ltd'
  }
] as const

// Standard embed, no API key needed — geocodes the address text itself
// rather than relying on hardcoded coordinates.
const MAP_SRC = `https://www.google.com/maps?q=${encodeURIComponent(
  '284 Avvai Shanmugam Salai Chennai 600086'
)}&output=embed`

const PRODUCTS = [
  'Grain Dryers',
  'Spices Dryers',
  'Coffee Dryers',
  'Sago Dryers',
  'Vegetable / Herbs / Leaves Dryers',
  'Chilli Dryers',
  'Groundnut Dryers'
]

const RESEND_SECONDS = 30
const COMMENTS_LIMIT = 300

type ContactFormValues = {
  name: string
  email: string
  mobile: string
  product: string
  comments: string
}

type OtpStatus = 'idle' | 'sending' | 'sent' | 'verifying' | 'verified'

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }
}

const inputClass =
  'w-full border border-[#D8D2C2] bg-white/50 px-4 py-3 text-[15px] text-[#2B2B26] placeholder:text-[#8C8678]/60 transition-colors duration-300 focus:border-[#A6824F] focus:bg-white focus:outline-none disabled:cursor-not-allowed disabled:border-[#D8D2C2] disabled:bg-[#EDE9DD] disabled:text-[#8C8678]'

const labelClass =
  'mb-2 block text-xs uppercase tracking-[0.15em] text-[#8C8678]'

const errorClass = 'mt-1.5 text-xs text-[#9C4A3A]'

export default function ContactPage () {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors }
  } = useForm<ContactFormValues>({ mode: 'onTouched' })

  const [otpStatus, setOtpStatus] = useState<OtpStatus>('idle')
  const [devOtp, setDevOtp] = useState<string | null>(null)
  const [otpInput, setOtpInput] = useState('')
  const [otpError, setOtpError] = useState<string | null>(null)
  const [resendIn, setResendIn] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  const mobile = watch('mobile') || ''
  const comments = watch('comments') || ''
  const mobileValid = /^[6-9]\d{9}$/.test(mobile)

  const mobileReg = register('mobile', {
    required: 'Mobile number is required',
    pattern: {
      value: /^[6-9]\d{9}$/,
      message: 'Enter a valid 10-digit mobile number'
    }
  })

  useEffect(() => {
    if (resendIn <= 0) return
    const t = setTimeout(() => setResendIn(s => s - 1), 1000)
    return () => clearTimeout(t)
  }, [resendIn])



  // DEMO ONLY — there is no SMS backend wired up here. This generates and
  // checks a code entirely in the browser, which is fine for previewing the
  // flow but isn't real verification (anyone reading the page source could
  // see the code). Before going live, replace sendOtp/verifyOtp with calls
  // to a real backend route backed by an SMS provider (e.g. MSG91, Twilio,
  // Firebase Phone Auth) and delete the devOtp state entirely.
  async function sendOtp () {
    if (!mobileValid) return
    setOtpStatus('sending')
    await new Promise(r => setTimeout(r, 700))
    const code = String(Math.floor(100000 + Math.random() * 900000))
    setDevOtp(code)
    setOtpStatus('sent')
    setResendIn(RESEND_SECONDS)
    setOtpInput('')
    setOtpError(null)
  }

  async function verifyOtp () {
    if (otpInput.length !== 6) return
    setOtpStatus('verifying')
    await new Promise(r => setTimeout(r, 500))
    if (otpInput === devOtp) {
      setOtpStatus('verified')
      setOtpError(null)
    } else {
      setOtpStatus('sent')
      setOtpError('Incorrect code. Please try again.')
    }
  }

  function changeNumber () {
    setOtpStatus('idle')
    setDevOtp(null)
    setOtpInput('')
    setOtpError(null)
    setResendIn(0)
    setValue('mobile', '')
  }

  function onSubmit (data: ContactFormValues) {
    if (otpStatus !== 'verified') {
      setOtpError('Please verify your mobile number before submitting.')
      return
    }
    // TODO: send `data` to your backend / CRM endpoint here.
    console.log('Contact form submission', data)
    setSubmitted(true)
  }

  function sendAnother () {
    reset()
    changeNumber()
    setSubmitted(false)
  }

  return (
    <>
      <Navbar />
      <main className='bg-[#083326] text-[#ffffff]'>
        {/* Heading */}
        <section className='px-6 pb-4 pt-30 lg:px-12'>
          <motion.div {...fadeUp} className='mx-auto max-w-6xl text-center'>
            <p className='mb-5 text-sm font-medium tracking-[0.25em] uppercase text-[#f1f1f1]'>
              Contact
            </p>
            <h1 className='text-4xl leading-tight md:text-5xl'>
              Let's Start a Conversation
            </h1>
            <p className='mx-auto mt-5 max-w-xl leading-[1.8] text-[#f1f1f1]'>
              Tell us about your crop, your volume, and your location — our team
              will recommend the right dryer and get back to you personally.
            </p>
          </motion.div>
        </section>

        {/* Main grid */}
        <section className='px-6 py-16 lg:px-12'>
          <div className='mx-auto grid max-w-6xl gap-16 lg:grid-cols-12 lg:gap-20'>
            {/* Form */}
            <motion.div {...fadeUp} className='lg:col-span-7'>
              <AnimatePresence mode='wait'>
                {submitted ? (
                  <motion.div
                    key='success'
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className='flex h-full flex-col items-start justify-center border border-[#D8D2C2] bg-white/40 px-8 py-16 text-left md:px-12'
                  >
                    <div className='flex h-14 w-14 items-center justify-center rounded-full border border-[#A6824F]'>
                      <svg
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='#A6824F'
                        strokeWidth={1.5}
                        className='h-6 w-6'
                      >
                        <path
                          d='M5 13l4 4L19 7'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </div>
                    <h2 className='mt-6 text-2xl text-[#2B2B26] md:text-3xl'>
                      Message received
                    </h2>
                    <p className='mt-3 max-w-sm leading-[1.8] text-[#5B564B]'>
                      Thank you — our team will reach out to your verified
                      number shortly to discuss next steps.
                    </p>
                    <button
                      type='button'
                      onClick={sendAnother}
                      className='mt-8 border border-[#C9B98F] px-6 py-3 text-sm tracking-[0.05em] text-[#5B564B] transition-colors duration-300 hover:border-[#A6824F] hover:text-[#f1f1f1]'
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key='form'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                    className='space-y-7'
                  >
                    {/* Name */}
                    <div>
                      <label htmlFor='name' className={labelClass}>
                        Name <span className='text-[#f1f1f1]'>*</span>
                      </label>
                      <input
                        id='name'
                        type='text'
                        placeholder='Your full name'
                        className={inputClass}
                        aria-invalid={!!errors.name}
                        {...register('name', {
                          required: 'Please enter your name',
                          minLength: {
                            value: 2,
                            message: 'Name looks too short'
                          }
                        })}
                      />
                      {errors.name && (
                        <p className={errorClass}>{errors.name.message}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor='email' className={labelClass}>
                        Email <span className='text-[#f1f1f1]'>*</span>
                      </label>
                      <input
                        id='email'
                        type='email'
                        placeholder='you@company.com'
                        className={inputClass}
                        aria-invalid={!!errors.email}
                        {...register('email', {
                          required: 'Please enter your email',
                          pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: 'Enter a valid email address'
                          }
                        })}
                      />
                      {errors.email && (
                        <p className={errorClass}>{errors.email.message}</p>
                      )}
                    </div>

                    {/* Mobile + OTP */}
                    <div>
                      <label htmlFor='mobile' className={labelClass}>
                        Mobile Number <span className='text-[#f1f1f1]'>*</span>
                      </label>

                      <div className='flex items-start gap-3'>
                        <div className='relative flex-1'>
                          <input
                            id='mobile'
                            type='tel'
                            inputMode='numeric'
                            placeholder='98765 43210'
                            className={inputClass}
                            disabled={otpStatus === 'verified'}
                            aria-invalid={!!errors.mobile}
                            {...mobileReg}
                            onChange={e => {
                              e.target.value = e.target.value
                                .replace(/\D/g, '')
                                .slice(0, 10)
                              mobileReg.onChange(e)
                              if (
                                otpStatus === 'sent' ||
                                otpStatus === 'verifying'
                              ) {
                                setOtpStatus('idle')
                                setDevOtp(null)
                                setOtpInput('')
                                setOtpError(null)
                                setResendIn(0)
                              }
                            }}
                          />
                          {otpStatus === 'verified' && (
                            <span className='absolute right-3 top-1/2 flex -translate-y-1/2 items-center gap-1.5 text-xs text-[#53823c]'>
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
                              Verified
                            </span>
                          )}
                        </div>

                        {otpStatus === 'verified' ? (
                          <button
                            type='button'
                            onClick={changeNumber}
                            className='flex-shrink-0 whitespace-nowrap border border-[#C9B98F] px-5 py-3 text-sm text-[#5B564B] transition-colors duration-300 hover:border-[#A6824F] hover:text-[#f1f1f1]'
                          >
                            Change
                          </button>
                        ) : (
                          <button
                            type='button'
                            onClick={sendOtp}
                            disabled={
                              !mobileValid ||
                              otpStatus === 'sending' ||
                              otpStatus === 'sent' ||
                              otpStatus === 'verifying'
                            }
                            className='flex-shrink-0 whitespace-nowrap border border-[#2B2B26] bg-[#2B2B26] px-5 py-3 text-sm text-white transition-colors duration-300 hover:bg-[#A6824F] hover:border-[#A6824F] disabled:cursor-not-allowed disabled:border-[#D8D2C2] disabled:bg-[#D8D2C2] disabled:text-[#8C8678]'
                          >
                            {otpStatus === 'sending'
                              ? 'Sending…'
                              : otpStatus === 'sent' ||
                                otpStatus === 'verifying'
                              ? 'Code sent'
                              : 'Send OTP'}
                          </button>
                        )}
                      </div>
                      {errors.mobile && (
                        <p className={errorClass}>{errors.mobile.message}</p>
                      )}

                      {/* OTP entry */}
                      <AnimatePresence>
                        {(otpStatus === 'sent' ||
                          otpStatus === 'verifying') && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                              duration: 0.35,
                              ease: [0.22, 1, 0.36, 1]
                            }}
                            className='overflow-hidden'
                          >
                            <div className='mt-4 border-l-2 border-[#A6824F] bg-white/50 px-5 py-5'>
                              <p className='text-xs text-[#5B564B]'>
                                Enter the 6-digit code sent to{' '}
                                <span className='text-[#2B2B26]'>
                                  +91 {mobile}
                                </span>
                              </p>

                              {devOtp && (
                                <p className='mt-2 border border-dashed border-[#C9B98F] bg-[#F4F1EA] px-3 py-2 text-xs text-[#8C8678]'>
                                  Demo mode — no SMS backend connected yet. Your
                                  test code is{' '}
                                  <span className='font-medium text-[#f1f1f1]'>
                                    {devOtp}
                                  </span>
                                </p>
                              )}

                              <div className='mt-3 flex items-center gap-3'>
                                <input
                                  type='text'
                                  inputMode='numeric'
                                  maxLength={6}
                                  placeholder='••••••'
                                  value={otpInput}
                                  onChange={e =>
                                    setOtpInput(
                                      e.target.value
                                        .replace(/\D/g, '')
                                        .slice(0, 6)
                                    )
                                  }
                                  className='w-32 border border-[#D8D2C2] bg-white px-4 py-2.5 text-center text-lg tracking-[0.3em] text-[#2B2B26] focus:border-[#A6824F] focus:outline-none'
                                />
                                <button
                                  type='button'
                                  onClick={verifyOtp}
                                  disabled={
                                    otpInput.length !== 6 ||
                                    otpStatus === 'verifying'
                                  }
                                  className='border border-[#2B2B26] bg-[#2B2B26] px-5 py-2.5 text-sm text-white transition-colors duration-300 hover:bg-[#A6824F] hover:border-[#A6824F] disabled:cursor-not-allowed disabled:border-[#D8D2C2] disabled:bg-[#D8D2C2] disabled:text-[#8C8678]'
                                >
                                  {otpStatus === 'verifying'
                                    ? 'Verifying…'
                                    : 'Verify'}
                                </button>

                                {resendIn > 0 ? (
                                  <span className='text-xs text-[#8C8678]'>
                                    Resend in {resendIn}s
                                  </span>
                                ) : (
                                  <button
                                    type='button'
                                    onClick={sendOtp}
                                    className='text-xs text-[#f1f1f1] underline-offset-2 hover:underline'
                                  >
                                    Resend code
                                  </button>
                                )}
                              </div>
                              {otpError && (
                                <p className={errorClass}>{otpError}</p>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Product */}
                    <div>
                      <label htmlFor='product' className={labelClass}>
                        Product <span className='text-[#f1f1f1]'>*</span>
                      </label>
                      <div className='relative'>
                        <select
                          id='product'
                          defaultValue=''
                          className={`${inputClass} appearance-none pr-10`}
                          aria-invalid={!!errors.product}
                          {...register('product', {
                            required: 'Please select a product'
                          })}
                        >
                          <option value='' disabled>
                            Select a product
                          </option>
                          {PRODUCTS.map(p => (
                            <option key={p} value={p}>
                              {p}
                            </option>
                          ))}
                        </select>
                        <svg
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='#8C8678'
                          strokeWidth={1.5}
                          className='pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2'
                        >
                          <path
                            d='M6 9l6 6 6-6'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </div>
                      {errors.product && (
                        <p className={errorClass}>{errors.product.message}</p>
                      )}
                    </div>

                    {/* Comments */}
                    <div>
                      <div className='mb-2 flex items-baseline justify-between'>
                        <label
                          htmlFor='comments'
                          className={labelClass + ' mb-0'}
                        >
                          Comments
                        </label>
                        <span className='text-[11px] text-[#8C8678]'>
                          {comments.length}/{COMMENTS_LIMIT}
                        </span>
                      </div>
                      <textarea
                        id='comments'
                        rows={3}
                        maxLength={COMMENTS_LIMIT}
                        placeholder='Anything specific we should know?'
                        className={`${inputClass} resize-none`}
                        {...register('comments')}
                      />
                    </div>

                    <button
                      type='submit'
                      disabled={otpStatus !== 'verified'}
                      className='cursor-pointer w-full bg-[#2B2B26] py-4 text-sm tracking-[0.05em] text-white transition-colors duration-300 hover:bg-[#A6824F] disabled:cursor-not-allowed disabled:bg-[#D8D2C2] disabled:text-[#8C8678] sm:w-auto sm:px-10'
                    >
                      Submit
                    </button>
                    {otpStatus !== 'verified' && (
                      <p className='text-xs text-[#8C8678]'>
                        Verify your mobile number above to enable submission.
                      </p>
                    )}
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className='lg:col-span-5'
            >
              <div className='border border-[#D8D2C2] bg-white/40'>
                {/* Locations */}
                <div className='space-y-6 p-8'>
                  <p className='text-sm font-medium tracking-[0.2em] uppercase text-[#f1f1f1]'>
                    Visit Us
                  </p>

                  <LocationRow label='Head Office' value={CONTACT.headOffice} />
                  <LocationRow label='Factory' value={CONTACT.factory} />
                </div>

                <div className='h-px bg-[#8e6b0c]' />

                {/* Direct contact */}
                <div className='space-y-4 p-8 text-[#ffffff]'>
                  <ContactRow
                    label='Call'
                    value={CONTACT.phone}
                    href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
                   
                    
                    icon={<PhoneIcon />}
                  />
                  <ContactRow
                    label='Email'
                    value={CONTACT.email}
                    href={`mailto:${CONTACT.email}`}
                    
                    
                    icon={<MailIcon />}
                  />
                  <a
                    href={WHATSAPP_URL}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-3 pt-1 text-sm text-[#ffffff] transition-opacity hover:opacity-70'
                  >
                    <ChatIcon />
                    Chat on WhatsApp
                  </a>
                </div>

                <div className='h-px bg-[#f7f7f7]' />

                {/* Map */}
                <div className='aspect-[4/3] w-full grayscale-[15%]'>
                  <iframe
                    src={MAP_SRC}
                    className='h-full w-full border-0'
                    loading='lazy'
                    title='Kardi Dryers — Head Office location'
                  />
                </div>

                <div className='h-px bg-[#D8D2C2]' />

                {/* Social */}
                <div className='flex items-center justify-between p-8'>
                  <p className='text-sm font-medium tracking-[0.2em] uppercase text-[#f1f1f1]'>
                    Follow Us
                  </p>
                  <div className='flex items-center gap-3'>
                    {SOCIALS.map(s => (
                      <a
                        key={s.name}
                        href={s.href}
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label={s.name}
                        className='flex h-10 w-10 items-center justify-center rounded-full border border-[#C9B98F] text-[#e6e6e6] transition-colors duration-300 hover:border-[#A6824F] hover:text-[#f1f1f1]'
                      >
                        {s.name === 'YouTube' ? (
                          <YouTubeIcon />
                        ) : (
                          <LinkedInIcon />
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

function LocationRow ({ label, value }: { label: string; value: string }) {
  return (
    <div className='flex gap-3'>
      <span className='mt-0.5 flex-shrink-0 text-[#f1f1f1]'>
        <PinIcon />
      </span>
      <div>
        <p className='text-xs uppercase tracking-[0.1em] text-[#ffffff]'>
          {label}
        </p>
        <p className='mt-1 text-[15px] leading-[1.7] text-[#e7e7e7]'>{value}</p>
      </div>
    </div>
  )
}

function ContactRow ({
  label,
  value,
  href,
  icon,
}: {
  label: string
  value: string
  href: string
  icon: React.ReactNode
}) {
  return (
    <div className='flex items-center justify-between gap-3'>
      <a
        href={href}
        className='flex items-center gap-3 text-[15px] text-[#f2f2ec] transition-colors hover:text-[#f1f1f1]'
      >
        <span className='text-[#f1f1f1]'>{icon}</span>
        <span>
          <span className='block text-xs uppercase tracking-[0.1em] text-[#ffffff]'>
            {label}
          </span>
          {value}
        </span>
      </a>
      <button
        type='button'
       
        className='flex-shrink-0 text-xs text-[#e2e2e0] underline-offset-2 hover:text-[#f1f1f1] hover:underline'
      ></button>
    </div>
  )
}

function PinIcon () {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth={1.5}
      className='h-5 w-5'
    >
      <path
        d='M12 21s-7-6.1-7-11a7 7 0 1 1 14 0c0 4.9-7 11-7 11z'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <circle cx='12' cy='10' r='2.5' />
    </svg>
  )
}

function PhoneIcon () {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth={1.5}
      className='h-5 w-5'
    >
      <path
        d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

function MailIcon () {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth={1.5}
      className='h-5 w-5'
    >
      <rect x='2' y='4' width='20' height='16' rx='1' />
      <path d='M2 6l10 7L22 6' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  )
}

function ChatIcon () {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth={1.5}
      className='h-5 w-5'
    >
      <path
        d='M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

function YouTubeIcon () {
  return (
    <svg viewBox='0 0 24 24' fill='currentColor' className='h-4 w-4'>
      <path d='M21.6 7.2a2.7 2.7 0 0 0-1.9-1.9C18 5 12 5 12 5s-6 0-7.7.3a2.7 2.7 0 0 0-1.9 1.9A28 28 0 0 0 2 12a28 28 0 0 0 .4 4.8 2.7 2.7 0 0 0 1.9 1.9C6 19 12 19 12 19s6 0 7.7-.3a2.7 2.7 0 0 0 1.9-1.9A28 28 0 0 0 22 12a28 28 0 0 0-.4-4.8zM10 15V9l5 3-5 3z' />
    </svg>
  )
}

function LinkedInIcon () {
  return (
    <svg viewBox='0 0 24 24' fill='currentColor' className='h-4 w-4'>
      <path d='M6.94 5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0zM3.4 8.75h3.47V21H3.4zM9.5 8.75h3.32v1.68h.05c.46-.88 1.6-1.8 3.3-1.8 3.53 0 4.18 2.32 4.18 5.35V21h-3.47v-5.46c0-1.3-.02-2.97-1.81-2.97-1.82 0-2.1 1.42-2.1 2.88V21H9.5z' />
    </svg>
  )
}
