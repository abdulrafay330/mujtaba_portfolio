'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useScrollNavbar } from '@/hooks/useScrollNavbar'
import { navItems } from '@/data/navigation'

export function Navbar() {
  const isScrolled = useScrollNavbar()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-20 flex items-center transition-all duration-500 ${
          isScrolled
            ? 'bg-[rgba(10,10,10,0.95)] backdrop-blur-md border-b border-[var(--color-border-default)]'
            : 'bg-transparent'
        }`}
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full flex items-center justify-between">
          {/* Nav links — left on desktop */}
          <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="font-body text-[var(--color-text-primary)] hover:text-[var(--color-gold)] transition-colors text-sm tracking-wider"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Wordmark — right on desktop */}
          <a
            href="#hero"
            className="hidden md:block font-display text-[var(--color-gold)] font-bold text-base tracking-wide hover:text-[var(--color-gold-hover)] transition-colors"
            aria-label="Mujtaba Hassan — back to top"
          >
            Mujtaba Hassan
          </a>

          {/* Mobile: wordmark left, hamburger right */}
          <a
            href="#hero"
            className="md:hidden font-display text-[var(--color-gold)] font-bold text-base tracking-wide"
            aria-label="Mujtaba Hassan — back to top"
          >
            Mujtaba Hassan
          </a>
          <button
            className="md:hidden text-[var(--color-text-primary)] hover:text-[var(--color-gold)] transition-colors p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[var(--color-bg-primary)] flex flex-col items-center justify-center"
            onClick={(e) => {
              if (e.target === e.currentTarget) setIsMenuOpen(false)
            }}
          >
            <ul className="flex flex-col items-center gap-8 list-none m-0 p-0">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="font-display text-[var(--color-text-primary)] hover:text-[var(--color-gold)] transition-colors text-4xl font-bold"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
