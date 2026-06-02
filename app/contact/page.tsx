'use client'
import { useState } from 'react'
import HeroSection    from '@/components/sections/HeroSection'
import SectionWrapper from '@/components/sections/SectionWrapper'
import SectionHeader  from '@/components/sections/SectionHeader'
import Button         from '@/components/ui/Button'
import { Mail, Phone, Clock } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <>
      <HeroSection
        eyebrow="Contact Us"
        title="Let's talk about your clinic's needs."
        subtitle="Whether you're exploring options or ready to get started, our team is here to help."
        centered
      />

      <SectionWrapper bg="mist" id="demo">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Form */}
          <div>
            <SectionHeader eyebrow="Book a Demo" title="See Care Automation Solutions in action" centered={false} />
            {submitted ? (
              <div className="bg-summit-amber/10 border border-summit-amber rounded-card p-8 text-center">
                <p className="font-display font-bold text-summit-slate text-xl mb-2">✅ Request received!</p>
                <p className="text-summit-stone text-sm">We'll be in touch within one business day to confirm your demo time.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {[
                  { id: 'name',  label: 'Full Name',     type: 'text',  required: true },
                  { id: 'org',   label: 'Organization',  type: 'text',  required: true },
                  { id: 'role',  label: 'Role / Title',  type: 'text',  required: false },
                  { id: 'email', label: 'Email Address', type: 'email', required: true },
                  { id: 'phone', label: 'Phone (optional)', type: 'tel', required: false },
                ].map((field) => (
                  <div key={field.id}>
                    <label htmlFor={field.id} className="block text-sm font-medium text-summit-slate mb-1">
                      {field.label} {field.required && <span className="text-summit-coral">*</span>}
                    </label>
                    <input
                      id={field.id}
                      type={field.type}
                      required={field.required}
                      className="w-full px-4 py-3 rounded-lg border border-summit-dusk bg-summit-cloud text-summit-slate text-sm focus:outline-none focus:ring-2 focus:ring-summit-amber"
                    />
                  </div>
                ))}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-summit-slate mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-summit-dusk bg-summit-cloud text-summit-slate text-sm focus:outline-none focus:ring-2 focus:ring-summit-amber resize-none"
                  />
                </div>
                <Button onClick={() => setSubmitted(true)} size="lg" className="w-full justify-center">
                  Send Request
                </Button>
              </div>
            )}
          </div>

          {/* Contact info */}
          <div className="space-y-8">
            <SectionHeader eyebrow="Get In Touch" title="We'd love to hear from you" centered={false} />
            {[
              { Icon: Mail,  label: 'Email',        value: SITE_CONFIG.email },
              { Icon: Phone, label: 'Phone',        value: SITE_CONFIG.phone },
              { Icon: Clock, label: 'Office Hours', value: 'Mon–Fri, 8am–6pm ET' },
            ].map(({ Icon, label, value }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-summit-amber/10 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-summit-amber" />
                </div>
                <div>
                  <p className="font-semibold text-summit-slate text-sm">{label}</p>
                  <p className="text-summit-stone text-sm">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
