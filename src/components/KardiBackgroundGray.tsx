import type { ReactNode } from 'react'

type KardiBackgroundProps = {
  children?: ReactNode
  className?: string
}

export default function KardiBackground({
  children,
  className = '',
}: KardiBackgroundProps) {
  return (
    <section
      className={`relative isolate min-h-[500px] overflow-hidden bg-[#959595] ${className}`}
    >
      {/* Dot pattern, fading toward the left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(105, 105, 105, 0.8) 4px, transparent 7.5px)',
          backgroundSize: '9px 9px',
          maskImage:
            'linear-gradient(to right, transparent 0%, black 24%, black 100%)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent 0%, black 24%, black 100%)',
        }}
      />

      {/* Subtle shading over the pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_55%_50%,transparent_15%,rgba(2,31,24,0.38)_100%)]"
      />

      {/* Your website content */}
      <div className="relative z-10">{children}</div>
    </section>
  )
}