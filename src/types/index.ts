export type VideoCategory = 'all' | 'cinematic' | 'automotive' | 'portrait'

export interface Video {
  id: string
  title: string
  category: Exclude<VideoCategory, 'all'>
  /** Accepts Google Drive share links OR Vimeo player URLs */
  videoUrl: string
  /** Optional — auto-generated for Google Drive, required for Vimeo */
  thumbnailUrl?: string
  featured: boolean
  description?: string
}

export interface Service {
  id: string
  icon: string
  title: string
  description: string
}

export interface Testimonial {
  id: string
  quote: string
  name: string
  role: string
}

export interface NavItem {
  label: string
  href: string
}

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export type FormStatus = 'idle' | 'loading' | 'success' | 'error'
