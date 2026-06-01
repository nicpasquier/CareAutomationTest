export const NAV_LINKS = [
  { label: 'About Us', href: '/about' },
  {
    label: 'Solution Overview',
    dropdown: [
      { label: 'Revenue Cycle Management',      href: '/solutions/revenue-cycle-management' },
      { label: 'Prior Authorization Processing', href: '/solutions/prior-authorization-processing' },
      { label: 'Referral Intake Management',     href: '/solutions/referral-intake-management' },
    ],
  },
  {
    label: 'Products',
    dropdown: [
      { label: 'RCM Automation',                  href: '/products/rcm-automation' },
      { label: 'Prior Auth & Claim Management AI', href: '/products/prior-auth-claim-management-ai' },
      { label: 'Referral Intake AI',               href: '/products/referral-intake-ai' },
      { label: 'Patient Engagement',               href: '/products/patient-engagement' },
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
      'Single agent process',
      'Up to 500 claims/month',
      'Prior auth tracking',
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
      'Up to 2,500 claims/month',
      'Prior Auth & Referral AI',
      'EHR integration (Epic, Athena)',
      'Patient Engagement (SMS + Email)',
      'Priority support',
      'Advanced analytics',
      'Custom payer rules',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: { monthly: null, annual: null },
    description: 'Full operational system reset for large health systems.',
    features: [
      'All Professional features',
      'Unlimited claims',
      'Full RCM Automation suite',
      'Tokenized Web Companion (2FA)',
      'Dedicated success manager',
      'Custom integrations',
      'SLA guarantees',
      'On-site onboarding',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
]

export const SOLUTIONS = [
  {
    title: 'Revenue Cycle Management',
    slug: 'revenue-cycle-management',
    summary: 'Eliminate billing errors and accelerate reimbursement with end-to-end RCM automation.',
    icon: 'CircleDollarSign',
  },
  {
    title: 'Prior Authorization Processing',
    slug: 'prior-authorization-processing',
    summary: 'Reduce prior auth delays from days to minutes with intelligent AI processing.',
    icon: 'ClipboardCheck',
  },
  {
    title: 'Referral Intake Management',
    slug: 'referral-intake-management',
    summary: 'Capture every referral, eliminate drop-off, and accelerate patient intake.',
    icon: 'UserPlus',
  },
]

export const PRODUCTS = [
  {
    title: 'RCM Automation',
    slug: 'rcm-automation',
    badge: 'AI-Powered',
    tagline: 'From claim creation to payment posting — fully automated.',
  },
  {
    title: 'Prior Auth & Claim Management AI',
    slug: 'prior-auth-claim-management-ai',
    badge: 'AI-Powered',
    tagline: 'Intelligent prior auth submission and real-time claim tracking.',
  },
  {
    title: 'Referral Intake AI',
    slug: 'referral-intake-ai',
    badge: 'New',
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
      'CareAutomation cut our prior auth processing time by 80%. Our staff can finally focus on patients, not paperwork.',
    name: 'Dr. Sarah Nguyen',
    title: 'Medical Director',
    org: 'Riverside Specialty Clinic',
  },
  {
    quote:
      'We used to lose 15% of referrals in the intake process. Since implementing Referral Intake AI, that number is near zero.',
    name: 'James Okafor',
    title: 'Operations Manager',
    org: 'Summit Regional Health',
  },
  {
    quote:
      'The RCM Automation suite paid for itself within 60 days. Denial rates dropped and cash flow improved immediately.',
    name: 'Linda Torres',
    title: 'CFO',
    org: 'Westlake Independent Health System',
  },
]

export const SITE_CONFIG = {
  name: 'CareAutomation',
  domain: 'careautomation.net',
  email: 'hello@careautomation.net',
  phone: '1-800-CARE-AUT',
  tagline: 'Automate the Workflow. Elevate the Care.',
}
