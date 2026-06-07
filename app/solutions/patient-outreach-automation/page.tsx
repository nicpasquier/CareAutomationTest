import type { Metadata } from 'next'
import HeroSection    from '@/components/sections/HeroSection'
import SectionWrapper from '@/components/sections/SectionWrapper'
import SectionHeader  from '@/components/sections/SectionHeader'
import FeatureCard    from '@/components/sections/FeatureCard'
import SolutionCard   from '@/components/sections/SolutionCard'
import CTABanner      from '@/components/sections/CTABanner'
import Badge          from '@/components/ui/Badge'
import {
  MessageSquare, Mail, Phone, Bell, CalendarCheck,
  UserCheck, Lock, Smartphone, Link2, Clock,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Patient Outreach Automation',
  description: 'Automated SMS, email, and secure tokenized patient engagement — no app downloads, no forgotten passwords. Built for clinical operations teams.',
}

const PROBLEMS = [
  'Up to 30% of patients miss follow-up appointments due to poor outreach — not lack of interest.',
  'Staff spend hours manually calling patients for reminders, recalls, and post-visit instructions.',
  'Patient portals have login abandonment rates above 60% — patients forget passwords and give up.',
  'Unstructured post-visit communication leads to care gaps, readmissions, and poor outcomes.',
]

const CHANNELS = [
  { Icon: MessageSquare, title: 'SMS Outreach',         description: 'Appointment reminders, intake forms, post-visit instructions, and care gap nudges via text. Two-way AI conversations included.' },
  { Icon: Mail,          title: 'Secure Email',         description: 'HIPAA-compliant emails with tokenized links. Patients access forms and records through encrypted browser sessions — no portal login.' },
  { Icon: Phone,         title: 'AI Voice Calls',       description: 'Outbound calls for reminders, recalls, and care gap outreach. Natural-sounding, real-time, and escalates to staff when needed.' },
  { Icon: Bell,          title: 'Smart Reminders',      description: 'Multi-channel sequences that adapt based on patient response. Reduce no-shows by up to 40%.' },
  { Icon: CalendarCheck, title: 'Self-Scheduling',      description: 'Patients confirm, reschedule, or cancel directly from a text or email link — no hold music, no login.' },
  { Icon: Clock,         title: 'Post-Visit Follow-Up', description: 'Automated care instructions, satisfaction surveys, and recall scheduling sent at the right moment after discharge.' },
]

const TWC_STEPS = [
  { number: 1, title: 'Send a Secure Link',           description: 'Patient receives an SMS or email with a unique, time-limited, single-use link (e.g., clinic.io/flow?token=xyz). No password. No app store.' },
  { number: 2, title: 'Secure Session Opens',          description: 'Clicking opens a lightweight, mobile-optimized HTTPS browser session. Nothing to install. Works on any device.' },
  { number: 3, title: 'Two-Factor Identity Check',    description: 'Patient verifies identity via Date of Birth or a 4-digit SMS code. Fast, familiar, and secure.' },
  { number: 4, title: 'AI Agent Engages',              description: 'The AI presents forms, schedules appointments, collects payments, and delivers instructions inside a fully encrypted, clinic-controlled environment.' },
]

const BENEFITS = [
  { Icon: UserCheck,  title: 'No App Downloads',   description: 'Patients never download anything or remember a portal password.' },
  { Icon: Lock,       title: 'HIPAA Compliant',    description: 'Every session encrypted, tokenized, and time-limited. PHI never exposed.' },
  { Icon: Smartphone, title: 'Mobile-First',       description: 'Designed for the phone in every patient\'s pocket.' },
  { Icon: Link2,      title: 'Single-Use Tokens',  description: 'Each link expires after use — zero reuse risk.' },
]

export default function PatientOutreachSolutionPage() {
  return (
    <>
      <HeroSection
        eyebrow="Solution"
        title="Patient Outreach Automation"
        subtitle="Stop chasing patients with phone calls. Reach them where they are — via SMS, secure email, and AI voice — with communication they'll actually respond to."
        primaryCta={{ label: 'Book a Demo', href: '/contact#demo' }}
        centered
      />

      {/* Problem */}
      <SectionWrapper bg="mist">
        <div className="max-w-3xl mx-auto">
          <SectionHeader eyebrow="The Problem" title="Patients aren't disengaged. Your outreach just isn't reaching them." />
          <ul className="space-y-4">
            {PROBLEMS.map((item, i) => (
              <li key={i} className="flex items-start gap-3 bg-summit-cloud rounded-lg p-4 border border-summit-dusk">
                <span className="w-6 h-6 rounded-full bg-summit-coral/10 text-summit-coral font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                <p className="text-summit-stone text-sm leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </SectionWrapper>

      {/* Channels */}
      <SectionWrapper bg="cloud">
        <SectionHeader eyebrow="Outreach Channels" title="Meet patients on every channel they already use" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CHANNELS.map((c) => <FeatureCard key={c.title} {...c} />)}
        </div>
      </SectionWrapper>

      {/* Tokenized Web Companion */}
      <SectionWrapper bg="mist">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="flex justify-center mb-4"><Badge variant="amber">Flagship Feature</Badge></div>
          <h2 className="font-display font-bold text-summit-slate text-3xl md:text-4xl mb-4">Tokenized Web Companion</h2>
          <p className="text-summit-stone text-base md:text-lg leading-relaxed">
            Instead of forcing patients to download a frustrating app or log into a portal with a password they forgot,
            our Tokenized Web Companion delivers a secure, verified session right inside their browser — in seconds.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {TWC_STEPS.map((step) => (
            <div key={step.number} className="flex gap-5 items-start bg-summit-cloud rounded-card p-6 border border-summit-dusk">
              <div className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0"
                style={{ background: 'linear-gradient(135deg, #2E1A2E, #C97C3A)' }}>
                {step.number}
              </div>
              <div>
                <h3 className="font-display font-bold text-summit-slate text-base mb-1">{step.title}</h3>
                <p className="text-summit-stone text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 max-w-md mx-auto bg-summit-plum rounded-card p-7 text-center">
          <p className="text-summit-dusk/60 text-xs uppercase tracking-widest mb-2">Example Token Link</p>
          <p className="font-mono text-summit-gold text-sm break-all mb-3">clinic.io/flow?token=xyz123&amp;exp=1h</p>
          <p className="text-white/60 text-xs">Unique · Time-sensitive · Single-use · HTTPS · 2FA protected</p>
        </div>
      </SectionWrapper>

      {/* Benefits */}
      <SectionWrapper bg="cloud">
        <SectionHeader eyebrow="Key Benefits" title="Built around how patients actually behave" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFITS.map((b) => <FeatureCard key={b.title} {...b} />)}
        </div>
      </SectionWrapper>

      {/* Related Product */}
      <SectionWrapper bg="mist">
        <SectionHeader eyebrow="Related Product" title="The tool behind this solution" />
        <div className="max-w-sm mx-auto">
          <SolutionCard
            Icon={MessageSquare}
            title="Patient Engagement"
            summary="The full product powering SMS, email, voice, and tokenized web flows."
            href="/products/patient-engagement"
          />
        </div>
      </SectionWrapper>

      <CTABanner title="Ready to re-engage your patient population?" subtitle="See Patient Outreach Automation in action — book a 30-minute demo." />
    </>
  )
}
