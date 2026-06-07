import HeroSection     from '@/components/sections/HeroSection'
import SectionWrapper  from '@/components/sections/SectionWrapper'
import SectionHeader   from '@/components/sections/SectionHeader'
import SolutionCard    from '@/components/sections/SolutionCard'
import FeatureCard     from '@/components/sections/FeatureCard'
import TestimonialCard from '@/components/sections/TestimonialCard'
import CTABanner       from '@/components/sections/CTABanner'
import PricingCard     from '@/components/sections/PricingCard'
import Button          from '@/components/ui/Button'
import { SOLUTIONS, TESTIMONIALS, PRICING_TIERS } from '@/lib/constants'
import { UserPlus, MessageSquare, Zap, TrendingUp, Bell } from 'lucide-react'

const ICON_MAP: Record<string, React.ElementType> = {
  UserPlus,
  MessageSquare,
}

export default function HomePage() {
  return (
    <>
      <HeroSection
        eyebrow="Healthcare Operations Automation"
        title="The Automation Behind Exceptional Care."
        subtitle="Care Automation Solutions reduces administrative burden for clinics and health systems — so your team can focus on delivering exceptional patient care, not wrestling with paperwork."
        primaryCta={{ label: 'Book a Demo', href: '/contact#demo' }}
        secondaryCta={{ label: 'See How It Works', href: '/solutions' }}
      />

      {/* Trust Bar */}
      <SectionWrapper bg="plum" className="py-8 md:py-10">
        <p className="text-center text-summit-dusk/60 text-xs font-semibold uppercase tracking-widest mb-5">
          Trusted by independent clinics, specialty practices &amp; regional health systems
        </p>
        <div className="flex flex-wrap justify-center gap-8 opacity-40">
          {['Riverside Clinic', 'Summit Regional', 'Westlake Health', 'Apex Specialty', 'NorthStar Medical'].map((name) => (
            <span key={name} className="text-white font-display font-semibold text-sm">{name}</span>
          ))}
        </div>
      </SectionWrapper>

      {/* Value Props */}
      <SectionWrapper bg="mist">
        <SectionHeader
          eyebrow="Why Care Automation Solutions"
          title="Administrative drag is costing you patients and revenue"
          subtitle="Manual workflows create invisible losses every day. We make them visible — then eliminate them."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            Icon={Zap}
            title="Referrals That Don't Fall Through"
            description="Up to 40% of referrals are lost in traditional intake. Referral Intake AI captures, validates, and schedules every single one automatically."
          />
          <FeatureCard
            Icon={TrendingUp}
            title="Patients Who Actually Show Up"
            description="Tokenized web flows and smart reminders cut no-show rates by up to 40% — without requiring patients to download anything or remember a password."
          />
          <FeatureCard
            Icon={Bell}
            title="Engagement That Feels Human"
            description="SMS, email, and AI voice outreach timed to the right moment in the patient journey. Personalized at scale, compliant by design."
          />
        </div>
      </SectionWrapper>

      {/* Solutions */}
      <SectionWrapper bg="cloud">
        <SectionHeader
          eyebrow="Solutions"
          title="Two focused solutions. Real operational impact."
          subtitle="Built for the workflows that consume the most time in clinical operations."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {SOLUTIONS.map((s) => {
            const Icon = ICON_MAP[s.icon]
            return (
              <SolutionCard key={s.slug} Icon={Icon} title={s.title} summary={s.summary} href={`/solutions/${s.slug}`} />
            )
          })}
        </div>
      </SectionWrapper>

      {/* Pricing */}
      <SectionWrapper bg="mist">
        <SectionHeader
          eyebrow="Pricing"
          title="Plans for every stage of your practice"
          subtitle="Transparent monthly pricing. No implementation fees. No surprises."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {PRICING_TIERS.map((tier) => (
            <PricingCard key={tier.name} {...tier} billing="monthly" />
          ))}
        </div>
        <div className="text-center">
          <Button href="/pricing" variant="secondary">View All Plans &amp; Features</Button>
        </div>
      </SectionWrapper>

      {/* Testimonials */}
      <SectionWrapper bg="cloud">
        <SectionHeader eyebrow="Customer Stories" title="Real results from real clinics" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => <TestimonialCard key={t.name} {...t} />)}
        </div>
      </SectionWrapper>

      <CTABanner />
    </>
  )
}
