import { useMemo } from 'react'
import type { Video, VideoCategory } from '@/types'

export function useFilteredVideos(videos: Video[], activeCategory: VideoCategory): Video[] {
  return useMemo(() => {
    if (activeCategory === 'all') return videos
    return videos.filter((v) => v.category === activeCategory)
  }, [videos, activeCategory])
}
