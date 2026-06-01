import type { Metadata } from 'next'
import ProductPageTemplate from '@/components/sections/ProductPageTemplate'
import { UserPlus, Zap, Bell, TrendingUp, RefreshCw, MessageSquare } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Referral Intake AI',
  description: 'Automated referral capture, routing, and intake coordination for specialty care and outpatient teams.',
}

export default function ReferralProductPage() {
  return (
    <ProductPageTemplate
      badge="New"
      title="Referral Intake AI"
      tagline="Automated referral capture, routing, and intake coordination."
      subtitle="Referral Intake AI captures every inbound referral regardless of source, validates completeness, routes to the right provider, and coordinates patient scheduling automatically."
      features={[
        { Icon: UserPlus,      title: 'Omni-Channel Capture',  description: 'Receives referrals from fax, EHR direct, phone, and web forms — zero manual sorting.' },
        { Icon: Zap,           title: 'Instant Validation',    description: 'AI checks for missing clinical notes, insurance info, and contact data, requesting what\'s missing automatically.' },
        { Icon: TrendingUp,    title: 'Smart Routing',         description: 'Routes to the right provider, location, or care pathway based on clinical criteria and scheduling availability.' },
        { Icon: MessageSquare, title: 'Patient Outreach',      description: 'Automated SMS and phone outreach to patients for scheduling confirmation.' },
        { Icon: Bell,          title: 'Referring MD Updates',  description: 'Automatic status updates keep referring physicians informed at every step.' },
        { Icon: RefreshCw,     title: 'Pipeline Dashboard',    description: 'Real-time visibility into referral volume, status, and bottlenecks.' },
      ]}
      steps={[
        { number: 1, title: 'Referral Received',   description: 'Captured from any source automatically. No fax monitoring required.' },
        { number: 2, title: 'Validated',            description: 'AI confirms completeness and requests missing information from referring provider.' },
        { number: 3, title: 'Routed',               description: 'Assigned to correct provider and location. Calendar checked for availability.' },
        { number: 4, title: 'Patient Scheduled',    description: 'Automated outreach to patient. Appointment confirmed. Referring MD notified.' },
      ]}
      integrations={[
        { name: 'Epic' }, { name: 'Athenahealth' }, { name: 'Cerner' }, { name: 'eFax' },
        { name: 'RingCentral' }, { name: 'Twilio' }, { name: 'Google Calendar' }, { name: 'Microsoft 365' },
      ]}
      pricingTier="Starter"
    />
  )
}
