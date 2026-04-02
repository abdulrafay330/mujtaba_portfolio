'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import { getEmbedUrl, isGDriveUrl } from '@/lib/video'
import dynamic from 'next/dynamic'
import type { Video } from '@/types'

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })

interface VideoLightboxProps {
  video: Video
  onClose: () => void
}

export function VideoLightbox({ video, onClose }: VideoLightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const embedUrl = getEmbedUrl(video.videoUrl)
  const useIframe = isGDriveUrl(video.videoUrl)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
      role="dialog"
      aria-modal="true"
      aria-label={`Playing: ${video.title}`}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-5xl mx-auto"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-[var(--color-gold)] transition-colors p-2"
          aria-label="Close video player"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Player */}
        <div className="aspect-video w-full">
          {useIframe ? (
            <iframe
              src={embedUrl}
              title={video.title}
              width="100%"
              height="100%"
              allow="autoplay"
              allowFullScreen
              className="w-full h-full border-0"
            />
          ) : (
            <ReactPlayer
              src={embedUrl}
              playing
              controls
              width="100%"
              height="100%"
            />
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default VideoLightbox
