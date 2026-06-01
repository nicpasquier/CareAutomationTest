import HeroSection   from '@/components/sections/HeroSection'
import SectionWrapper from '@/components/sections/SectionWrapper'
import SectionHeader  from '@/components/sections/SectionHeader'
import FeatureCard    from '@/components/sections/FeatureCard'
import SolutionCard   from '@/components/sections/SolutionCard'
import CTABanner      from '@/components/sections/CTABanner'
import { ElementType } from "react"

interface Step  { number: number; title: string; description: string }
interface Benefit { Icon: ElementType; title: string; description: string }
interface RelatedProduct { Icon: ElementType; title: string; summary: string; href: string }

interface SolutionPageProps {
  eyebrow:      string
  title:        string
  subtitle:     string
  problemTitle: string
  problemItems: string[]
  steps:        Step[]
  benefits:     Benefit[]
  relatedProducts: RelatedProduct[]
}

export default function SolutionPageTemplate({
  eyebrow, title, subtitle, problemTitle, problemItems, steps, benefits, relatedProducts,
}: SolutionPageProps) {
  return (
    <>
      <HeroSection
        eyebrow={eyebrow}
        title={title}
        subtitle={subtitle}
        primaryCta={{ label: 'Book a Demo', href: '/contact#demo' }}
        centered
      />

      {/* Problem */}
      <SectionWrapper bg="mist">
        <div className="max-w-3xl mx-auto">
          <SectionHeader eyebrow="The Problem" title={problemTitle} />
          <ul className="space-y-4">
            {problemItems.map((item, i) => (
              <li key={i} className="flex items-start gap-3 bg-summit-cloud rounded-lg p-4 border border-summit-dusk">
                <span className="w-6 h-6 rounded-full bg-summit-coral/10 text-summit-coral font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                <p className="text-summit-stone text-sm leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </SectionWrapper>

      {/* How it works */}
      <SectionWrapper bg="cloud">
        <SectionHeader eyebrow="How CareAutomation Solves It" title="A smarter way to work" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="text-center px-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-summit-amber to-summit-coral text-white font-bold text-lg flex items-center justify-center mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="font-display font-bold text-summit-slate text-sm mb-2">{step.title}</h3>
              <p className="text-summit-stone text-xs leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Benefits */}
      <SectionWrapper bg="mist">
        <SectionHeader eyebrow="Key Benefits" title="What you gain" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b) => <FeatureCard key={b.title} {...b} />)}
        </div>
      </SectionWrapper>

      {/* Related Products */}
      <SectionWrapper bg="cloud">
        <SectionHeader eyebrow="Related Products" title="The tools behind this solution" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedProducts.map((p) => <SolutionCard key={p.title} {...p} />)}
        </div>
      </SectionWrapper>

      <CTABanner />
    </>
  )
}
