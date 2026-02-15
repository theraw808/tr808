
import './App.css'
import { 
  Check, 
  X, 
  Music, 
  Radio, 
  Users, 
  Share2, 
  Headphones, 
  Globe, 
  Zap,
  Shield,
  Clock,
  ExternalLink
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

interface PricingTier {
  name: string
  price: string
  description: string
  features: {
    text: string
    included: boolean
    icon?: React.ReactNode
  }[]
  featured?: boolean
  cta: string
  stripeLink: string
}

const pricingTiers: PricingTier[] = [
  {
    name: 'STARTER',
    price: '$9.99',
    description: 'Perfect for emerging artists',
    cta: 'Subscribe Now',
    stripeLink: 'https://buy.stripe.com/9B6bJ2cUl7fU7E99mrejK00',
    features: [
      { text: 'Directory Profile', included: true, icon: <Users className="w-5 h-5" /> },
      { text: 'Weekly Air Time', included: true, icon: <Radio className="w-5 h-5" /> },
      { text: 'Fan Voting Access', included: false, icon: <Zap className="w-5 h-5" /> },
      { text: 'Social Media Push', included: false, icon: <Share2 className="w-5 h-5" /> },
      { text: 'DJ Servicing (1 song)', included: true, icon: <Headphones className="w-5 h-5" /> },
      { text: 'Monthly Submissions (2)', included: true, icon: <Music className="w-5 h-5" /> },
    ]
  },
  {
    name: 'PRODUCER',
    price: '$19.99',
    description: 'For serious producers',
    cta: 'Subscribe Now',
    featured: true,
    stripeLink: 'https://buy.stripe.com/fZu8wQ2g46bQcYtcyDejK01',
    features: [
      { text: 'Directory Profile', included: true, icon: <Users className="w-5 h-5" /> },
      { text: 'Weekly Air Time', included: true, icon: <Radio className="w-5 h-5" /> },
      { text: 'Fan Voting Access', included: true, icon: <Zap className="w-5 h-5" /> },
      { text: 'Social Media Push', included: false, icon: <Share2 className="w-5 h-5" /> },
      { text: 'DJ Servicing (3 songs)', included: true, icon: <Headphones className="w-5 h-5" /> },
      { text: 'Monthly Submissions (5)', included: true, icon: <Music className="w-5 h-5" /> },
    ]
  },
  {
    name: 'PLATINUM',
    price: '$34.99',
    description: 'Maximum exposure package',
    cta: 'Subscribe Now',
    stripeLink: 'https://buy.stripe.com/8x23cwg6U8jY8IdaqvejK02',
    features: [
      { text: 'Directory Profile', included: true, icon: <Users className="w-5 h-5" /> },
      { text: 'Weekly Air Time', included: true, icon: <Radio className="w-5 h-5" /> },
      { text: 'Fan Voting Access', included: true, icon: <Zap className="w-5 h-5" /> },
      { text: 'Social Media Push', included: true, icon: <Share2 className="w-5 h-5" /> },
      { text: 'DJ Servicing (5 songs)', included: true, icon: <Headphones className="w-5 h-5" /> },
      { text: 'Monthly Submissions (10)', included: true, icon: <Music className="w-5 h-5" /> },
    ]
  },
  {
    name: 'EXECUTIVE',
    price: '$49.99',
    description: 'The ultimate artist package',
    cta: 'Subscribe Now',
    stripeLink: 'https://buy.stripe.com/fZu14o7Aoas69MhbuzejK03',
    features: [
      { text: 'Directory Profile', included: true, icon: <Users className="w-5 h-5" /> },
      { text: 'Weekly Air Time', included: true, icon: <Radio className="w-5 h-5" /> },
      { text: 'Fan Voting Access', included: true, icon: <Zap className="w-5 h-5" /> },
      { text: 'Social Media Push', included: true, icon: <Share2 className="w-5 h-5" /> },
      { text: 'DJ Servicing (Unlimited)', included: true, icon: <Headphones className="w-5 h-5" /> },
      { text: 'Monthly Submissions (Unlimited)', included: true, icon: <Music className="w-5 h-5" /> },
    ]
  }
]

const faqs = [
  {
    question: 'How do I get started with my subscription?',
    answer: 'Simply choose your plan, complete the secure checkout through Stripe, and you\'ll receive immediate access to your artist dashboard. From there, you can set up your profile and start submitting your music right away.'
  },
  {
    question: 'Can I upgrade or downgrade my plan?',
    answer: 'Yes! You can change your subscription tier at any time from your Stripe customer portal. Upgrades take effect immediately, and downgrades will apply at the start of your next billing cycle.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, MasterCard, American Express, Discover) as well as PayPal. All payments are processed securely through Stripe.'
  },
  {
    question: 'Is there a contract or can I cancel anytime?',
    answer: 'No long-term contracts! All our subscriptions are month-to-month, and you can cancel at any time through your Stripe customer portal. Your access will continue until the end of your current billing period.'
  },
  {
    question: 'How quickly will my music be featured?',
    answer: 'Once you submit your track through your dashboard, our team reviews it within 24-48 hours. Approved tracks are typically added to rotation within 3-5 business days.'
  },
  {
    question: 'Do you offer refunds?',
    answer: 'We offer a 7-day money-back guarantee for new subscribers. If you\'re not satisfied with our service, contact us within 7 days of your first payment for a full refund.'
  }
]

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <img 
                src="/tr808-logo.jpg" 
                alt="TR808" 
                className="h-12 w-auto object-contain"
              />
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#pricing" className="text-zinc-400 hover:text-white transition-colors">Pricing</a>
              <a href="#features" className="text-zinc-400 hover:text-white transition-colors">Features</a>
              <a href="#faq" className="text-zinc-400 hover:text-white transition-colors">FAQ</a>
            </div>
            <Button 
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-gold text-black font-bold"
            >
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 bg-glow">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-500/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <img 
              src="/tr808-logo.jpg" 
              alt="TR808 Underground Radio" 
              className="h-32 md:h-48 w-auto mx-auto object-contain"
            />
          </div>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
            <span className="text-gold">ARTIST DIRECT-TO-</span>
            <br />
            <span className="text-gold">CONSUMER PLANS</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 mb-4 font-light tracking-wide">
            YOUR GRIND. YOUR FANS. YOUR CONTROL.
          </p>
          <p className="text-zinc-500 max-w-2xl mx-auto mb-10">
            Join the premier platform for independent artists. Get your music heard, 
            build your fanbase, and take control of your career with our subscription plans.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-gold text-black font-bold text-lg px-8 py-6"
            >
              View Pricing Plans
            </Button>
            <Button 
              variant="outline"
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-zinc-700 text-white hover:bg-zinc-800 text-lg px-8 py-6"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-gold mb-4">WHAT YOU GET</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Every subscription includes powerful tools to boost your music career
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Users className="w-8 h-8" />, title: 'Directory Profile', desc: 'Complete artist profile with bio, music links, and direct connection to your website' },
              { icon: <Radio className="w-8 h-8" />, title: 'Weekly Air Time', desc: 'Guaranteed radio play with flexible rotation slots on our network' },
              { icon: <Zap className="w-8 h-8" />, title: 'Fan Voting', desc: 'Fans vote you into regular rotation, increasing your exposure' },
              { icon: <Share2 className="w-8 h-8" />, title: 'Social Media Push', desc: 'Featured promotion on our station social media accounts' },
              { icon: <Headphones className="w-8 h-8" />, title: 'DJ Servicing', desc: 'Send your tracks to our DJ network for extra exposure' },
              { icon: <Music className="w-8 h-8" />, title: 'Song Submissions', desc: 'Monthly track submissions to keep your music in rotation' },
            ].map((feature, idx) => (
              <div key={idx} className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-yellow-500/50 transition-colors">
                <div className="text-yellow-500 mb-4">{feature.icon}</div>
                <h3 className="font-display text-xl mb-2">{feature.title}</h3>
                <p className="text-zinc-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-gold mb-4">CHOOSE YOUR PLAN</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Select the perfect subscription tier for your music career goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingTiers.map((tier, idx) => (
              <div 
                key={idx} 
                className={`pricing-card bg-zinc-950 rounded-xl p-6 ${tier.featured ? 'pricing-card-featured' : ''}`}
              >
                <div className="text-center mb-6">
                  <h3 className="font-display text-2xl text-white mb-2">{tier.name}</h3>
                  <div className="text-4xl font-display text-gold mb-1">{tier.price}</div>
                  <div className="text-zinc-500 text-sm">/ MONTH</div>
                </div>

                <div className="space-y-3 mb-8">
                  {tier.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-center gap-3">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                      ) : (
                        <X className="w-5 h-5 text-zinc-600 flex-shrink-0" />
                      )}
                      <span className={feature.included ? 'text-zinc-300' : 'text-zinc-600'}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                <a 
                  href={tier.stripeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full flex items-center justify-center gap-2 font-bold py-4 px-6 rounded-lg transition-all ${
                    tier.featured 
                      ? 'btn-gold text-black' 
                      : 'bg-zinc-800 text-white hover:bg-zinc-700'
                  }`}
                >
                  {tier.cta}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>

          {/* Comparison Table */}
          <div className="mt-20 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-zinc-800">
                  <th className="text-left py-4 px-4 text-zinc-400 font-normal">Features</th>
                  {pricingTiers.map((tier, idx) => (
                    <th key={idx} className="text-center py-4 px-4">
                      <div className="font-display text-xl text-white">{tier.name}</div>
                      <div className="text-gold">{tier.price}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Directory Profile', key: 0 },
                  { name: 'Weekly Air Time', key: 1 },
                  { name: 'Fan Voting Access', key: 2 },
                  { name: 'Social Media Push', key: 3 },
                  { name: 'DJ Servicing', key: 4 },
                  { name: 'Monthly Submissions', key: 5 },
                ].map((row, ridx) => (
                  <tr key={ridx} className="border-b border-zinc-800/50">
                    <td className="py-4 px-4 text-zinc-300">{row.name}</td>
                    {pricingTiers.map((tier, tidx) => (
                      <td key={tidx} className="text-center py-4 px-4">
                        {tier.features[row.key].included ? (
                          <Check className="w-5 h-5 text-yellow-500 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-zinc-600 mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Shield className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="font-display text-xl mb-2">Secure Payments</h3>
              <p className="text-zinc-400 text-sm">256-bit SSL encryption powered by Stripe</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="font-display text-xl mb-2">24/7 Support</h3>
              <p className="text-zinc-400 text-sm">Our team is here to help you succeed</p>
            </div>
            <div className="flex flex-col items-center">
              <Globe className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="font-display text-xl mb-2">Global Reach</h3>
              <p className="text-zinc-400 text-sm">Connect with fans worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl text-gold mb-4">FREQUENTLY ASKED QUESTIONS</h2>
            <p className="text-zinc-400">
              Got questions? We've got answers.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border border-zinc-800 rounded-lg px-6 bg-zinc-950">
                <AccordionTrigger className="text-left text-white hover:text-yellow-500 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-zinc-400 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-gold mb-6">
            READY TO TAKE YOUR MUSIC TO THE NEXT LEVEL?
          </h2>
          <p className="text-zinc-400 mb-8 text-lg">
            Join thousands of artists who are already growing their fanbase with TR808.
          </p>
          <Button 
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-gold text-black font-bold text-lg px-10 py-6"
          >
            Get Started Today
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center">
              <img 
                src="/tr808-logo.jpg" 
                alt="TR808" 
                className="h-10 w-auto object-contain"
              />
            </div>
            <div className="flex items-center gap-6 text-sm text-zinc-500">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
            <div className="text-zinc-600 text-sm">
              © 2026 TR808 Subscription. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
