import type { Metadata } from 'next'
import HeroSection     from '@/components/sections/HeroSection'
import SectionWrapper  from '@/components/sections/SectionWrapper'
import SectionHeader   from '@/components/sections/SectionHeader'
import CTABanner       from '@/components/sections/CTABanner'
import FeatureCard     from '@/components/sections/FeatureCard'
import { Shield, Lightbulb, Heart, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about CareAutomation\'s mission to reduce administrative burden for healthcare clinics through intelligent automation.',
}

const VALUES = [
  { Icon: Shield,     title: 'Transparency',  description: 'We believe in clear pricing, honest results, and open communication with every client.' },
  { Icon: Lightbulb, title: 'Innovation',     description: 'We build AI tools that stay ahead of payer complexity, coding changes, and workflow evolution.' },
  { Icon: Heart,     title: 'Accessibility', description: 'Enterprise-grade automation shouldn\'t require enterprise-sized budgets. We serve practices of every size.' },
  { Icon: Users,     title: 'Partnership',   description: 'We don\'t just sell software. We embed ourselves in your workflow and measure success by yours.' },
]

export default function AboutPage() {
  return (
    <>
      <HeroSection
        eyebrow="About CareAutomation"
        title="We believe clinicians should focus on care, not paperwork."
        subtitle="CareAutomation was founded by healthcare operators and technologists who experienced firsthand how broken administrative workflows hurt patients and staff alike."
        centered
      />

      <SectionWrapper bg="cloud">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-summit-amber font-semibold text-xs uppercase tracking-widest mb-3">Our Story</p>
            <h2 className="font-display font-bold text-summit-slate text-3xl mb-6">
              Born from firsthand frustration with healthcare admin
            </h2>
            <p className="text-summit-stone leading-relaxed mb-4">
              After years working inside health systems, our founders watched talented clinicians spend hours on prior authorizations, referral paperwork, and billing disputes instead of patient care. The technology existed to fix it — it just hadn't been applied thoughtfully to this space.
            </p>
            <p className="text-summit-stone leading-relaxed">
              CareAutomation was built to change that. We combine deep healthcare domain expertise with modern AI to automate the workflows that consume clinical operations teams — without disrupting existing EHR setups or requiring large IT investments.
            </p>
          </div>
          <div className="bg-gradient-to-br from-summit-amber to-summit-coral rounded-card aspect-video flex items-center justify-center">
            <p className="text-white font-display font-bold text-xl opacity-60">[ Founders photo / illustration ]</p>
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
          {['Alex Rivera, CEO', 'Morgan Patel, CTO', 'Jordan Kim, Head of Product'].map((member) => {
            const [name, role] = member.split(', ')
            return (
              <div key={name} className="bg-summit-mist rounded-card p-6 border border-summit-dusk text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-summit-amber to-summit-coral mx-auto mb-4 flex items-center justify-center text-white font-bold text-2xl">
                  {name.charAt(0)}
                </div>
                <p className="font-display font-bold text-summit-slate">{name}</p>
                <p className="text-summit-stone text-sm mt-1">{role}</p>
              </div>
            )
          })}
        </div>
      </SectionWrapper>

      <CTABanner title="Want to meet the team?" subtitle="Book a demo and talk directly with our team about your clinic's needs." />
    </>
  )
}
