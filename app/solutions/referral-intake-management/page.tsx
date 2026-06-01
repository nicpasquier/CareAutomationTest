import type { Metadata } from 'next'
import SolutionPageTemplate from '@/components/sections/SolutionPageTemplate'
import { UserPlus, TrendingUp, Clock, Users, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Referral Intake Management',
  description: 'Capture every referral, eliminate drop-off, and coordinate patient intake automatically.',
}

export default function ReferralSolutionPage() {
  return (
    <SolutionPageTemplate
      eyebrow="Solution"
      title="Referral Intake Management"
      subtitle="Stop losing patients in the referral process. Capture, route, and schedule every single one."
      problemTitle="The referral leakage problem"
      problemItems={[
        'Up to 40% of referrals are lost in traditional intake — faxes go unread, calls go unreturned, patients give up.',
        'Manual intake is slow: average time from referral receipt to scheduled appointment is 8-12 days.',
        'Incomplete referral packets delay intake — missing records or insurance info causes repeated back-and-forth.',
        'No visibility into referral pipeline: practices can\'t forecast volume or identify bottlenecks.',
      ]}
      steps={[
        { number: 1, title: 'Capture',     description: 'Automatically receive referrals from fax, EHR, phone, and web — zero manual entry.' },
        { number: 2, title: 'Validate',    description: 'AI checks completeness: insurance, clinical notes, contact info. Requests missing items automatically.' },
        { number: 3, title: 'Route',       description: 'Assign to the right provider, location, or care team based on clinical criteria and availability.' },
        { number: 4, title: 'Schedule',    description: 'Automated outreach to patients for scheduling. Status updates to referring providers.' },
      ]}
      benefits={[
        { Icon: TrendingUp, title: 'Near-Zero Leakage', description: 'Practices using Referral Intake AI report dropping referral loss from 35% to under 2%.' },
        { Icon: Clock,      title: 'Faster Scheduling', description: 'Cut time-to-appointment from 10+ days to under 48 hours.' },
        { Icon: Zap,        title: 'Fully Automated',   description: 'No manual fax sorting, no intake spreadsheets. Every step is handled automatically.' },
        { Icon: Users,      title: 'Referring MD Trust', description: 'Consistent updates keep referring physicians informed and loyal to your practice.' },
      ]}
      relatedProducts={[
        { Icon: UserPlus, title: 'Referral Intake AI', summary: 'The product that powers end-to-end referral automation.', href: '/products/referral-intake-ai' },
      ]}
    />
  )
}
