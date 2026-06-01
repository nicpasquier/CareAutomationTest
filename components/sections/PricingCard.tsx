import Button from '@/components/ui/Button'
import { Check } from 'lucide-react'

interface PricingCardProps {
  name:        string
  price:       { monthly: number | null; annual: number | null }
  description: string
  features:    string[]
  cta:         string
  highlighted: boolean
  billing:     'monthly' | 'annual'
}

export default function PricingCard({ name, price, description, features, cta, highlighted, billing }: PricingCardProps) {
  const amount = billing === 'annual' ? price.annual : price.monthly

  return (
    <div
      className={`rounded-card p-8 border flex flex-col ${
        highlighted
          ? 'bg-summit-plum border-summit-amber shadow-warm text-white'
          : 'bg-summit-cloud border-summit-dusk shadow-card text-summit-slate'
      }`}
    >
      <p className={`font-display font-bold text-lg mb-1 ${
        highlighted ? 'text-white' : 'text-summit-slate'
      }`}>{name}</p>
      <p className={`text-sm mb-6 ${
        highlighted ? 'text-white/70' : 'text-summit-stone'
      }`}>{description}</p>

      <div className="mb-8">
        {amount !== null ? (
          <>
            <span className={`font-display font-bold text-4xl ${
              highlighted ? 'text-white' : 'text-summit-slate'
            }`}>${amount}</span>
            <span className={`text-sm ml-1 ${
              highlighted ? 'text-white/60' : 'text-summit-stone'
            }`}>/mo</span>
          </>
        ) : (
          <span className={`font-display font-bold text-2xl ${
            highlighted ? 'text-white' : 'text-summit-slate'
          }`}>Custom</span>
        )}
      </div>

      <ul className="space-y-3 mb-10 flex-1">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm">
            <Check size={15} className="text-summit-amber mt-0.5 shrink-0" />
            <span className={highlighted ? 'text-white/85' : 'text-summit-stone'}>{f}</span>
          </li>
        ))}
      </ul>

      <Button
        href={name === 'Enterprise' ? '/contact' : '/contact#demo'}
        variant={highlighted ? 'primary' : 'secondary'}
        className="w-full justify-center"
      >
        {cta}
      </Button>
    </div>
  )
}
