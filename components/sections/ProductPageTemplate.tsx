import HeroSection    from '@/components/sections/HeroSection'
import SectionWrapper from '@/components/sections/SectionWrapper'
import SectionHeader  from '@/components/sections/SectionHeader'
import FeatureCard    from '@/components/sections/FeatureCard'
import CTABanner      from '@/components/sections/CTABanner'
import Button         from '@/components/ui/Button'
import { ElementType } from "react"

interface Feature   { Icon: ElementType; title: string; description: string }
interface Step      { number: number; title: string; description: string }
interface Integration { name: string }

interface ProductPageProps {
  badge:        string
  title:        string
  tagline:      string
  subtitle:     string
  features:     Feature[]
  steps:        Step[]
  integrations: Integration[]
  pricingTier:  string
}

export default function ProductPageTemplate({
  badge, title, tagline, subtitle, features, steps, integrations, pricingTier,
}: ProductPageProps) {
  return (
    <>
      <HeroSection
        badge={badge}
        eyebrow="Product"
        title={title}
        subtitle={subtitle}
        primaryCta={{ label: 'Book a Demo', href: '/contact#demo' }}
        secondaryCta={{ label: 'View Pricing', href: '/pricing' }}
      />

      {/* Feature Overview */}
      <SectionWrapper bg="mist">
        <SectionHeader eyebrow="Features" title={tagline} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => <FeatureCard key={f.title} {...f} />)}
        </div>
      </SectionWrapper>

      {/* How It Works */}
      <SectionWrapper bg="cloud">
        <SectionHeader eyebrow="How It Works" title="Simple setup. Powerful results." />
        <div className="max-w-3xl mx-auto space-y-6">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-5 items-start bg-summit-mist rounded-card p-6 border border-summit-dusk">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-summit-amber to-summit-coral text-white font-bold flex items-center justify-center shrink-0">
                {step.number}
              </div>
              <div>
                <h3 className="font-display font-bold text-summit-slate text-base mb-1">{step.title}</h3>
                <p className="text-summit-stone text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Integrations */}
      <SectionWrapper bg="mist">
        <SectionHeader eyebrow="Integrations" title="Works with your existing stack" />
        <div className="flex flex-wrap justify-center gap-3">
          {integrations.map((i) => (
            <span key={i.name} className="px-4 py-2 bg-summit-cloud border border-summit-dusk rounded-full text-sm font-medium text-summit-stone">
              {i.name}
            </span>
          ))}
        </div>
      </SectionWrapper>

      {/* Pricing callout */}
      <SectionWrapper bg="cloud">
        <div className="max-w-xl mx-auto text-center bg-summit-plum rounded-card p-10">
          <p className="text-summit-dusk text-xs font-semibold uppercase tracking-widest mb-3">Available On</p>
          <p className="font-display font-bold text-white text-2xl mb-2">{pricingTier}</p>
          <p className="text-white/60 text-sm mb-6">and above</p>
          <Button href="/pricing" variant="primary">See All Plans</Button>
        </div>
      </SectionWrapper>

      <CTABanner />
    </>
  )
}
