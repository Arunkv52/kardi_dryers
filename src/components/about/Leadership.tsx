import FounderImg from '../../assets/about/Owners/manikandan.jpg'
import BalanImg from '../../assets/about/Owners/balan.jpg'
import DilipImg from '../../assets/about/owners/dhilipan.jpg'

const Leadership = () => {
  const Foundercard = [
    {
      Image: FounderImg,
      OwnerName: 'K M Manikandan',
      Role: 'Founder & Managing Director',
      desc: "An agriculturist and technocrat possessing expertise in Heat & Mass Transfer, Mr. Manikandan started his journey by developing the world's first small-scale dryer for high-value crops like cardamom and pepper. An alumnus of PSG College of Technology, Coimbatore, he holds a degree in Mechanical Engineering with over 4 decades of experience in technology development, global marketing & sales."
    },
    {
      Image: BalanImg,
      OwnerName: 'M S Balan',
      Role: 'Director',
      desc: "A Mechanical Engineer and Fellow of the Institution of Engineers of India (FIE) with 5 decades of experience in marketing, sales, business strategies & development. He has held senior management roles for marketing, planning & strategizing in various MNCs across cement, power, steel, chemicals & fertiliser industries, and has been mentoring youngsters & entrepreneurs throughout his long career."
    },
    {
      Image: DilipImg,
      OwnerName: 'P Dilipan',
      Role: 'General Manager — Marketing, Sales & Business Development',
      desc: "A Mechanical Engineer from Government College of Technology, Coimbatore, with 28 years of experience in marketing & sales, program & product life cycle management, business development & strategies, and CRM across GE Consumer & Industrial (USA), Boston Scientific (USA), KLA-Tencor (USA), HCL Technologies & Americas."
    }
  ]

  return (
    <div className="py-20 bg-white">
      <div className="mx-auto px-10">

        {/* Section header — matches the timeline's masthead language */}
        <div className="py-10 mb-4">
          <p
           
            className="text-xs text-[#53823c] uppercase tracking-[0.18em] font-medium mb-4"
          >
            Leadership
          </p>
          <h4
           
            className="text-4xl font-semibold text-[#53823c]"
          >
            Kardi leadership team
          </h4>
          <div style={{ backgroundColor: '#A6824F' }} className="w-12 h-px mt-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Foundercard.map((item, index) => (
            <div
              key={index}
              className="group relative h-[480px] overflow-hidden cursor-pointer w-full"
            >
              {/* Photo — stays visible at all times, never fully covered */}
              <img
                src={item.Image}
                alt={item.OwnerName}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />

              {/* Dimming veil on hover — photo recedes but never disappears */}
              <div
                style={{ backgroundColor: 'rgba(20,20,18,0.45)' }}
                className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />

              {/* Resting state: name + role only, lower third */}
              <div
                style={{
                  background: 'linear-gradient(to top, rgba(20,20,18,0.92), transparent)'
                }}
                className="absolute bottom-0 left-0 w-full p-6 pt-16 transition-opacity duration-500 group-hover:opacity-0"
              >
                <h3
                  style={{ fontFamily: 'var(--font-serif, Georgia, serif)', color: '#F0EEE8' }}
                  className="text-2xl font-normal mb-1"
                >
                  {item.OwnerName}
                </h3>
                <p
                  className="text-[#53823c] text-[11px] uppercase tracking-[0.12em]"
                >
                  {item.Role}
                </p>
              </div>

              {/* Hover state: bio panel rises over lower ~62%, photo stays visible above it */}
              <div
                style={{
                  height: '62%',
                  backgroundColor: 'rgba(20,20,18,0.82)',
                  borderTop: '0.5px solid rgba(201,168,106,0.35)'
                }}
                className="absolute bottom-0 left-0 w-full px-6 pt-5 pb-6 flex flex-col opacity-0 translate-y-6 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0"
              >
                <h3
                  className="text-xl font-normal mb-1 flex-shrink-0 text-[#F0EEE8]"
                >
                  {item.OwnerName}
                </h3>

                <p
                  style={{ color: '#C9A86A' }}
                  className="text-[11px] uppercase tracking-[0.1em] mb-3 flex-shrink-0"
                >
                  {item.Role}
                </p>

                <div style={{ backgroundColor: 'rgba(201,168,106,0.3)' }} className="w-8 h-px mb-3 flex-shrink-0" />

                {/* Scrollable bio zone — long bios (Balan) scroll within this fixed
                    area instead of overflowing the card or truncating content silently.
                    `flex-1 min-h-0` is required: without min-h-0, a flex child with
                    overflow-y-auto will grow to fit its content instead of scrolling,
                    which would push the card taller than 480px and break the grid. */}
                <div className="relative flex-1 min-h-0">
                  <p
                    style={{ color: '#C2BCAC', lineHeight: 1.65 }}
                    className="text-[13px] overflow-y-auto pr-2 h-full leadership-bio-scroll"
                  >
                    {item.desc}
                  </p>
                  {/* Bottom fade — signals "more text below" before the visitor
                      has scrolled, so truncation reads as intentional, not broken. */}
                  <div
                    style={{
                      background:
                        'linear-gradient(to bottom, rgba(20,20,18,0) 0%, rgba(20,20,18,0.85) 90%)'
                    }}
                    className="absolute bottom-0 left-0 right-2 h-7 pointer-events-none"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slim custom scrollbar for the bio panel — kept understated, bronze
          thumb on transparent track, consistent with the rest of the palette. */}
      <style>{`
        .leadership-bio-scroll::-webkit-scrollbar {
          width: 3px;
        }
        .leadership-bio-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .leadership-bio-scroll::-webkit-scrollbar-thumb {
          background-color: rgba(201, 168, 106, 0.5);
          border-radius: 2px;
        }
        .leadership-bio-scroll {
          scrollbar-width: thin;
          scrollbar-color: rgba(201, 168, 106, 0.5) transparent;
        }
      `}</style>
    </div>
  )
}

export default Leadership