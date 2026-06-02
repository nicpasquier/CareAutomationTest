import { ReactNode } from 'react'

interface HeroProps {
  eyebrow?:      string
  title:         string
  subtitle?:     string
  primaryCta?:   { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  badge?:        string
  children?:     ReactNode
  centered?:     boolean
}

export default function HeroSection({
  eyebrow, title, subtitle, primaryCta, secondaryCta, children,
}: HeroProps) {
  return (
    <section
      className="relative min-h-[92vh] flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(115deg, #2E1A2E 0%, #6B2B3A 28%, #A84E2A 58%, #C97C3A 80%, #D4A054 100%)',
      }}
    >
      {/* Subtle grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />

      {/* Warm vignette at bottom */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/20 to-transparent" />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 lg:px-8 py-36 text-center">

        {eyebrow && (
          <div className="flex justify-center mb-7">
            <span
              className="text-white/80 text-xs font-semibold uppercase tracking-[0.22em]"
              style={{
                fontFamily: 'Sora, sans-serif',
                border: '1px solid rgba(255,255,255,0.30)',
                borderRadius: '100px',
                padding: '6px 20px',
                letterSpacing: '0.22em',
              }}
            >
              {eyebrow}
            </span>
          </div>
        )}

        <h1
          className="text-white font-bold leading-[1.08] mb-7"
          style={{
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontSize: 'clamp(2.8rem, 6vw, 5rem)',
            textShadow: '0 2px 32px rgba(46,26,46,0.35)',
          }}
        >
          {title}
        </h1>

        {subtitle && (
          <p
            className="text-white/75 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-11"
            style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
          >
            {subtitle}
          </p>
        )}

        {(primaryCta || secondaryCta) && (
          <div className="flex flex-wrap gap-4 justify-center">
            {primaryCta && (
              <a
                href={primaryCta.href}
                className="inline-flex items-center justify-center font-semibold rounded-lg px-8 py-4 text-base transition-all duration-200 hover:brightness-110 active:scale-95"
                style={{
                  background: 'linear-gradient(135deg, #C97C3A, #B85C3E)',
                  color: '#fff',
                  boxShadow: '0 4px 24px rgba(180,80,40,0.40)',
                  fontFamily: 'Sora, sans-serif',
                  fontSize: '0.95rem',
                }}
              >
                {primaryCta.label}
              </a>
            )}
            {secondaryCta && (
              <a
                href={secondaryCta.href}
                className="inline-flex items-center justify-center font-semibold rounded-lg px-8 py-4 text-base transition-all duration-200 active:scale-95"
                style={{
                  border: '1.5px solid rgba(255,255,255,0.45)',
                  color: '#fff',
                  fontFamily: 'Sora, sans-serif',
                  fontSize: '0.95rem',
                  backdropFilter: 'blur(4px)',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.10)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                {secondaryCta.label}
              </a>
            )}
          </div>
        )}

        {children}
      </div>
    </section>
  )
}
