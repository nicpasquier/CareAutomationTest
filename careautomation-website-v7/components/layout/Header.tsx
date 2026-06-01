'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { NAV_LINKS } from '@/lib/constants'
import { Menu, X, ChevronDown } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function Header() {
  const [scrolled, setScrolled]   = useState(false)
  const [mobileOpen, setMobile]   = useState(false)
  const [openDrop, setOpenDrop]   = useState<string | null>(null)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpenDrop(null)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const headerBg = scrolled
    ? 'bg-summit-cloud shadow-warm'
    : 'bg-transparent'

  const navColor  = scrolled ? 'text-summit-slate hover:text-summit-amber' : 'text-summit-cloud hover:text-summit-gold'

  return (
    <header
      ref={ref}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">

        {/* Logo */}
        <Link
          href="/"
          className={`font-display font-bold text-xl tracking-wide transition-colors ${
            scrolled ? 'text-summit-slate' : 'text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]'
          }`}
        >
          CareAutomation
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) =>
            link.dropdown ? (
              <div key={link.label} className="relative">
                <button
                  onClick={() => setOpenDrop(openDrop === link.label ? null : link.label)}
                  className={`flex items-center gap-1 text-sm font-medium transition-colors ${navColor}`}
                  aria-haspopup="true"
                  aria-expanded={openDrop === link.label}
                >
                  {link.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${
                      openDrop === link.label ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openDrop === link.label && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-summit-cloud rounded-card shadow-card border border-summit-dusk overflow-hidden z-50">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpenDrop(null)}
                        className="block px-4 py-3 text-sm text-summit-slate hover:bg-summit-mist hover:text-summit-amber transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href!}
                className={`text-sm font-medium transition-colors ${navColor}`}
              >
                {link.label}
              </Link>
            )
          )}
          <Button href="/contact#demo" size="sm">Book a Demo</Button>
        </nav>

        {/* Mobile hamburger */}
        <button
          className={`lg:hidden p-2 rounded-md ${scrolled ? 'text-summit-slate' : 'text-white'}`}
          onClick={() => setMobile(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-summit-cloud border-t border-summit-dusk px-6 pb-6">
          {NAV_LINKS.map((link) =>
            link.dropdown ? (
              <div key={link.label} className="mt-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-summit-stone mb-2">
                  {link.label}
                </p>
                {link.dropdown.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobile(false)}
                    className="block py-2 text-sm text-summit-slate hover:text-summit-amber"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href!}
                onClick={() => setMobile(false)}
                className="block mt-4 text-sm font-medium text-summit-slate hover:text-summit-amber"
              >
                {link.label}
              </Link>
            )
          )}
          <Button href="/contact#demo" className="mt-6 w-full" size="sm">Book a Demo</Button>
        </div>
      )}
    </header>
  )
}
