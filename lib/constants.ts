export const NAV_LINKS = [
  { label: 'About Us', href: '/about' },
  {
    label: 'Solution Overview',
    dropdown: [
      { label: 'Referral Intake Management',      href: '/solutions/referral-intake-management' },
      { label: 'Patient Outreach Automation',     href: '/solutions/patient-outreach-automation' },
    ],
  },
  {
    label: 'Products',
    dropdown: [
      { label: 'Referral Intake AI',   href: '/products/referral-intake-ai' },
      { label: 'Patient Engagement',   href: '/products/patient-engagement' },
    ],
  },
  { label: 'Pricing',    href: '/pricing' },
  { label: 'Contact Us', href: '/contact' },
]

export const PRICING_TIERS = [
  {
    name: 'Starter',
    price: { monthly: 299, annual: 249 },
    description: 'For small independent clinics getting started with automation.',
    features: [
      'Referral Intake AI',
      'Up to 300 referrals/month',
      'SMS patient reminders',
      'Email support',
      'Standard reporting dashboard',
    ],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Professional',
    price: { monthly: 799, annual: 649 },
    description: 'For growing practices that need multi-workflow automation.',
    features: [
      'All Starter features',
      'Unlimited referrals',
      'Patient Engagement suite (SMS + Email)',
      'Tokenized Web Companion',
      'EHR integration (Epic, Athena)',
      'Priority support',
      'Advanced analytics',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: { monthly: null, annual: null },
    description: 'Full operational automation for large health systems.',
    features: [
      'All Professional features',
      'Unlimited everything',
      'Two-factor patient auth (2FA)',
      'Dedicated success manager',
      'Custom EHR integrations',
      'SLA guarantees',
      'On-site onboarding',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
]

export const SOLUTIONS = [
  {
    title: 'Referral Intake Management',
    slug: 'referral-intake-management',
    summary: 'Capture every referral, eliminate drop-off, and accelerate patient intake automatically.',
    icon: 'UserPlus',
  },
  {
    title: 'Patient Outreach Automation',
    slug: 'patient-outreach-automation',
    summary: 'Reach patients via SMS, secure email, and tokenized web flows — before and after every visit.',
    icon: 'MessageSquare',
  },
]

export const PRODUCTS = [
  {
    title: 'Referral Intake AI',
    slug: 'referral-intake-ai',
    badge: 'AI-Powered',
    tagline: 'Automated referral capture, routing, and intake coordination.',
  },
  {
    title: 'Patient Engagement',
    slug: 'patient-engagement',
    badge: 'New',
    tagline: 'SMS, email, and secure tokenized web flows that patients actually use.',
  },
]

export const TESTIMONIALS = [
  {
    quote:
      'We used to lose 15% of referrals in the intake process. Since implementing Referral Intake AI, that number is near zero.',
    name: 'James Okafor',
    title: 'Operations Manager',
    org: 'Summit Regional Health',
  },
  {
    quote:
      'Patient no-show rates dropped by 38% within the first month of using the Patient Engagement suite. The tokenized links are something our patients actually use.',
    name: 'Dr. Sarah Nguyen',
    title: 'Medical Director',
    org: 'Riverside Specialty Clinic',
  },
  {
    quote:
      'Care Automation Solutions paid for itself in 60 days. The referral pipeline visibility alone changed how we run our operations.',
    name: 'Linda Torres',
    title: 'CFO',
    org: 'Westlake Independent Health System',
  },
]

export const SITE_CONFIG = {
  name: 'Care Automation Solutions',
  domain: 'careautomation.net',
  email: 'hello@careautomation.net',
  phone: '1-800-CARE-AUT',
  tagline: 'The Automation Behind Exceptional Care.',
}
