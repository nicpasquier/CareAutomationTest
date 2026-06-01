'use client'
import { useState } from 'react'
import HeroSection   from '@/components/sections/HeroSection'
import SectionWrapper from '@/components/sections/SectionWrapper'
import SectionHeader  from '@/components/sections/SectionHeader'
import PricingCard    from '@/components/sections/PricingCard'
import CTABanner      from '@/components/sections/CTABanner'
import Accordion      from '@/components/ui/Accordion'
import { PRICING_TIERS } from '@/lib/constants'

const FAQ_ITEMS = [
  { question: 'Is there a free trial?',           answer: 'Yes. Professional plan includes a 14-day free trial, no credit card required.' },
  { question: 'Can I change plans later?',         answer: 'Absolutely. You can upgrade or downgrade at any time from your account dashboard.' },
  { question: 'What EHR systems do you integrate with?', answer: 'We support Epic, Athenahealth, Cerner, eClinicalWorks, and most major EHR platforms via HL7/FHIR APIs.' },
  { question: 'Is my patient data secure?',        answer: 'Yes. CareAutomation is HIPAA-compliant. All data is encrypted in transit and at rest. We sign BAAs with all customers.' },
  { question: 'What does "full operational system reset" mean?', answer: 'Our Enterprise tier includes a full audit and rebuild of your RCM, prior auth, and referral workflows from the ground up, managed by our implementation team.' },
  { question: 'Do you offer annual discounts?',    answer: 'Yes — annual plans are approximately 18% less than monthly billing.' },
]

export default function PricingPage() {
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly')

  return (
    <>
      <HeroSection
        eyebrow="Pricing"
        title="Transparent pricing. No surprises."
        subtitle="Start with what you need. Scale as you grow."
        centered
      />

      <SectionWrapper bg="mist">
        {/* Billing toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-summit-dusk rounded-full p-1 flex gap-1">
            {(['monthly', 'annual'] as const).map((b) => (
              <button
                key={b}
                onClick={() => setBilling(b)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  billing === b
                    ? 'bg-summit-amber text-white shadow-warm'
                    : 'text-summit-stone hover:text-summit-slate'
                }`}
              >
                {b === 'annual' ? 'Annual (save 18%)' : 'Monthly'}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRICING_TIERS.map((tier) => (
            <PricingCard key={tier.name} {...tier} billing={billing} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper bg="cloud">
        <SectionHeader eyebrow="FAQ" title="Common pricing questions" />
        <div className="max-w-2xl mx-auto">
          <Accordion items={FAQ_ITEMS} />
        </div>
      </SectionWrapper>

      <CTABanner title="Not sure which plan is right for you?" subtitle="Book a 30-minute call and we'll recommend the best fit for your practice." />
    </>
  )
}
