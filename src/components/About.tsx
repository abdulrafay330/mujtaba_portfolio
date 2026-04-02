'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/animations'
import SectionHeader from '@/components/SectionHeader'

const stats = [
  { value: '2+', label: 'Years Experience' },
  { value: '13+', label: 'Projects Completed' },
  { value: '3', label: 'Industries Covered' },
]

export function About() {
  return (
    <section id="about" className="bg-[var(--color-bg-primary)] py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-16 items-center">
          {/* Left — Photo */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="relative mx-auto w-full max-w-sm lg:max-w-none"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-[var(--color-gold)]/30">
              <Image
                src="/images/about.PNG"
                alt="Mujtaba Hassan with Sony A3 camera and DJI drone controller"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 384px, 40vw"
              />
              {/* Dark vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
            {/* Gold offset border */}
            <div className="absolute inset-0 border border-[var(--color-gold)]/40 translate-x-3 translate-y-3 pointer-events-none" />
          </motion.div>

          {/* Right — Text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="flex flex-col gap-6"
          >
            <SectionHeader
              overline="About Me"
              heading="I Believe Every Story Deserves to be Told Beautifully."
            />

            <motion.div variants={fadeUp} className="flex flex-col gap-4 mt-2">
              <p className="font-body text-[var(--color-text-muted)] leading-relaxed text-[0.9375rem]">
                I&apos;m Mujtaba Hassan — a creative and detail-oriented videographer and video
                editor with 2+ years of freelance experience in filming, editing, and producing
                content for clients across various industries.
              </p>
              <p className="font-body text-[var(--color-text-muted)] leading-relaxed text-[0.9375rem]">
                Adept at visual storytelling, using industry-standard tools, and managing projects
                from concept to delivery. I&apos;m passionate about creating visually compelling
                content that engages audiences and leaves a lasting impression.
              </p>
              <p className="font-body text-[var(--color-text-muted)] leading-relaxed text-[0.9375rem]">
                Whether it&apos;s capturing the energy of an event, the essence of a brand, or a
                cinematic short — I bring passion and professionalism to every single frame.
              </p>
            </motion.div>

            {/* Equipment callout */}
            <motion.div
              variants={fadeUp}
              className="bg-[var(--color-bg-card)] border-l-2 border-[var(--color-gold)] px-5 py-4"
            >
              <p className="font-body text-[var(--color-gold)] text-sm tracking-wide">
                Shot with Sony A3 &nbsp;·&nbsp; DJI Mavic 3 Classic Drone
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="border-t border-[var(--color-border-default)] pt-12 mt-20"
        >
          <div className="flex flex-wrap justify-center gap-16">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                className="flex flex-col items-center text-center"
              >
                <span className="font-display text-5xl text-[var(--color-gold)] font-bold leading-none">
                  {stat.value}
                </span>
                <span className="section-label text-[var(--color-text-muted)] mt-2">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
