import HeroImg from '../../assets/about/hero-bg.jpg'

const HeroSection = () => {
  return (
    <div className="relative bg-cover bg-center h-[80vh] min-h-[520px] max-h-[760px]" style={{ backgroundImage: `url(${HeroImg})` }}>
      {/* Cinematic overlay — darkest at the bottom where the type sits,
          matching the treatment used on the Products hero for a consistent
          full-bleed photographic language across the site. */}
      <div
        style={{
          background:
            'linear-gradient(to top, rgba(8,10,8,0.94) 0%, rgba(8,10,8,0.62) 40%, rgba(8,10,8,0.18) 72%, rgba(8,10,8,0) 100%)'
        }}
        className="absolute inset-0"
      />

      <div className="absolute bottom-0 left-0 px-6 sm:px-10 md:px-10 pb-14 sm:pb-16 md:pb-20 max-w-3xl">
        <div className="bg-gold w-8 h-px mb-4" />

        <p className="text-white text-[11px] sm:text-xs uppercase tracking-[0.16em] mb-3">
          Kardi Dryers — Services
        </p>

        <h1 className="text-[#F5F3ED] text-5xl  md:text-5xl font-light leading-[1.05] font-serif mb-6">
          From the first site visit
          <br />
          to the next ten harvests.
        </h1>

        <p className="text-white/60 text-sm sm:text-base tracking-wide">
          25+ years of engineering experience &nbsp;·&nbsp; 4,000+ dryers
          installed &nbsp;·&nbsp; Manufactured in Chennai &amp; Kerala
        </p>
      </div>
    </div>
  )
}

export default HeroSection
