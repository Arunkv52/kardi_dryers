const HeroSection = () => {
  return (
    <div className="relative bg-prod-hero bg-cover bg-center h-[80vh] min-h-[480px] max-h-[760px]">
      {/* Cinematic overlay — darkest at the bottom where the type sits, fading
          out toward the top so the photograph still reads clearly up there.
          This replaces relying on the background image alone for contrast,
          which is fragile if a future photo swap is lighter or busier. */}
      <div
        style={{
          background:
            'linear-gradient(to top, rgba(10,10,9,0.92) 0%, rgba(10,10,9,0.55) 38%, rgba(10,10,9,0.12) 70%, rgba(10,10,9,0) 100%)'
        }}
        className="absolute inset-0"
      />

      {/* Content block — anchored to the now-`relative` parent above, so its
          position is well-defined instead of resolving against an
          unintended ancestor. Padding scales down on small screens so the
          text block doesn't crowd the viewport edge on mobile. */}
      <div className="absolute bottom-0 left-0 px-6 sm:px-10 md:px-10 pb-12 sm:pb-16 md:pb-20 max-w-2xl">
        <div style={{ backgroundColor: '#C9A86A' }} className="w-8 h-px mb-4" />

        <p
          style={{ color: '#C9A86A' }}
          className="text-[11px] sm:text-xs uppercase tracking-[0.16em] mb-3"
        >
          Kardi Dryers
        </p>

        {/* Responsive clamp instead of a flat text-8xl: scales smoothly
            between a readable mobile minimum and the original large desktop
            size, rather than overflowing small viewports. */}
        <h1 className="text-[#F5F3ED] text-6xl">
          Dryers for every crop, scale & fuel
        </h1>
      </div>
    </div>
  )
}

export default HeroSection