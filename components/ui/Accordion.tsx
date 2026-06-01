'use client'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface AccordionItem {
  question: string
  answer:   string
}

export default function Accordion({ items }: { items: AccordionItem[] }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="divide-y divide-summit-dusk border border-summit-dusk rounded-card overflow-hidden">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex justify-between items-center px-6 py-4 text-left hover:bg-summit-mist transition-colors"
            aria-expanded={open === i}
          >
            <span className="font-display font-semibold text-summit-slate text-sm pr-4">
              {item.question}
            </span>
            <ChevronDown
              size={18}
              className={`shrink-0 text-summit-amber transition-transform ${
                open === i ? 'rotate-180' : ''
              }`}
            />
          </button>
          {open === i && (
            <div className="px-6 pb-4 text-sm text-summit-stone leading-relaxed">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
