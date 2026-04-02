import type { Video } from '@/types'

/**
 * HOW TO ADD YOUR GOOGLE DRIVE VIDEOS:
 *
 * 1. Open Google Drive and upload your video file
 * 2. Right-click the video → "Share" → change to "Anyone with the link" → Copy link
 *    The link will look like: https://drive.google.com/file/d/ABCDE12345/view?usp=sharing
 * 3. Paste that full link as the `videoUrl` below
 * 4. Thumbnails are generated automatically — no thumbnailUrl needed for Google Drive
 * 5. Set featured: true for the video you want displayed as the featured showreel
 */
export const videos: Video[] = [
  {
    id: 'bahria-01',
    title: 'Bahria Film 01',
    category: 'bahria',
    videoUrl: 'https://drive.google.com/file/d/REPLACE_WITH_GDRIVE_FILE_ID/view?usp=sharing',
    featured: true,
  },
  {
    id: 'bahria-02',
    title: 'Bahria Film 02',
    category: 'bahria',
    videoUrl: 'https://drive.google.com/file/d/REPLACE_WITH_GDRIVE_FILE_ID/view?usp=sharing',
    featured: false,
  },
  {
    id: 'bahria-03',
    title: 'Bahria Film 03',
    category: 'bahria',
    videoUrl: 'https://drive.google.com/file/d/REPLACE_WITH_GDRIVE_FILE_ID/view?usp=sharing',
    featured: false,
  },
  {
    id: 'bahria-04',
    title: 'Bahria Film 04',
    category: 'bahria',
    videoUrl: 'https://drive.google.com/file/d/REPLACE_WITH_GDRIVE_FILE_ID/view?usp=sharing',
    featured: false,
  },
  {
    id: 'bahria-05',
    title: 'Bahria Film 05',
    category: 'bahria',
    videoUrl: 'https://drive.google.com/file/d/REPLACE_WITH_GDRIVE_FILE_ID/view?usp=sharing',
    featured: false,
  },
  {
    id: 'bahria-06',
    title: 'Bahria Film 06',
    category: 'bahria',
    videoUrl: 'https://drive.google.com/file/d/REPLACE_WITH_GDRIVE_FILE_ID/view?usp=sharing',
    featured: false,
  },
  {
    id: 'bahria-07',
    title: 'Bahria Film 07',
    category: 'bahria',
    videoUrl: 'https://drive.google.com/file/d/REPLACE_WITH_GDRIVE_FILE_ID/view?usp=sharing',
    featured: false,
  },
  {
    id: 'bahria-08',
    title: 'Bahria Film 08',
    category: 'bahria',
    videoUrl: 'https://drive.google.com/file/d/REPLACE_WITH_GDRIVE_FILE_ID/view?usp=sharing',
    featured: false,
  },
  {
    id: 'bahria-09',
    title: 'Bahria Film 09',
    category: 'bahria',
    videoUrl: 'https://drive.google.com/file/d/REPLACE_WITH_GDRIVE_FILE_ID/view?usp=sharing',
    featured: false,
  },
  {
    id: 'bahria-10',
    title: 'Bahria Film 10',
    category: 'bahria',
    videoUrl: 'https://drive.google.com/file/d/REPLACE_WITH_GDRIVE_FILE_ID/view?usp=sharing',
    featured: false,
  },
  {
    id: 'bahria-11',
    title: 'Bahria Film 11',
    category: 'bahria',
    videoUrl: 'https://drive.google.com/file/d/REPLACE_WITH_GDRIVE_FILE_ID/view?usp=sharing',
    featured: false,
  },
  {
    id: 'automotive-01',
    title: 'Automotive Cinematic',
    category: 'automotive',
    videoUrl: 'https://drive.google.com/file/d/REPLACE_WITH_GDRIVE_FILE_ID/view?usp=sharing',
    featured: false,
  },
  {
    id: 'portrait-01',
    title: 'Portrait Film',
    category: 'portrait',
    videoUrl: 'https://drive.google.com/file/d/REPLACE_WITH_GDRIVE_FILE_ID/view?usp=sharing',
    featured: false,
  },
]
