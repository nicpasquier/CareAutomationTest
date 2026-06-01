import { ReactNode } from 'react'

interface SectionProps {
  children:    ReactNode
  className?:  string
  bg?:         'cloud' | 'mist' | 'plum' | 'white'
  id?:         string
}

const bgs = {
  cloud: 'bg-summit-cloud',
  mist:  'bg-summit-mist',
  plum:  'bg-summit-plum',
  white: 'bg-white',
}

export default function SectionWrapper({ children, className = '', bg = 'cloud', id }: SectionProps) {
  return (
    <section id={id} className={`${bgs[bg]} py-20 md:py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {children}
      </div>
    </section>
  )
}
