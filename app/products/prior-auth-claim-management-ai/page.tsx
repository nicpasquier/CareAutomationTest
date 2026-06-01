import type { Metadata } from 'next'
import ProductPageTemplate from '@/components/sections/ProductPageTemplate'
import { ClipboardCheck, Zap, Bell, ShieldCheck, RefreshCw, BarChart2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Prior Auth & Claim Management AI',
  description: 'Intelligent prior authorization submission and real-time claim management for healthcare practices.',
}

export default function PriorAuthProductPage() {
  return (
    <ProductPageTemplate
      badge="AI-Powered"
      title="Prior Auth & Claim Management AI"
      tagline="Intelligent prior auth submission and real-time claim tracking."
      subtitle="Combines automated prior authorization with claim lifecycle management so your team never has to chase a payer again."
      features={[
        { Icon: ClipboardCheck, title: 'Auto-Auth Detection',   description: 'Automatically identifies procedures requiring prior auth based on payer and plan rules.' },
        { Icon: Zap,            title: 'AI Submission Builder', description: 'Compiles clinical criteria, diagnosis codes, and supporting documents from the EHR automatically.' },
        { Icon: Bell,           title: 'Expiration Alerts',     description: 'Tracks every auth approval and alerts before expiration so you never lose an earned auth.' },
        { Icon: ShieldCheck,    title: 'Payer Portal Automation', description: 'Submits to payer portals and handles phone-based payers with AI-assisted call workflows.' },
        { Icon: RefreshCw,      title: 'Appeals Management',    description: 'Denied auths automatically trigger appeal workflows with supporting documentation.' },
        { Icon: BarChart2,      title: 'Auth Analytics',        description: 'Track approval rates, turnaround times, and denial patterns by payer and CPT code.' },
      ]}
      steps={[
        { number: 1, title: 'Order Placed',         description: 'Physician places an order in the EHR. System auto-detects auth requirement.' },
        { number: 2, title: 'Packet Built',          description: 'Clinical criteria, notes, and codes compiled in under 60 seconds.' },
        { number: 3, title: 'Submitted to Payer',   description: 'Auth request submitted via portal or phone automation.' },
        { number: 4, title: 'Tracked & Managed',    description: 'Status tracked in real time. Expirations and denials handled automatically.' },
      ]}
      integrations={[
        { name: 'Epic' }, { name: 'Athenahealth' }, { name: 'Cerner' }, { name: 'UnitedHealth' },
        { name: 'Cigna' }, { name: 'Aetna' }, { name: 'BlueCross' }, { name: 'Availity' },
      ]}
      pricingTier="Professional"
    />
  )
}
