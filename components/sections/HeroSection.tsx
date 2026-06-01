import { ReactNode } from 'react'
import Button from '@/components/ui/Button'

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
        background: 'linear-gradient(110deg, #5c3a8a 0%, #9b3f7a 35%, #d4564a 65%, #e8923a 85%, #f0a840 100%)',
      }}
    >
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 lg:px-8 py-36 text-center">

        {/* Eyebrow pill */}
        {eyebrow && (
          <div className="flex justify-center mb-7">
            <span
              className="text-white/95 text-xs font-semibold uppercase tracking-[0.18em] rounded-full px-5 py-1.5"
              style={{ border: '1px solid rgba(255,255,255,0.45)' }}
            >
              {eyebrow}
            </span>
          </div>
        )}

        {/* Serif headline */}
        <h1
          className="text-white font-bold leading-[1.1] mb-7"
          style={{
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontSize: 'clamp(3rem, 6.5vw, 5.2rem)',
            textShadow: '0 2px 20px rgba(60,20,80,0.18)',
          }}
        >
          {title}
        </h1>

        {subtitle && (
          <p
            className="text-white/88 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-11"
            style={{ textShadow: '0 1px 8px rgba(60,20,80,0.12)' }}
          >
            {subtitle}
          </p>
        )}

        {(primaryCta || secondaryCta) && (
          <div className="flex flex-wrap gap-4 justify-center">
            {primaryCta && (
              <a
                href={primaryCta.href}
                className="inline-flex items-center justify-center font-semibold rounded-lg px-8 py-4 text-base transition-all duration-200 hover:scale-105 active:scale-95"
                style={{
                  background: 'linear-gradient(135deg, #e8923a, #d4624a)',
                  color: '#fff',
                  boxShadow: '0 4px 20px rgba(232,146,58,0.45)',
                  fontFamily: 'DM Sans, sans-serif',
                }}
              >
                {primaryCta.label}
              </a>
            )}
            {secondaryCta && (
              <a
                href={secondaryCta.href}
                className="inline-flex items-center justify-center font-semibold rounded-lg px-8 py-4 text-base transition-all duration-200 hover:bg-white/15 active:scale-95"
                style={{
                  border: '1.5px solid rgba(255,255,255,0.65)',
                  color: '#fff',
                  fontFamily: 'DM Sans, sans-serif',
                }}
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
