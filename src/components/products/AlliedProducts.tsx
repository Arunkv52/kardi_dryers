
import { motion } from 'framer-motion'

// Renamed from the leftover `offices` — this was clearly copy-pasted from a
// locations component (the Headquarters / Field office tags didn't map to
// anything real for furnace equipment), so that field has been dropped.
const heatingSystems = [
  { name: 'Wood Log Furnace' },
  { name: 'Wood Chips Furnace' },
  { name: 'Biomass Pellet Burner' },
  { name: 'Diesel/Kerosene Burner' },
  { name: 'Biomass Heater' },
  { name: 'Thermic Fluid Heater' },
  { name: 'Hot Water System' }
]

const AlliedProducts = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#083326] px-6 py-24 text-white md:px-10">
      {/* ambient glow — single accent, kept quiet */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-0 h-[480px] w-[480px] rounded-full bg-[#A6824F]/10 blur-[120px]"
      />

      <div className="relative mx-auto w-full max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left content — pins in place while the list scrolls beside it */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <span className="mb-6 block text-sm font-thin tracking-[0.25em] uppercase text-[#A6824F]">
              Furnaces, Burners &amp; Heating Systems
            </span>

            <h2
              className="max-w-xl text-3xl font-light leading-tight tracking-tight md:text-4xl"
              style={{ fontFamily: 'var(--font-serif, Georgia, serif)' }}
            >
              Complete heat source solutions to power every dryer — from wood
              log furnaces to thermic fluid heaters.
            </h2>

            <div className="mt-10 flex items-center gap-4">
              <div className="h-px w-10 bg-[#A6824F]" />
              <span className="text-xs uppercase tracking-[0.2em] text-white/40">
                {String(heatingSystems.length).padStart(2, '0')} systems
              </span>
            </div>
          </div>

          {/* Right — numbered index list */}
          <div>
            {heatingSystems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex items-baseline gap-6 border-b border-white/10 py-7 pl-6 transition-colors duration-500 hover:border-[#A6824F]/40 md:py-8"
              >
                {/* accent bar, grows in from the gutter */}
                <span className="absolute inset-y-0 left-0 w-[3px] origin-center scale-y-0 bg-[#A6824F] transition-transform duration-500 group-hover:scale-y-100" />

                <span className="w-8 flex-shrink-0 font-mono text-[11px] tracking-[0.15em] text-[#8C8678] transition-colors duration-500 group-hover:text-[#A6824F]">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <span
                  className="text-2xl font-light text-white/65 transition-colors duration-500 group-hover:text-white md:text-3xl"
                  style={{ fontFamily: 'var(--font-serif, Georgia, serif)' }}
                >
                  {item.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AlliedProducts