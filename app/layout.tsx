import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Care Automation Solutions — Healthcare Operations Automation',
    template: '%s | Care Automation Solutions',
  },
  description:
    'Care Automation Solutions automates Referral Intake and Patient Engagement for independent clinics, hospitals, and specialty care teams.',
  openGraph: {
    siteName: 'Care Automation Solutions',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-body bg-summit-cloud text-summit-slate antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
