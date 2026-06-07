'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { NAV_LINKS } from '@/lib/constants'
import { Menu, X, ChevronDown } from 'lucide-react'

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
      if (ref.current && !ref.current.contains(e.target as Node)) setOpenDrop(null)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const headerBg  = scrolled ? 'bg-summit-cloud/95 backdrop-blur-md shadow-card' : 'bg-transparent'
  const textColor = scrolled ? 'text-summit-slate hover:text-summit-amber' : 'text-white/90 hover:text-white'

  return (
    <header ref={ref} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">

        <Link href="/"
          className={`font-display font-bold text-lg tracking-tight transition-colors ${
            scrolled ? 'text-summit-slate' : 'text-white'
          }`}
          style={{ fontFamily: 'Sora, sans-serif', letterSpacing: '-0.01em' }}
        >
          Care Automation Solutions
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) =>
            link.dropdown ? (
              <div key={link.label} className="relative">
                <button
                  onClick={() => setOpenDrop(openDrop === link.label ? null : link.label)}
                  className={`flex items-center gap-1 text-sm font-medium transition-colors ${textColor}`}
                  style={{ fontFamily: 'Sora, sans-serif' }}
                >
                  {link.label}
                  <ChevronDown size={13} className={`transition-transform ${openDrop === link.label ? 'rotate-180' : ''}`} />
                </button>
                {openDrop === link.label && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-summit-cloud rounded-card shadow-card border border-summit-dusk overflow-hidden z-50">
                    {link.dropdown.map((item) => (
                      <Link key={item.href} href={item.href} onClick={() => setOpenDrop(null)}
                        className="block px-4 py-3 text-sm text-summit-slate hover:bg-summit-mist hover:text-summit-amber transition-colors"
                        style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={link.href} href={link.href!}
                className={`text-sm font-medium transition-colors ${textColor}`}
                style={{ fontFamily: 'Sora, sans-serif' }}>
                {link.label}
              </Link>
            )
          )}
          <a href="/contact#demo"
            className="inline-flex items-center justify-center text-sm font-semibold rounded-lg px-5 py-2 transition-all duration-200 hover:brightness-110"
            style={{
                background: 'linear-gradient(135deg, #7B3FA0, #4A1E6E)',
                color: '#fff',
                fontFamily: 'Sora, sans-serif',
                boxShadow: '0 2px 16px rgba(100,40,160,0.45)',
            }}>
            Book a Demo
          </a>
        </nav>

        <button className={`lg:hidden p-2 ${scrolled ? 'text-summit-slate' : 'text-white'}`}
          onClick={() => setMobile(!mobileOpen)} aria-label="Toggle menu">
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-summit-cloud border-t border-summit-dusk px-6 pb-6">
          {NAV_LINKS.map((link) =>
            link.dropdown ? (
              <div key={link.label} className="mt-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-summit-stone mb-2">{link.label}</p>
                {link.dropdown.map((item) => (
                  <Link key={item.href} href={item.href} onClick={() => setMobile(false)}
                    className="block py-2 text-sm text-summit-slate hover:text-summit-amber">
                    {item.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link key={link.href} href={link.href!} onClick={() => setMobile(false)}
                className="block mt-4 text-sm font-medium text-summit-slate hover:text-summit-amber">
                {link.label}
              </Link>
            )
          )}
          <a href="/contact#demo"
            className="mt-6 w-full inline-flex items-center justify-center text-sm font-semibold rounded-lg px-5 py-3 text-white"
            style={{ background: 'linear-gradient(135deg, #C97C3A, #B85C3E)' }}>
            Book a Demo
          </a>
        </div>
      )}
    </header>
  )
}
