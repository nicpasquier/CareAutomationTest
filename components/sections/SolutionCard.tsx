import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ElementType } from 'react'

interface SolutionCardProps {
  Icon:    ElementType
  title:   string
  summary: string
  href:    string
}

export default function SolutionCard({ Icon, title, summary, href }: SolutionCardProps) {
  return (
    <div className="group bg-summit-cloud rounded-card p-8 shadow-card border border-summit-dusk hover:border-summit-amber hover:shadow-warm transition-all">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-summit-amber to-summit-coral flex items-center justify-center mb-5">
        <Icon size={22} className="text-white" strokeWidth={1.5} />
      </div>
      <h3 className="font-display font-bold text-summit-slate text-lg mb-3">{title}</h3>
      <p className="text-summit-stone text-sm leading-relaxed mb-5">{summary}</p>
      <Link
        href={href}
        className="inline-flex items-center gap-1 text-sm font-semibold text-summit-amber group-hover:gap-2 transition-all"
      >
        Learn More <ArrowRight size={14} />
      </Link>
    </div>
  )
}
