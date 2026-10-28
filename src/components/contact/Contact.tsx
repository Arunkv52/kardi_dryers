import EnquiryForm from './EnquiryForm'


/* ---------- content (edit here) ---------- */
const HEAD_OFFICE =
  '284, Avvai Shanmugam Salai, Gopalapuram, Chennai 600 086, Tamil Nadu, India'
const FACTORY =
  ' No. 16, AUETAA Industrial Estate, Morai, Veerapuram, Chennai – 600055'
const PHONE_DISPLAY = '+91 97916 64050'
const PHONE_TEL = '+919791664050'
const WHATSAPP_NUMBER = '919791664050'
const EMAIL = 'sales@kardidryers.com'
const MAP_SRC = `https://www.google.com/maps?q=${encodeURIComponent(
  '284, Avvai Shanmugam Salai, Gopalapuram, Chennai 600086'
)}&output=embed`

/* ---------- icons (inline, stroke follows currentColor) ---------- */
const iconProps = {
  'aria-hidden': true,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  className: 'h-6 w-6 shrink-0 text-[#f1ead8]'
}

const PinIcon = () => (
  <svg {...iconProps}>
    <path d='M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z' />
    <circle cx='12' cy='9.5' r='2.5' />
  </svg>
)
const PhoneIcon = () => (
  <svg {...iconProps}>
    <path d='M5 4h3.5l1.8 4.5-2.2 1.4a11 11 0 0 0 5 5l1.4-2.2L19 14.5V18a2 2 0 0 1-2 2A13 13 0 0 1 3 6a2 2 0 0 1 2-2z' />
  </svg>
)
const MailIcon = () => (
  <svg {...iconProps}>
    <rect x='3' y='5' width='18' height='14' rx='1.5' />
    <path d='M3.5 6.5L12 13l8.5-6.5' />
  </svg>
)
const ChatIcon = () => (
  <svg {...iconProps}>
    <path d='M12 4a8 8 0 0 0-6.9 12L4 20l4.2-1.1A8 8 0 1 0 12 4z' />
  </svg>
)

/* ---------- small building blocks ---------- */
const InfoRow = ({
  icon,
  label,
  children
}: {
  icon: React.ReactNode
  label?: string
  children: React.ReactNode
}) => (
  <div className='flex items-start gap-4'>
    <span className='mt-0.5'>{icon}</span>
    <div>
      {label && (
        <p className='mb-1 text-[13px] font-medium tracking-[0.16em] text-[#f1ead8]'>
          {label}
        </p>
      )}
      <div className='text-md leading-6 text-[#f4f0e4]'>{children}</div>
    </div>
  </div>
)

export default function Contact () {
  return (
    <>
      
        
        <section
          id='contact'
          className='relative overflow-hidden  px-6 py-16 text-[#f4f0e4] sm:px-20 lg:py-24 md:mt-5'
        >
          {/* dotted texture + soft left vignette */}
          <div
            aria-hidden
            className='pointer-events-none absolute inset-0'
          />
          <div
            aria-hidden
            className='pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r from-black/30 to-transparent'
          />

          <div className='relative mx-auto max-w-360'>
            {/* Heading */}
            <header className='mx-auto max-w-3xl text-center'>
              <p className='text-[15px] font-semibold tracking-[0.25em] text-[#f4f0e4]'>
                Contact us
              </p>
              <h2 className='mt-2 text-4xl leading-tight sm:text-5xl lg:text-[56px]'>
                Let&rsquo;s talk about your dryer
              </h2>
              <p className='mx-auto mt-2 max-w-[44ch] text-[17px] leading-6'>
                Tell us your crop, volume and location. We will recommend the
                right dryer and reply personally.
              </p>
            </header>

            {/* Two columns: form (left) / Visit Us (right) */}
            <div className='mt-16 grid items-start gap-14 lg:mt-20 lg:grid-cols-[1.47fr_1fr] lg:gap-24 xl:px-12'>
              <EnquiryForm />

              <aside className='border border-[#d9d0bd]/70 bg-[#c9d6cc]/35 backdrop-blur-[1px]'>
                {/* Addresses */}
                <div className='px-5 pb-10 pt-9'>
                  <h3 className='text-[17px] font-medium tracking-[0.2em] text-[#f4f0e4]'>
                    Visit Us
                  </h3>

                  <div className='mt-8 flex flex-col gap-8'>
                    <InfoRow icon={<PinIcon />} label='Head Office'>
                      {HEAD_OFFICE}
                    </InfoRow>
                    <InfoRow icon={<PinIcon />} label='Factory'>
                      {FACTORY}
                    </InfoRow>
                  </div>
                </div>

                <hr className='border-0 border-t border-[#a8802f]' />

                {/* Contact methods */}
                <div className='flex flex-col gap-6 px-10 py-9'>
                  <InfoRow icon={<PhoneIcon />} label='Call'>
                    <a href={`tel:${PHONE_TEL}`} className='hover:underline'>
                      {PHONE_DISPLAY}
                    </a>
                  </InfoRow>
                  <InfoRow icon={<MailIcon />} label='Email'>
                    <a href={`mailto:${EMAIL}`} className='hover:underline'>
                      {EMAIL}
                    </a>
                  </InfoRow>
                  <InfoRow icon={<ChatIcon />}>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}`}
                      target='_blank'
                      rel='noreferrer'
                      className='hover:underline'
                    >
                      Chat on WhatsApp
                    </a>
                  </InfoRow>
                </div>

                {/* Map */}
                <iframe
                  title='Head office location on Google Maps'
                  src={MAP_SRC}
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                  allowFullScreen
                  className='block h-101.75 w-full border-0'
                />
              </aside>
            </div>
          </div>
        </section>
        
      
    </>
  )
}
