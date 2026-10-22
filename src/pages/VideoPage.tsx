import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import KardiBackground from '../components/KardiBackground'

const CHANNEL_URL = 'https://www.youtube.com/@KardiPedrotti'

const videos = [
  {
    id: '52qsDSoIKXA',
    title: 'From Despair to Joy: Shielding the Farmer’s Dream/விவசாயிகளின் கனவைக் காக்கும் ஒரு விடியல்',
  },
  {
    id: 'oyhSQAAaR9w',
    title: 'Happy Farmer with his Newly Purchased Mobile Paddy Dryer',
  },
  {
    id: 'N9-Nq5g_-uo',
    title: 'Farmer Sekars Farm Revolution: Mobile Grain Drying with Kardi Pedrotti',
  },
]

type Video = (typeof videos)[number]

function VideoCard({ video }: { video: Video }) {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <article className="overflow-hidden border border-[#A6824F]/25 bg-black/60 p-2">
      <div className="aspect-video w-full overflow-hidden bg-black">
        {isPlaying ? (
          <iframe
            className="h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1`}
            title={video.title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setIsPlaying(true)}
            aria-label={`Play ${video.title}`}
            className="group relative block h-full w-full"
          >
            <img
              src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
            />

            <span className="absolute inset-0 flex items-center justify-center bg-black/20 transition group-hover:bg-black/35">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#A6824F] text-xl text-white transition group-hover:scale-110">
                ▶
              </span>
            </span>
          </button>
        )}
      </div>

      <h2 className="px-2 py-3 text-sm leading-6 text-white">{video.title}</h2>
    </article>
  )
}

export default function YouTubeShowcase() {
  return (
    <KardiBackground>
      <Navbar />

      <main className="relative overflow-hidden py-20 text-white md:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-0 h-[480px] w-[480px] rounded-full bg-[#A6824F]/10 blur-[120px]"
        />

        <header className="relative mx-auto max-w-3xl px-6 text-center">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-[#A6824F]">
            Kardi Pedrotti on YouTube
          </p>

          <h1
            className="text-4xl leading-tight md:text-5xl"
            style={{ fontFamily: 'var(--font-serif, Georgia, serif)' }}
          >
            Videos
          </h1>

          <p className="mx-auto mt-5 max-w-xl leading-[1.8] text-white/60">
            Explore Kardi Pedrotti videos about our dryers, products, and work
            in the field.
          </p>
        </header>

        <section
          aria-label="YouTube videos"
          className="relative mx-auto mt-12 max-w-6xl px-6"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <a
              href={CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#A6824F] px-6 py-3 text-sm tracking-[0.05em] text-[#A6824F] transition-colors duration-300 hover:bg-[#A6824F] hover:text-[#15140F]"
            >
              Visit our YouTube channel →
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </KardiBackground>
  )
}