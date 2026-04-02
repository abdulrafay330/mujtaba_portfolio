'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/animations'

interface SectionHeaderProps {
  overline: string
  heading: string
  subheading?: string
  centered?: boolean
}

export function SectionHeader({ overline, heading, subheading, centered = false }: SectionHeaderProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className={centered ? 'text-center' : ''}
    >
      <motion.p variants={fadeUp} className="section-label mb-3">
        {overline}
      </motion.p>
      <motion.h2
        variants={fadeUp}
        className="font-display text-[var(--color-text-primary)] font-bold leading-tight"
        style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
      >
        {heading}
      </motion.h2>
      {subheading && (
        <motion.p
          variants={fadeUp}
          className="font-body text-[var(--color-text-muted)] mt-4 text-base leading-relaxed max-w-2xl"
        >
          {subheading}
        </motion.p>
      )}
    </motion.div>
  )
}

export default SectionHeader
