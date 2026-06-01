import type { Metadata } from 'next'
import ProductPageTemplate from '@/components/sections/ProductPageTemplate'
import { FileText, ShieldCheck, Zap, TrendingUp, RefreshCw, Bell } from 'lucide-react'

export const metadata: Metadata = {
  title: 'RCM Automation',
  description: 'End-to-end revenue cycle automation for healthcare clinics. From claim creation to payment posting.',
}

export default function RCMProductPage() {
  return (
    <ProductPageTemplate
      badge="AI-Powered"
      title="RCM Automation"
      tagline="From claim creation to payment posting — fully automated."
      subtitle="Our RCM Automation product handles the entire revenue cycle: charge capture, claim scrubbing, submission, tracking, denial management, and payment reconciliation."
      features={[
        { Icon: FileText,    title: 'Intelligent Claim Scrubbing', description: 'AI validates every claim against payer-specific rules before submission, catching errors that cause denials.' },
        { Icon: Zap,         title: 'Automated Submission',        description: 'Claims submitted electronically to all major payers within minutes of service documentation.' },
        { Icon: ShieldCheck, title: 'Denial Prevention',           description: 'Pre-submission logic trained on millions of claims identifies and resolves denial triggers proactively.' },
        { Icon: TrendingUp,  title: 'AR Acceleration',             description: 'Automated follow-up on unpaid claims reduces average days-in-AR from 45 to under 20.' },
        { Icon: RefreshCw,   title: 'Denial Rework Engine',        description: 'When denials do occur, AI reworks and resubmits with corrected data automatically.' },
        { Icon: Bell,        title: 'Real-Time Alerts',            description: 'Instant notifications for payer responses, denials, and payment postings.' },
      ]}
      steps={[
        { number: 1, title: 'Connect Your EHR',    description: 'We integrate with Epic, Athena, Cerner, and others via HL7/FHIR in 1-3 days.' },
        { number: 2, title: 'Configure Payer Rules', description: 'Our team loads your payer contracts and configures submission logic.' },
        { number: 3, title: 'Go Live',              description: 'Claims begin flowing automatically. No change to your clinical workflow.' },
        { number: 4, title: 'Monitor & Optimize',   description: 'Dashboard shows collection rates, denial trends, and AR aging in real time.' },
      ]}
      integrations={[
        { name: 'Epic' }, { name: 'Athenahealth' }, { name: 'Cerner' }, { name: 'eClinicalWorks' },
        { name: 'Change Healthcare' }, { name: 'Availity' }, { name: 'TriZetto' }, { name: 'QuickBooks' },
      ]}
      pricingTier="Professional"
    />
  )
}
