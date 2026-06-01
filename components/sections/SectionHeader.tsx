interface SectionHeaderProps {
  eyebrow?: string
  title:    string
  subtitle?: string
  centered?: boolean
}

export default function SectionHeader({ eyebrow, title, subtitle, centered = true }: SectionHeaderProps) {
  return (
    <div className={`mb-14 max-w-2xl ${centered ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <p className="text-summit-amber font-semibold text-xs uppercase tracking-widest mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display font-bold text-summit-slate text-3xl md:text-4xl leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-summit-stone text-base md:text-lg leading-relaxed">{subtitle}</p>
      )}
    </div>
  )
}
