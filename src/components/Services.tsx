'use client'

import { motion } from 'framer-motion'
import { Video, Scissors, Plane, Film, Camera, Smartphone, type LucideIcon } from 'lucide-react'
import { fadeUp, staggerContainer } from '@/lib/animations'
import SectionHeader from '@/components/SectionHeader'
import { services } from '@/data/services'

const iconMap: Record<string, LucideIcon> = {
  Video,
  Scissors,
  Plane,
  Film,
  Camera,
  Smartphone,
}

export function Services() {
  return (
    <section id="services" className="bg-[var(--color-bg-secondary)] py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeader
          overline="What I Do"
          heading="Services"
          subheading="From concept to final cut — every project handled with care."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-14"
        >
          {services.map((service) => {
            const IconComponent = iconMap[service.icon]
            return (
              <motion.div
                key={service.id}
                variants={fadeUp}
                className="bg-[var(--color-bg-card)] border border-[var(--color-border-default)] p-8 hover:border-[var(--color-gold)] transition-all duration-300 group"
              >
                {IconComponent && (
                  <IconComponent
                    className="w-8 h-8 text-[var(--color-text-muted)] group-hover:text-[var(--color-gold)] transition-colors mb-5"
                    aria-hidden="true"
                  />
                )}
                <h3 className="font-body font-semibold text-[var(--color-text-primary)] text-base mb-3">
                  {service.title}
                </h3>
                <p className="font-body text-[var(--color-text-muted)] text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
