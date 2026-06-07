import Button from '@/components/ui/Button'

interface CTABannerProps {
  title?:    string
  subtitle?: string
  variant?:  'plum' | 'amber'
}

export default function CTABanner({
  title    = 'Ready to transform your clinic operations?',
  subtitle = 'Book a 30-minute demo and see Care Automation Solutions in action.',
  variant  = 'plum',
}: CTABannerProps) {
  const bg = variant === 'plum' ? 'bg-summit-plum' : 'bg-summit-amber'
  return (
    <section className={`${bg} py-20`}>
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="font-display font-bold text-white text-3xl md:text-4xl mb-4">{title}</h2>
        <p className="text-white/75 text-base md:text-lg mb-10">{subtitle}</p>
        <Button href="/contact#demo" size="lg"
          className={variant === 'plum'
            ? 'bg-summit-amber hover:bg-summit-coral'
            : 'bg-white text-summit-amber hover:bg-summit-mist'
          }
        >
          Book a Demo
        </Button>
      </div>
    </section>
  )
}
