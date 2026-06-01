import type { Metadata } from 'next'
import SolutionPageTemplate from '@/components/sections/SolutionPageTemplate'
import { ClipboardCheck, Clock, Zap, Users, ShieldCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Prior Authorization Processing',
  description: 'Reduce prior auth turnaround from days to minutes with CareAutomation\'s AI-powered processing.',
}

export default function PriorAuthSolutionPage() {
  return (
    <SolutionPageTemplate
      eyebrow="Solution"
      title="Prior Authorization Processing"
      subtitle="AI-powered prior auth submission that turns days of waiting into minutes of processing."
      problemTitle="How manual prior auth hurts your practice"
      problemItems={[
        'Average prior auth takes 11 business hours of staff time per request, pulling clinical staff away from patients.',
        'Incomplete submissions are the #1 cause of auth delays — missing clinical criteria triggers back-and-forth with payers.',
        'Auth expirations go untracked — procedures get scheduled without valid auth, causing surprise denials at billing.',
        '79% of physicians say prior auth causes treatment delays that harm patients (AMA survey).',
      ]}
      steps={[
        { number: 1, title: 'Auto-Detect',    description: 'Identify which procedures require prior auth based on payer + plan rules automatically.' },
        { number: 2, title: 'Build the Case', description: 'AI compiles clinical criteria, diagnosis codes, and supporting docs from the EHR.' },
        { number: 3, title: 'Submit',         description: 'Submit to payer portals or via phone with AI-assisted call handling.' },
        { number: 4, title: 'Track & Alert',  description: 'Real-time status tracking. Alerts when approvals near expiration.' },
      ]}
      benefits={[
        { Icon: Zap,         title: '4-Minute Processing', description: 'From order to submission in under 4 minutes, vs. industry average of 2+ days.' },
        { Icon: Clock,       title: 'Staff Time Saved',   description: 'Reclaim 8-12 hours per week per staff member previously lost to auth work.' },
        { Icon: ShieldCheck, title: 'No Expired Auths',   description: 'Automated expiration tracking means you never lose an approval you\'ve already earned.' },
        { Icon: Users,       title: 'Better Patient Care', description: 'Faster authorizations mean patients start treatment sooner.' },
      ]}
      relatedProducts={[
        { Icon: ClipboardCheck, title: 'Prior Auth & Claim Management AI', summary: 'Intelligent prior auth and claim tracking in one product.', href: '/products/prior-auth-claim-management-ai' },
      ]}
    />
  )
}
