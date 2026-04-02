'use client'

import { motion } from 'framer-motion'
import { Mail, Music2 } from 'lucide-react'
import { fadeUp, staggerContainer } from '@/lib/animations'
import SectionHeader from '@/components/SectionHeader'

/** Instagram camera icon — inline SVG (lucide removed it in v1.7) */
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

const contactItems = [
  {
    id: 'email',
    icon: Mail,
    label: 'Email',
    value: 'mh3680921@gmail.com',
    href: 'mailto:mh3680921@gmail.com',
    external: false,
  },
  {
    id: 'instagram',
    icon: InstagramIcon,
    label: 'Instagram',
    value: '@m.mujtaba_hassan',
    href: 'https://www.instagram.com/m.mujtaba_hassan',
    external: true,
  },
  {
    id: 'tiktok',
    icon: Music2,
    label: 'TikTok',
    value: '@m_hssan',
    href: 'https://www.tiktok.com/@m_hssan',
    external: true,
  },
]

export function Contact() {
  return (
    <section id="contact" className="bg-[var(--color-bg-secondary)] py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeader
          overline="Get in Touch"
          heading="Let's Create Something"
          subheading="Available for freelance projects. Let's talk."
          centered
        />

        {/* Contact cards — centered row */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 max-w-3xl mx-auto"
        >
          {contactItems.map((item) => {
            const IconComponent = item.icon
            return (
              <motion.a
                key={item.id}
                variants={fadeUp}
                href={item.href}
                {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="flex flex-col items-center gap-4 bg-[var(--color-bg-card)] border border-[var(--color-border-default)] hover:border-[var(--color-gold)] p-8 text-center group transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center border border-[var(--color-border-default)] group-hover:border-[var(--color-gold)] transition-colors rounded-full">
                  <IconComponent className="w-5 h-5 text-[var(--color-text-muted)] group-hover:text-[var(--color-gold)] transition-colors" />
                </div>
                <div>
                  <p className="font-body text-[var(--color-text-muted)] text-xs uppercase tracking-widest mb-1">
                    {item.label}
                  </p>
                  <p className="font-body text-[var(--color-text-primary)] text-sm group-hover:text-[var(--color-gold)] transition-colors">
                    {item.value}
                  </p>
                </div>
              </motion.a>
            )
          })}
        </motion.div>

        {/* Availability note */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center font-body text-[var(--color-text-muted)] text-sm mt-10"
        >
          Based in Pakistan &nbsp;·&nbsp; Available worldwide
        </motion.p>
      </div>
    </section>
  )
}

export default Contact
