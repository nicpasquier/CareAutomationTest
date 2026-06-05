import type { Metadata } from 'next'
import HeroSection    from '@/components/sections/HeroSection'
import SectionWrapper from '@/components/sections/SectionWrapper'
import SectionHeader  from '@/components/sections/SectionHeader'
import CTABanner      from '@/components/sections/CTABanner'
import FeatureCard    from '@/components/sections/FeatureCard'
import { Shield, Lightbulb, Heart, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Care Automation Solutions — built by healthcare operators who got tired of watching great clinicians drown in paperwork.',
}

const VALUES = [
  { Icon: Shield,     title: 'Transparency',  description: 'Clear pricing, honest results, and open communication with every client — always.' },
  { Icon: Lightbulb, title: 'Innovation',     description: 'We build AI tools that stay ahead of payer complexity, coding changes, and workflow evolution.' },
  { Icon: Heart,     title: 'Accessibility', description: 'Enterprise-grade automation shouldn\'t require enterprise-sized budgets. We serve practices of every size.' },
  { Icon: Users,     title: 'Partnership',   description: 'We embed ourselves in your workflow and measure our success by yours.' },
]

export default function AboutPage() {
  return (
    <>
      <HeroSection
        eyebrow="About Care Automation Solutions"
        title="Connected Patients, from intake to follow-up."
        subtitle="We built Care Automation Solutions because great clinicians deserve better than spending their days on hold with insurance companies."
        centered
      />

      <SectionWrapper bg="cloud">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-summit-amber font-semibold text-xs uppercase tracking-widest mb-3">Our Story</p>
            <h2 className="font-display font-bold text-summit-slate text-3xl mb-6">
              Built by people who've lived inside healthcare operations
            </h2>
            <p className="text-summit-stone leading-relaxed mb-4">
              Our founders spent years working inside health systems — managing referral pipelines, fighting prior auth denials, and watching talented clinical staff burn out on administrative work that should have been automated years ago.
            </p>
            <p className="text-summit-stone leading-relaxed">
              Care Automation Solutions was built to fix that. We combine deep healthcare domain expertise with modern AI to automate the workflows that consume operations teams — without disrupting existing EHR setups or requiring large IT investments.
            </p>
          </div>
          <div className="rounded-card aspect-video flex items-center justify-center overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #2E1A2E, #C97C3A)' }}>
            <p className="text-white font-display font-bold text-xl opacity-40">[ Team photo ]</p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper bg="mist">
        <SectionHeader eyebrow="Our Values" title="What drives every decision we make" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map((v) => <FeatureCard key={v.title} {...v} />)}
        </div>
      </SectionWrapper>

      <SectionWrapper bg="cloud">
        <SectionHeader eyebrow="Our Team" title="The people behind the platform" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: 'Alex Rivera',  role: 'CEO & Co-founder' },
            { name: 'Morgan Patel', role: 'CTO & Co-founder' },
            { name: 'Jordan Kim',   role: 'Head of Product' },
          ].map(({ name, role }) => (
            <div key={name} className="bg-summit-mist rounded-card p-6 border border-summit-dusk text-center">
              <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-2xl"
                style={{ background: 'linear-gradient(135deg, #2E1A2E, #C97C3A)' }}>
                {name.charAt(0)}
              </div>
              <p className="font-display font-bold text-summit-slate">{name}</p>
              <p className="text-summit-stone text-sm mt-1">{role}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <CTABanner title="Want to meet the team?" subtitle="Book a demo and talk directly with us about your clinic's needs." />
    </>
  )
}
