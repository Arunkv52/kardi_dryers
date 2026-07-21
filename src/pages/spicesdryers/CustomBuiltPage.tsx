
import { useMemo, useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const displayFont = { fontFamily: "'Fraunces', ui-serif, Georgia, serif" };
const sansFont = { fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif" };

type Crop = "Paddy" | "Maize" | "Coffee" | "Chilli & Spice";
type Scale = "Small farm" | "Medium mill" | "Large processor";
type Fuel = "Diesel" | "Electric" | "Biomass" | "Hybrid";

const CROPS: Crop[] = ["Paddy", "Maize", "Coffee", "Chilli & Spice"];
const SCALES: Scale[] = ["Small farm", "Medium mill", "Large processor"];
const FUELS: Fuel[] = ["Diesel", "Electric", "Biomass", "Hybrid"];

const SCALE_CAPACITY: Record<Scale, { batch: string; power: string; code: string }> = {
  "Small farm": { batch: "0.5 - 1 Ton", power: "5.5 kW (15 PTO HP)", code: "S" },
  "Medium mill": { batch: "2 - 2.5 Ton", power: "11.2 kW (30 PTO HP)", code: "M" },
  "Large processor": { batch: "6 - 8 Ton", power: "22 kW (60 PTO HP)", code: "L" },
};

const FUEL_NOTE: Record<Fuel, string> = {
  Diesel: "Single-stage automatic diesel burner",
  Electric: "Grid-fed resistive heating array",
  Biomass: "Husk / biomass-fed furnace",
  Hybrid: "Diesel primary, biomass backup",
};

const CROP_NOTE: Record<Crop, { drying: string; output: string }> = {
  Paddy: { drying: "4 hrs", output: "12 tons/day" },
  Maize: { drying: "5 hrs", output: "15 tons/day" },
  Coffee: { drying: "6 hrs", output: "8 tons/day" },
  "Chilli & Spice": { drying: "7 hrs", output: "4 tons/day" },
};

function buildSpec(crop: Crop, scale: Scale, fuel: Fuel) {
  const s = SCALE_CAPACITY[scale];
  const c = CROP_NOTE[crop];
  const modelCode = `${crop.slice(0, 2).toUpperCase()}-${s.code}${fuel.slice(0, 1)}`;
  return [
    { label: "Suggested model", value: modelCode },
    { label: "Batch capacity", value: `${s.batch} (${crop})` },
    { label: "Drying time", value: c.drying },
    { label: "Average daily output", value: c.output },
    { label: "Power required", value: s.power },
    { label: "Fuel system", value: FUEL_NOTE[fuel] },
    { label: "Fan type", value: "Centrifugal" },
    { label: "Agitator", value: "Yes" },
  ];
}

function PillGroup<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: T[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <div>
      <p className="text-[11px] font-medium tracking-[0.18em] text-[#8C8874]">
        {label.toUpperCase()}
      </p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label={label}>
        {options.map((opt) => {
          const active = opt === value;
          return (
            <button
              key={opt}
              type="button"
              onClick={() => onChange(opt)}
              aria-pressed={active}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                active
                  ? "border-[#E2572B] bg-[#E2572B] text-white"
                  : "border-black/15 bg-transparent text-[#201F1A]/80 hover:border-black/30"
              }`}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function CustomBuiltPage() {
  const [crop, setCrop] = useState<Crop>("Paddy");
  const [scale, setScale] = useState<Scale>("Medium mill");
  const [fuel, setFuel] = useState<Fuel>("Diesel");

  const spec = useMemo(() => buildSpec(crop, scale, fuel), [crop, scale, fuel]);

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