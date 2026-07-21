
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const displayFont = { fontFamily: "'Fraunces', ui-serif, Georgia, serif" };
const sansFont = { fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif" };











export default function CustomBuiltPage() {



  return (
    <>

      <Navbar/>
      <div className="min-h-screen bg-[#F3EEE3] text-[#201F1A]" style={sansFont}>
      {/* ---------------- Hero banner ---------------- */}
      <header className="relative overflow-hidden bg-gradient-to-b from-[#0B1912] to-[#16281C] px-6 pb-16 pt-18 md:px-10 md:pb-20">
       

        <div className="mx-auto mt-18 max-w-3xl text-center">
          <p className="text-[11px] font-medium tracking-[0.25em] text-white/50">
            KARDI DRYERS
          </p>
          <h1 className="mt-3 text-4xl leading-tight text-white md:text-6xl" style={displayFont}>
            Built around your crop,
            <br />
            not the other way around.
          </h1>
        </div>
      </header>

      {/* ---------------- Intro + stat strip ---------------- */}
      <section className="mx-auto max-w-3xl px-6 pt-14 md:px-0 text-center">
        <p className="text-xs font-medium tracking-[0.2em] text-[#E2572B]">
          CUSTOM ENGINEERED
        </p>
        <h2 className="mt-3 text-3xl md:text-4xl" style={displayFont}>
          Custom Built
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#201F1A]/70 md:text-base">
          No two harvests are the same. Tell us your crop, your scale, and
          your fuel source, and we'll configure a dryer around them — not
          the reverse. Every custom build starts from the same engineering
          used across our standard lineup.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {/* <a
            href="#configure"
            className="rounded-sm bg-[#201F1A] px-6 py-3 text-sm font-medium text-white transition hover:bg-black"
          >
            Start your build
          </a> */}
          <a
            href="/contact"
            className="rounded-sm border border-black/15 px-6 py-3 text-sm font-medium transition hover:border-black/30"
          >
            Talk to an engineer
          </a>
        </div>
      </section>

      <section className="mx-auto mt-14 max-w-5xl border-y border-black/[0.08] px-6 md:px-10">
        <div className="grid grid-cols-1 divide-y divide-black/[0.08] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {[
            { big: "3 inputs", small: "CROP, SCALE, FUEL" },
            { big: "100%", small: "TAILORED SPEC SHEET" },
            { big: "Nationwide", small: "INSTALL & SERVICE" },
          ].map((s) => (
            <div key={s.small} className="px-6 py-10 text-center">
              <p className="text-2xl md:text-3xl" style={displayFont}>
                {s.big}
              </p>
              <p className="mt-2 text-[11px] font-medium tracking-[0.18em] text-[#8C8874]">
                {s.small}
              </p>
            </div>
          ))}
        </div>
      </section>

     

      {/* ---------------- CTA band ---------------- */}
      <section className="bg-[#0B1912] px-6 py-20 text-center md:py-24">
        <h2 className="mx-auto max-w-xl text-3xl text-white md:text-4xl" style={displayFont}>
          Ready to bring this to your facility?
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-white/60">
          Send us your build above and our team will follow up within one
          business day.
        </p>
        <a
          href="/contact"
          className="mt-8 inline-block rounded-sm bg-[#C08A3E] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#a97733]"
        >
          Talk to our team
        </a>
      </section>
    </div>
    <div>
      
      {/* Footer */}
      <Footer />

    </div>
    
    </>
  );
}