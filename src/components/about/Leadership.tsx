import FounderImg from '../../assets/about/Owners/manikandan.jpg'
import BalanImg from '../../assets/about/Owners/balan.jpg'
import DilipImg from '../../assets/about/Owners/dhilipan.jpg'

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
      Role: 'General Manager — Marketi/ng, Sales & Business Development',
      desc: "A Mechanical Engineer from Government College of Technology, Coimbatore, with 28 years of experience in marketing & sales, program & product life cycle management, business development & strategies, and CRM across GE Consumer & Industrial (USA), Boston Scientific (USA), KLA-Tencor (USA), HCL Technologies & Americas."
    }
  ]

  return (
    <div className="md:py-20 py-10 ">
      <div className="mx-auto px-10">

        {/* Section header — matches the timeline's masthead language */}
        <div className="py-10 mb-4">
         
          <h4
           
            className="text-4xl font-semibold"
          >
            Kardi leadership team
          </h4>
          <div style={{ backgroundColor: '#A6824F' }} className="w-12 h-px mt-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Foundercard.map((item, index) => (
            <div
              key={index}
              className="group relative h-87.5 overflow-hidden cursor-pointer w-full"
            >
              {/* Photo — stays visible at all times, never fully covered */}
              <img
                src={item.Image}
                alt={item.OwnerName}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />

              {/* Dimming veil on hover — photo recedes but never disappears */}
             

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