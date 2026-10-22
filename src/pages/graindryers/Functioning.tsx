const youtubeVideoId = 'REPLACE_WITH_YOUTUBE_VIDEO_ID'

const Functioning = () => {
  return (
    <section
      aria-labelledby="functioning-title"
      className="relative overflow-hidden bg-[#f5f4f1] px-5 py-12 sm:px-8 sm:py-16 lg:px-12"
      style={{
        backgroundImage:
          'radial-gradient(rgba(30, 41, 35, 0.08) 1px, transparent 1px)',
        backgroundSize: '16px 16px'
      }}
    >
      <div className="mx-auto max-w-6xl">
        <header className="mb-7 sm:mb-8">
          <h2
            id="functioning-title"
            className="text-2xl font-medium tracking-[0.08em] text-[#222923] sm:text-3xl"
          >
            FUNCTIONING
          </h2>
          <div className="mt-3 h-1 w-20 rounded-full bg-[#ff5938]" />
        </header>

        <div className="overflow-hidden rounded-xl border border-black/10 bg-black shadow-[0_18px_45px_-20px_rgba(0,0,0,0.45)]">
          <div className="aspect-video w-full">
            <iframe
              className="h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${youtubeVideoId}`}
              title="How the Pedrotti grain dryer works"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>

        <p className="mt-6 max-w-5xl text-base leading-7 text-[#737873] sm:mt-8 sm:text-lg sm:leading-8">
          The Pedrotti grain dryers are{' '}
          <strong className="font-semibold text-[#4f5550]">
            extremely versatile machines
          </strong>
          , fully self-contained. They do not require external mechanical
          equipment or building work. Their subsequent-batch system and{' '}
          <strong className="font-semibold text-[#4f5550]">
            continuous crop recirculation
          </strong>{' '}
          help achieve an even, uniform drying result.
        </p>
      </div>
    </section>
  )
}

export default Functioning
