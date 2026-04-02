/**
 * Utility functions for handling both Google Drive and Vimeo video URLs.
 *
 * HOW TO USE GOOGLE DRIVE VIDEOS:
 * 1. Upload your video to Google Drive
 * 2. Right-click → Share → "Anyone with the link" → Copy link
 *    You'll get: https://drive.google.com/file/d/FILE_ID/view?usp=sharing
 * 3. Paste that full share URL into videos.ts as the videoUrl
 * 4. The thumbnail and embed URL are generated automatically
 */

/** Extract Google Drive file ID from any GDrive URL format */
export function getGDriveFileId(url: string): string | null {
  const match = url.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/)
  if (match) return match[1]
  const openMatch = url.match(/drive\.google\.com\/open\?id=([a-zA-Z0-9_-]+)/)
  if (openMatch) return openMatch[1]
  return null
}

/** Returns true if the URL is a Google Drive URL */
export function isGDriveUrl(url: string): boolean {
  return getGDriveFileId(url) !== null
}

/**
 * Convert any video URL (share link or embed link) to the correct embed URL.
 * Supports Google Drive and Vimeo player URLs.
 */
export function getEmbedUrl(url: string): string {
  const gdriveId = getGDriveFileId(url)
  if (gdriveId) {
    return `https://drive.google.com/file/d/${gdriveId}/preview`
  }
  // Vimeo URLs pass through as-is (already in player.vimeo.com/video/ID format)
  return url
}

/**
 * Get thumbnail URL for a video.
 * For Google Drive: auto-generates from file ID.
 * For Vimeo: uses the provided thumbnailUrl.
 */
export function getThumbnailUrl(videoUrl: string, fallbackThumbnail?: string): string {
  const gdriveId = getGDriveFileId(videoUrl)
  if (gdriveId) {
    return `https://drive.google.com/thumbnail?id=${gdriveId}&sz=w800`
  }
  return fallbackThumbnail ?? ''
}
