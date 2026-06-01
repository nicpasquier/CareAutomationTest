interface TestimonialProps {
  quote: string
  name:  string
  title: string
  org:   string
}

export default function TestimonialCard({ quote, name, title, org }: TestimonialProps) {
  return (
    <div className="bg-summit-mist rounded-card p-8 border border-summit-dusk shadow-card">
      <p className="text-summit-slate text-sm leading-relaxed mb-6 italic">&ldquo;{quote}&rdquo;</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-summit-amber to-summit-coral flex items-center justify-center text-white font-bold text-sm">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-display font-semibold text-summit-slate text-sm">{name}</p>
          <p className="text-summit-stone text-xs">{title} — {org}</p>
        </div>
      </div>
    </div>
  )
}
