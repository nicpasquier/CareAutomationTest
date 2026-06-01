import type { Metadata } from 'next'
import SolutionPageTemplate from '@/components/sections/SolutionPageTemplate'
import { CircleDollarSign, Clock, TrendingUp, ShieldCheck, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Revenue Cycle Management',
  description: 'Automate your entire revenue cycle — from claim creation to payment posting — with CareAutomation\'s RCM solution.',
}

export default function RCMSolutionPage() {
  return (
    <SolutionPageTemplate
      eyebrow="Solution"
      title="Revenue Cycle Management Automation"
      subtitle="Stop leaving money on the table. Automate billing, reduce denials, and accelerate collections."
      problemTitle="Why RCM fails without automation"
      problemItems={[
        'Manual claim entry introduces coding errors that lead to immediate denials, costing practices thousands per month.',
        'Payer rule changes happen constantly — manual teams can\'t keep up, leading to outdated submission logic.',
        'Denial management is reactive: staff spend hours reworking claims that could have been caught before submission.',
        'Accounts receivable ages out: slow follow-up on unpaid claims reduces collections and strains cash flow.',
      ]}
      steps={[
        { number: 1, title: 'Claim Intake',     description: 'Automatically capture charges from your EHR and validate against payer-specific rules.' },
        { number: 2, title: 'Pre-Submission QA', description: 'AI scrubs every claim for errors, missing data, and payer rule violations before submission.' },
        { number: 3, title: 'Submit & Track',   description: 'Claims submitted electronically with real-time status tracking across all payers.' },
        { number: 4, title: 'Post & Reconcile', description: 'Payments posted automatically. Denials flagged and reworked intelligently.' },
      ]}
      benefits={[
        { Icon: TrendingUp,  title: 'Higher Collections',  description: 'Reduce claim denials by up to 60% and increase net collections within 90 days.' },
        { Icon: Clock,       title: 'Faster Reimbursement', description: 'Cut average days-in-AR from 45+ days to under 20.' },
        { Icon: ShieldCheck, title: 'Compliance Built-In',  description: 'Automatically updated payer rules keep every claim compliant.' },
        { Icon: Zap,         title: 'Zero Manual Entry',    description: 'End-to-end automation means your billing team focuses on exceptions, not routine claims.' },
      ]}
      relatedProducts={[
        { Icon: CircleDollarSign, title: 'RCM Automation', summary: 'The full product suite powering this solution.', href: '/products/rcm-automation' },
      ]}
    />
  )
}
