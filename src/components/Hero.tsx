'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { heroStagger, heroItem } from '@/lib/animations'
import ScrollIndicator from '@/components/ScrollIndicator'

export function Hero() {
  return (
    <section id="hero" className="relative min-h-svh overflow-hidden flex items-end justify-center pb-[10vh]">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.png"
          alt="Mujtaba Hassan — filmmaker operating a drone controller with Sony camera in a parking structure"
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
        />
      </div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.92) 100%)',
        }}
      />

      {/* Cinematic letterbox bars */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-[var(--color-gold)] opacity-60" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[var(--color-gold)] opacity-60" aria-hidden="true" />

      {/* Text content — centered */}
      <div className="relative z-10 text-center px-6 w-full max-w-4xl">
        <motion.div
          variants={heroStagger}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-3"
        >
          {/* Name — biggest, first */}
          <motion.h1
            variants={heroItem}
            className="font-display text-[var(--color-text-primary)] font-bold leading-none tracking-tight"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)' }}
          >
            Mujtaba Hassan
          </motion.h1>

          {/* Visual Storyteller — gold, below name */}
          <motion.p
            variants={heroItem}
            className="font-display text-[var(--color-gold)] italic"
            style={{ fontSize: 'clamp(0.9rem, 1.8vw, 1.15rem)' }}
          >
            Visual Storyteller
          </motion.p>

          {/* Subtitle */}
          <motion.p
            variants={heroItem}
            className="font-body text-[var(--color-text-primary)] tracking-[0.2em] text-xs md:text-sm mt-1"
          >
            Videographer &nbsp;·&nbsp; Editor &nbsp;·&nbsp; Creator
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={heroItem} className="flex gap-3 flex-wrap justify-center mt-6">
            <a
              href="#portfolio"
              className="bg-[var(--color-gold)] text-black font-body font-semibold text-sm uppercase tracking-widest px-8 py-3 hover:bg-[var(--color-gold-hover)] transition-colors inline-block"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border border-[var(--color-gold)] text-[var(--color-gold)] font-body font-semibold text-sm uppercase tracking-widest px-8 py-3 hover:bg-[var(--color-gold)] hover:text-black transition-colors inline-block"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <ScrollIndicator />
    </section>
  )
}

export default Hero
