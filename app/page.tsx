import HeroSection       from '@/components/sections/HeroSection'
import SectionWrapper    from '@/components/sections/SectionWrapper'
import SectionHeader     from '@/components/sections/SectionHeader'
import SolutionCard      from '@/components/sections/SolutionCard'
import FeatureCard       from '@/components/sections/FeatureCard'
import TestimonialCard   from '@/components/sections/TestimonialCard'
import CTABanner         from '@/components/sections/CTABanner'
import PricingCard       from '@/components/sections/PricingCard'
import Button            from '@/components/ui/Button'
import { SOLUTIONS, TESTIMONIALS, PRICING_TIERS } from '@/lib/constants'
import {
  CircleDollarSign, ClipboardCheck, UserPlus,
  ShieldCheck, Zap, TrendingUp, MessageSquare,
} from 'lucide-react'

const ICON_MAP: Record<string, React.ElementType> = {
  CircleDollarSign, ClipboardCheck, UserPlus,
}

const PRODUCTS_PREVIEW = [
  {
    Icon: CircleDollarSign,
    title: 'RCM Automation',
    summary: 'End-to-end revenue cycle automation — from charge capture to payment posting.',
    href: '/products/rcm-automation',
  },
  {
    Icon: ClipboardCheck,
    title: 'Prior Auth & Claim Management AI',
    summary: 'Intelligent prior auth submission and real-time payer claim tracking.',
    href: '/products/prior-auth-claim-management-ai',
  },
  {
    Icon: UserPlus,
    title: 'Referral Intake AI',
    summary: 'Capture every referral, validate completeness, and schedule automatically.',
    href: '/products/referral-intake-ai',
  },
  {
    Icon: MessageSquare,
    title: 'Patient Engagement',
    summary: 'SMS, email, voice, and secure tokenized web flows — no app downloads required.',
    href: '/products/patient-engagement',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        eyebrow="Healthcare Operations Automation"
        title="Automate the Workflow. Elevate the Care."
        subtitle="CareAutomation reduces administrative burden for clinics and health systems — so your team can focus on delivering exceptional patient care, not wrestling with paperwork."
        primaryCta={{ label: 'Book a Demo', href: '/contact#demo' }}
        secondaryCta={{ label: 'See How It Works', href: '/solutions' }}
      />

      {/* Trust Bar */}
      <SectionWrapper bg="plum" className="py-8 md:py-10">
        <p className="text-center text-summit-dusk/70 text-sm font-medium uppercase tracking-widest mb-6">
          Trusted by independent clinics, specialty practices, and regional health systems
        </p>
        <div className="flex flex-wrap justify-center gap-8 opacity-50">
          {['Riverside Clinic', 'Summit Regional', 'Westlake Health', 'Apex Specialty', 'NorthStar Medical'].map((name) => (
            <span key={name} className="text-white font-display font-semibold text-sm">{name}</span>
          ))}
        </div>
      </SectionWrapper>

      {/* Value Props */}
      <SectionWrapper bg="mist">
        <SectionHeader
          eyebrow="Why CareAutomation"
          title="The administrative burden is breaking healthcare"
          subtitle="Clinics lose thousands of hours and millions in revenue to manual workflows. We fix that."
        />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <FeatureCard
            Icon={Zap}
            title="Prior Auth in Minutes"
            description="Average prior auth takes 2 days manually. Our AI processes submissions in under 4 minutes."
          />
          <FeatureCard
            Icon={TrendingUp}
            title="Zero Referral Drop-off"
            description="Up to 40% of referrals are lost in manual intake. Referral Intake AI captures every one."
          />
          <FeatureCard
            Icon={ShieldCheck}
            title="Billing Errors Prevented"
            description="Claim denials cost practices 3–5% of revenue. RCM Automation slashes denial rates."
          />
          <FeatureCard
            Icon={MessageSquare}
            title="Patients Actually Respond"
            description="Tokenized web flows see 3× higher patient completion rates than traditional portals."
          />
        </div>
      </SectionWrapper>

      {/* Solutions */}
      <SectionWrapper bg="cloud">
        <SectionHeader
          eyebrow="Solutions"
          title="Purpose-built for clinic operations"
          subtitle="Three focused automation solutions that address the most critical pain points in healthcare administration."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SOLUTIONS.map((s) => {
            const Icon = ICON_MAP[s.icon]
            return (
              <SolutionCard key={s.slug} Icon={Icon} title={s.title} summary={s.summary} href={`/solutions/${s.slug}`} />
            )
          })}
        </div>
      </SectionWrapper>

      {/* Products Preview — 4 cards */}
      <SectionWrapper bg="mist">
        <SectionHeader
          eyebrow="Products"
          title="The tools powering your operations"
          subtitle="Four AI-powered products built to work together — or independently alongside your existing systems."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {PRODUCTS_PREVIEW.map((p) => (
            <SolutionCard key={p.href} {...p} />
          ))}
        </div>
      </SectionWrapper>

      {/* Pricing Preview */}
      <SectionWrapper bg="cloud">
        <SectionHeader
          eyebrow="Pricing"
          title="Plans for every stage of your practice"
          subtitle="Transparent monthly pricing, no surprises."
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
      <SectionWrapper bg="mist">
        <SectionHeader eyebrow="Customer Stories" title="Real results from real clinics" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => <TestimonialCard key={t.name} {...t} />)}
        </div>
      </SectionWrapper>

      <CTABanner />
    </>
  )
}
