import { ElementType } from 'react'

interface FeatureCardProps {
  Icon:        ElementType
  title:       string
  description: string
}

export default function FeatureCard({ Icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-summit-cloud rounded-card p-6 shadow-card border border-summit-dusk hover:shadow-warm transition-shadow">
      <div className="w-10 h-10 rounded-lg bg-summit-amber/10 flex items-center justify-center mb-4">
        <Icon size={20} className="text-summit-amber" strokeWidth={1.5} />
      </div>
      <h3 className="font-display font-bold text-summit-slate text-base mb-2">{title}</h3>
      <p className="text-summit-stone text-sm leading-relaxed">{description}</p>
    </div>
  )
}
