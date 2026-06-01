import Link from 'next/link'
import { ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size    = 'sm' | 'md' | 'lg'

interface ButtonProps {
  children: ReactNode
  href?:      string
  variant?:   Variant
  size?:      Size
  className?: string
  onClick?:   () => void
  type?:      'button' | 'submit' | 'reset'
  disabled?:  boolean
}

const variants: Record<Variant, string> = {
  primary:
    'bg-summit-amber text-white hover:bg-summit-coral active:scale-95 shadow-warm',
  secondary:
    'border-2 border-summit-amber text-summit-amber hover:bg-summit-amber hover:text-white',
  ghost:
    'text-summit-slate hover:text-summit-amber underline-offset-4 hover:underline',
}

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

export default function Button({
  children,
  href,
  variant = 'primary',
  size    = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled,
}: ButtonProps) {
  const base = `inline-flex items-center justify-center font-display font-semibold rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-summit-amber focus-visible:ring-offset-2 ${
    disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
  }`
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return <Link href={href} className={cls}>{children}</Link>
  }
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls}>
      {children}
    </button>
  )
}
