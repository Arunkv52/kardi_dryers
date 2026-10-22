import { Award, BadgeCheck } from 'lucide-react'
import IcrImg from '../../assets/products/icar-cbe.png'

const Certificates = () => {
  return (
    <section
      id="certificates"
      aria-labelledby="certificates-title"
      className="overflow-hidden bg-[#f7f6f2] px-5 py-16 sm:px-8 md:py-24 lg:px-12"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* Certificate information */}
        <div className="max-w-xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#dce8df] bg-white px-4 py-2 text-sm font-semibold text-[#135846] shadow-sm">
            <BadgeCheck aria-hidden="true" size={17} />
            Tested &amp; approved
          </div>

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#e95435]">
            Quality you can trust
          </p>

          <h2
            id="certificates-title"
            className="text-3xl font-semibold leading-tight tracking-tight text-[#123a2b] sm:text-4xl md:text-5xl"
          >
            Proven performance for better grain drying.
          </h2>

          <p className="mt-5 text-base leading-7 text-[#59665f] sm:text-lg">
            Kardi Dryers’ Basic 25 and Basic 35 models have been tested and
            approved by ICAR – Coimbatore, supporting our commitment to
            dependable grain drying solutions.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <div className="flex items-center gap-3 rounded-2xl border border-[#e3e8e2] bg-white px-4 py-3 shadow-sm">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#edf5ee] text-[#135846]">
                <Award aria-hidden="true" size={20} />
              </span>
              <span>
                <span className="block text-sm font-semibold text-[#193c2d]">
                  Basic 25 &amp; Basic 35
                </span>
                <span className="mt-0.5 block text-xs text-[#69756e]">
                  Tested models
                </span>
              </span>
            </div>

            <div className="rounded-2xl border border-[#e3e8e2] bg-white px-4 py-3 shadow-sm">
              <span className="block text-sm font-semibold text-[#193c2d]">
                ICAR – Coimbatore
              </span>
              <span className="mt-0.5 block text-xs text-[#69756e]">
                Testing &amp; approval
              </span>
            </div>
          </div>

          <p className="mt-8 border-l-2 border-[#ff5938] pl-4 text-sm font-medium italic leading-6 text-[#7a806f]">
            “Bringing 65 years of grain drying legacy to India”
          </p>
        </div>

        {/* Certificate image */}
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute -right-8 -top-8 h-36 w-36 rounded-full bg-[#ff5938]/10 blur-2xl sm:h-48 sm:w-48"
          />
          <div className="relative rounded-[1.75rem] border border-white bg-white p-3 shadow-[0_24px_70px_-30px_rgba(19,88,70,0.35)] sm:rounded-[2rem] sm:p-5">
            <div className="overflow-hidden rounded-2xl bg-[#f7f6f2]">
              <img
                src={IcrImg}
                alt="Basic 25 and Basic 35 tested and approved by ICAR – Coimbatore"
                className="block h-auto w-full object-contain"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col gap-1 px-2 pb-1 pt-4 sm:flex-row sm:items-center sm:justify-between sm:px-1">
              <p className="text-sm font-semibold text-[#193c2d]">
                Basic 25 &amp; Basic 35
              </p>
              <p className="text-sm text-[#69756e]">ICAR – Coimbatore</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certificates
