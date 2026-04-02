'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { PlayCircle } from 'lucide-react'
import { getThumbnailUrl } from '@/lib/video'
import type { Video } from '@/types'

interface VideoCardProps {
  video: Video
  onPlay: (video: Video) => void
}

export function VideoCard({ video, onPlay }: VideoCardProps) {
  const thumbnail = getThumbnailUrl(video.videoUrl, video.thumbnailUrl)

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onPlay(video)
    }
  }

  return (
    <motion.article
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="bg-[var(--color-bg-card)] border border-[var(--color-border-default)] hover:border-[var(--color-gold)] transition-all duration-300 cursor-pointer group"
      onClick={() => onPlay(video)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`Play ${video.title}`}
    >
      {/* Thumbnail */}
      <div className="aspect-video relative overflow-hidden bg-[var(--color-bg-primary)]">
        {thumbnail && (
          <Image
            src={thumbnail}
            alt={`${video.title} — video thumbnail`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            unoptimized
          />
        )}
        {/* Play overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-all duration-300">
          <PlayCircle className="w-12 h-12 text-white/80 group-hover:text-[var(--color-gold)] group-hover:scale-110 transition-all duration-300" />
        </div>
      </div>

      {/* Card footer */}
      <div className="p-4">
        <h3 className="font-body font-semibold text-[var(--color-text-primary)] text-sm">{video.title}</h3>
        <p className="section-label text-[var(--color-gold)] text-xs mt-1 capitalize">{video.category}</p>
      </div>
    </motion.article>
  )
}

export default VideoCard
