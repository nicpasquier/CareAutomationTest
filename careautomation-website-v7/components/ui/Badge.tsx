interface BadgeProps {
  children: string
  variant?: 'amber' | 'coral' | 'plum' | 'mist'
}

const variants = {
  amber: 'bg-summit-amber/10 text-summit-amber border-summit-amber/20',
  coral: 'bg-summit-coral/10 text-summit-coral border-summit-coral/20',
  plum:  'bg-summit-plum/10 text-summit-plum  border-summit-plum/20',
  mist:  'bg-summit-mist     text-summit-stone border-summit-dusk',
}

export default function Badge({ children, variant = 'amber' }: BadgeProps) {
  return (
    <span
      className={`inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full border ${
        variants[variant]
      }`}
    >
      {children}
    </span>
  )
}
