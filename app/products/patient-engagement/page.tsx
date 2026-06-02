import type { Metadata } from 'next'
import HeroSection        from '@/components/sections/HeroSection'
import SectionWrapper     from '@/components/sections/SectionWrapper'
import SectionHeader      from '@/components/sections/SectionHeader'
import FeatureCard        from '@/components/sections/FeatureCard'
import CTABanner          from '@/components/sections/CTABanner'
import Button             from '@/components/ui/Button'
import Badge              from '@/components/ui/Badge'
import {
  MessageSquare, Mail, Phone, Shield, Link2, Smartphone,
  Clock, UserCheck, Bell, CalendarCheck, FileText, Lock,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Patient Engagement',
  description:
    'Reach patients via SMS, email, and secure tokenized web flows — no app downloads, no forgotten passwords. HIPAA-compliant patient engagement automation.',
}

const CHANNELS = [
  {
    Icon: MessageSquare,
    title: 'SMS / Text Messaging',
    description:
      'Send appointment reminders, intake forms, post-visit instructions, and billing nudges via text. Patients respond directly — no app required. Two-way conversations handled by AI.',
  },
  {
    Icon: Mail,
    title: 'Secure Email',
    description:
      'Deliver HIPAA-compliant emails containing secure, tokenized links. Patients access forms, records, and instructions through an encrypted browser session — no portal login needed.',
  },
  {
    Icon: Phone,
    title: 'Automated Voice Calls',
    description:
      'AI-powered outbound calls for appointment reminders, recalls, and care gap outreach. Natural-sounding voice, real-time responses, and seamless escalation to staff when needed.',
  },
  {
    Icon: Bell,
    title: 'Smart Reminders',
    description:
      'Multi-channel reminder sequences that adapt based on patient response. Reduce no-shows by up to 40% with personalized, timely outreach across SMS, email, and voice.',
  },
  {
    Icon: CalendarCheck,
    title: 'Appointment Scheduling',
    description:
      'Patients confirm, reschedule, or cancel appointments directly from a text or email link — no hold music, no login, no friction.',
  },
  {
    Icon: FileText,
    title: 'Intake & Forms',
    description:
      'Send pre-visit intake forms via SMS or email. Patients complete them on any device before arrival, saving front-desk time and improving data quality.',
  },
]

const TWC_STEPS = [
  {
    number: 1,
    title: 'Send a Secure Link',
    description:
      'Patient receives an SMS or email containing a unique, time-sensitive, single-use link (e.g., clinic.io/flow?token=xyz123). No password. No app store.',
  },
  {
    number: 2,
    title: 'Patient Clicks — Secure Session Opens',
    description:
      'Clicking opens a lightweight, mobile-optimized browser window encrypted with HTTPS. Nothing to install. Works on any smartphone, tablet, or desktop.',
  },
  {
    number: 3,
    title: 'Two-Factor Identity Verification',
    description:
      'Patient confirms identity via a second factor — entering their Date of Birth, or a 4-digit code sent to their phone. Fast, familiar, and secure.',
  },
  {
    number: 4,
    title: 'AI Agent Engages',
    description:
      'Inside the verified session, the AI agent presents forms, schedules appointments, collects payments, and delivers post-visit instructions — all within a fully encrypted, clinic-controlled environment.',
  },
]

const BENEFITS = [
  { Icon: UserCheck, title: 'No App Downloads',    description: 'Patients never need to download anything or remember a portal password.' },
  { Icon: Lock,      title: 'HIPAA Compliant',     description: 'Every session is encrypted, tokenized, and time-limited. PHI never exposed.' },
  { Icon: Smartphone,title: 'Mobile-First',        description: 'Designed for the phone in every patient\'s pocket — not a desktop portal.' },
  { Icon: Shield,    title: '2FA Built-In',        description: 'Identity verified at every session with DOB or SMS code before any PHI is shown.' },
  { Icon: Link2,     title: 'Single-Use Tokens',   description: 'Each link expires after use or after a set time window — zero reuse risk.' },
  { Icon: Clock,     title: 'Faster Completions',  description: 'Tokenized flows see 3x higher completion rates than traditional patient portals.' },
]

export default function PatientEngagementPage() {
  return (
    <>
      <HeroSection
        eyebrow="Product — New"
        title="Patient Engagement That Actually Works."
        subtitle="Reach patients where they are — via text, email, and secure browser sessions. No app downloads. No forgotten passwords. Just frictionless, HIPAA-compliant communication."
        primaryCta={{ label: 'Book a Demo', href: '/contact#demo' }}
        secondaryCta={{ label: 'View Pricing', href: '/pricing' }}
      />

      {/* Channels */}
      <SectionWrapper bg="mist">
        <SectionHeader
          eyebrow="Communication Channels"
          title="Meet patients on every channel they already use"
          subtitle="SMS, email, and voice — all managed by AI, all connected to your EHR."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CHANNELS.map((c) => <FeatureCard key={c.title} {...c} />)}
        </div>
      </SectionWrapper>

      {/* Tokenized Web Companion */}
      <SectionWrapper bg="cloud">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="flex justify-center mb-4">
            <Badge variant="amber">Flagship Feature</Badge>
          </div>
          <h2 className="font-display font-bold text-summit-slate text-3xl md:text-4xl mb-4">
            Tokenized Web Companion
          </h2>
          <p className="text-summit-stone text-base md:text-lg leading-relaxed">
            Instead of forcing patients to download a frustrating app or log into a portal with a password
            they forgot, our Tokenized Web Companion delivers a secure, personalized session right inside
            their browser — in seconds.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {TWC_STEPS.map((step) => (
            <div
              key={step.number}
              className="flex gap-5 items-start bg-summit-mist rounded-card p-6 border border-summit-dusk"
            >
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0"
                style={{ background: 'linear-gradient(135deg, #5c3a8a, #e8923a)' }}
              >
                {step.number}
              </div>
              <div>
                <h3 className="font-display font-bold text-summit-slate text-base mb-1">{step.title}</h3>
                <p className="text-summit-stone text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Visual example */}
        <div className="mt-12 max-w-lg mx-auto bg-summit-plum rounded-card p-8 text-center">
          <p className="text-summit-dusk/60 text-xs uppercase tracking-widest mb-3">Example Link</p>
          <p className="font-mono text-summit-gold text-sm break-all mb-4">
            clinic.io/flow?token=xyz123&exp=1h
          </p>
          <p className="text-white/70 text-xs leading-relaxed">
            Unique · Time-sensitive · Single-use · HTTPS encrypted · 2FA protected
          </p>
        </div>
      </SectionWrapper>

      {/* Benefits */}
      <SectionWrapper bg="mist">
        <SectionHeader eyebrow="Why It Works" title="Designed for real patient behavior" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENEFITS.map((b) => <FeatureCard key={b.title} {...b} />)}
        </div>
      </SectionWrapper>

      {/* Integrations */}
      <SectionWrapper bg="cloud">
        <SectionHeader eyebrow="Integrations" title="Works with your existing stack" />
        <div className="flex flex-wrap justify-center gap-3">
          {['Epic','Athenahealth','Cerner','eClinicalWorks','Twilio','SendGrid',
            'RingCentral','Google Calendar','Microsoft 365','Stripe'].map((name) => (
            <span
              key={name}
              className="px-4 py-2 bg-summit-cloud border border-summit-dusk rounded-full text-sm font-medium text-summit-stone"
            >
              {name}
            </span>
          ))}
        </div>
      </SectionWrapper>

      {/* Pricing callout */}
      <SectionWrapper bg="mist">
        <div className="max-w-xl mx-auto text-center bg-summit-plum rounded-card p-10">
          <p className="text-summit-dusk text-xs font-semibold uppercase tracking-widest mb-3">Available On</p>
          <p className="font-display font-bold text-white text-2xl mb-2">Professional & Enterprise</p>
          <p className="text-white/60 text-sm mb-6">
            Tokenized Web Companion (2FA) available on Enterprise tier.
          </p>
          <Button href="/pricing" variant="primary">See All Plans</Button>
        </div>
      </SectionWrapper>

      <CTABanner
        title="Ready to re-engage your patients?"
        subtitle="See how Care Automation Solutions's Patient Engagement suite drives better outcomes with less staff effort."
      />
    </>
  )
}
