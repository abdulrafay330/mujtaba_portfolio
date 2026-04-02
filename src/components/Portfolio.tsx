'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/animations'
import SectionHeader from '@/components/SectionHeader'
import VideoCard from '@/components/VideoCard'
import { videos } from '@/data/videos'
import { useFilteredVideos } from '@/hooks/useFilteredVideos'
import { getEmbedUrl, isGDriveUrl } from '@/lib/video'
import type { Video, VideoCategory } from '@/types'

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })
const VideoLightbox = dynamic(() => import('@/components/VideoLightbox'), { ssr: false })

const filterCategories: { value: VideoCategory; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'cinematic', label: 'Cinematic' },
  { value: 'automotive', label: 'Automotive' },
  { value: 'portrait', label: 'Portrait' },
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<VideoCategory>('all')
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null)

  const filteredVideos = useFilteredVideos(videos, activeCategory)
  const featuredVideo = videos.find((v) => v.featured)

  return (
    <section id="portfolio" className="bg-[var(--color-bg-secondary)] py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeader
          overline="My Work"
          heading="The Reel"
          subheading="Every frame intentional."
        />

        {/* Featured reel */}
        {activeCategory === 'all' && featuredVideo && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="mt-14"
          >
            <p className="section-label mb-3">Featured Reel</p>
            <div className="max-w-4xl mx-auto border border-[var(--color-gold)]/30 p-1">
              <div className="aspect-video w-full">
                {isGDriveUrl(featuredVideo.videoUrl) ? (
                  <iframe
                    src={getEmbedUrl(featuredVideo.videoUrl)}
                    title={featuredVideo.title}
                    width="100%"
                    height="100%"
                    allow="autoplay"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                ) : (
                  <ReactPlayer
                    src={getEmbedUrl(featuredVideo.videoUrl)}
                    width="100%"
                    height="100%"
                    controls
                  />
                )}
              </div>
            </div>
          </motion.div>
        )}

        {/* Filter tabs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="flex flex-wrap gap-3 mt-14"
          role="tablist"
          aria-label="Filter videos by category"
        >
          {filterCategories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              role="tab"
              aria-selected={activeCategory === cat.value}
              className={`font-body text-xs uppercase tracking-widest px-5 py-2 transition-colors border ${
                activeCategory === cat.value
                  ? 'bg-[var(--color-gold)] text-black font-semibold border-[var(--color-gold)]'
                  : 'border-[var(--color-border-default)] text-[var(--color-text-muted)] hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Video grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredVideos.map((video) => (
              <motion.div
                key={video.id}
                variants={fadeUp}
                layout
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.95 }}
              >
                <VideoCard video={video} onPlay={setSelectedVideo} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedVideo && (
          <VideoLightbox
            video={selectedVideo}
            onClose={() => setSelectedVideo(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}

export default Portfolio
