import { Music2 } from 'lucide-react'

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

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#050505] border-t border-[var(--color-border-default)] py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Desktop: three equal columns. Mobile: stacked centered. */}
        <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-4 text-center sm:text-left">

          {/* Left — copyright */}
          <p className="font-body text-[#555555] text-xs sm:text-left text-center">
            © {year} Mujtaba Hassan. All rights reserved.
          </p>

          {/* Center — wordmark */}
          <div className="flex justify-center">
            <a
              href="#hero"
              className="font-display text-[var(--color-gold)] font-bold text-lg tracking-wide hover:text-[var(--color-gold-hover)] transition-colors"
              aria-label="Mujtaba Hassan — back to top"
            >
              Mujtaba Hassan
            </a>
          </div>

          {/* Right — social icons */}
          <div className="flex items-center justify-center sm:justify-end gap-4">
            <a
              href="https://www.instagram.com/m.mujtaba_hassan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#555555] hover:text-[var(--color-gold)] transition-colors"
              aria-label="Mujtaba Hassan on Instagram"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
            <a
              href="https://www.tiktok.com/@m_hssan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#555555] hover:text-[var(--color-gold)] transition-colors"
              aria-label="Mujtaba Hassan on TikTok"
            >
              <Music2 className="w-5 h-5" />
            </a>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer
