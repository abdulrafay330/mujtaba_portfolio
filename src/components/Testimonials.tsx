'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/animations'
import SectionHeader from '@/components/SectionHeader'
import { testimonials } from '@/data/testimonials'

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-[var(--color-bg-primary)] py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeader
          overline="Kind Words"
          heading="What Clients Say"
          centered
        />

        {testimonials.length > 0 ? (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14"
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={fadeUp}
                className="bg-[var(--color-bg-card)] border-l-2 border-[var(--color-gold)] p-8 relative"
              >
                {/* Opening quote */}
                <span
                  className="font-display text-[var(--color-gold)] text-7xl leading-none absolute top-4 left-6 select-none"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>

                {/* Quote text */}
                <p className="font-body text-[var(--color-text-primary)] text-sm leading-relaxed italic pt-8">
                  {testimonial.quote}
                </p>

                {/* Attribution */}
                <div className="mt-5 pt-5 border-t border-[var(--color-border-default)]">
                  <p className="font-body text-[var(--color-gold)] font-semibold text-sm">{testimonial.name}</p>
                  <p className="font-body text-[var(--color-text-muted)] text-xs mt-1">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="text-center mt-14"
          >
            <p className="font-body text-[var(--color-text-muted)] text-lg">
              Reviews will be posted soon.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Testimonials
