'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useScrollNavbar } from '@/hooks/useScrollNavbar'

export function ScrollIndicator() {
  const isScrolled = useScrollNavbar()

  return (
    <motion.div
      animate={{ opacity: isScrolled ? 0 : 1 }}
      transition={{ duration: 0.3 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none"
      aria-hidden="true"
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
      >
        <ChevronDown className="w-6 h-6 text-[var(--color-gold)] opacity-70" />
      </motion.div>
    </motion.div>
  )
}

export default ScrollIndicator
