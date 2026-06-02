import Link from 'next/link'
import { SOLUTIONS, PRODUCTS, SITE_CONFIG } from '@/lib/constants'
import { Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-summit-plum text-summit-dusk">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <p className="font-display font-bold text-white text-lg mb-3" style={{ fontFamily: 'Sora, sans-serif' }}>
              Care Automation Solutions
            </p>
            <p className="text-sm leading-relaxed opacity-75">{SITE_CONFIG.tagline}</p>
            <div className="flex gap-3 mt-5">
              <a href="#" aria-label="LinkedIn" className="hover:text-summit-amber transition-colors"><Linkedin size={17} /></a>
              <a href="#" aria-label="Twitter"  className="hover:text-summit-amber transition-colors"><Twitter  size={17} /></a>
            </div>
          </div>

          <div>
            <p className="font-semibold text-white text-xs uppercase tracking-widest mb-4">Solutions</p>
            {SOLUTIONS.map((s) => (
              <Link key={s.slug} href={`/solutions/${s.slug}`}
                className="block text-sm mb-2 opacity-75 hover:opacity-100 hover:text-summit-amber transition-colors">
                {s.title}
              </Link>
            ))}
          </div>

          <div>
            <p className="font-semibold text-white text-xs uppercase tracking-widest mb-4">Products</p>
            {PRODUCTS.map((p) => (
              <Link key={p.slug} href={`/products/${p.slug}`}
                className="block text-sm mb-2 opacity-75 hover:opacity-100 hover:text-summit-amber transition-colors">
                {p.title}
              </Link>
            ))}
          </div>

          <div>
            <p className="font-semibold text-white text-xs uppercase tracking-widest mb-4">Company</p>
            {[
              { label: 'About Us',   href: '/about' },
              { label: 'Pricing',    href: '/pricing' },
              { label: 'Contact Us', href: '/contact' },
            ].map((l) => (
              <Link key={l.href} href={l.href}
                className="block text-sm mb-2 opacity-75 hover:opacity-100 hover:text-summit-amber transition-colors">
                {l.label}
              </Link>
            ))}
            <p className="text-sm mt-4 opacity-60">{SITE_CONFIG.email}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs opacity-50">
          <p>© {new Date().getFullYear()} Care Automation Solutions. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:opacity-100">Privacy Policy</Link>
            <Link href="/terms"   className="hover:opacity-100">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
