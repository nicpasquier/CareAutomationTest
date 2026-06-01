import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: {
    default: 'CareAutomation — Healthcare Operations Automation',
    template: '%s | CareAutomation',
  },
  description:
    'CareAutomation automates Revenue Cycle Management, Prior Authorization, and Referral Intake for independent clinics, hospitals, and specialty care teams.',
  openGraph: {
    siteName: 'CareAutomation',
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
