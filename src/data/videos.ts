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
    id: 'ramadan-glow',
    title: 'Ramadan Glow',
    category: 'cinematic',
    videoUrl: 'https://drive.google.com/file/d/1yMQpXkVIbAop4iEmGWpbjrob0fBL8pZC/view?usp=drive_link',
    thumbnailUrl: 'https://placehold.co/1280x720/1a1a1a/c4a265/png?text=Ramadan+Glow',
    featured: false,
    description: 'A glow that reflects the beauty of Ramadan, the illuminated streets of Bahria Town Karachi.',
  },
  {
    id: 'treasure-of-faith',
    title: 'Treasure of Faith',
    category: 'cinematic',
    videoUrl: 'https://drive.google.com/file/d/1hhgInplSIvvdGzZkIvK36pzYxeDKnl0c/view?usp=drivesdk',
    thumbnailUrl: 'https://placehold.co/1280x720/1a1a1a/c4a265/png?text=Treasure+of+Faith',
    featured: false,
    description: 'A place where hearts find calm and minds find clarity, a treasure of faith within a masterpiece.',
  },
  {
    id: 'city-that-shines',
    title: 'The City That Shines',
    category: 'cinematic',
    videoUrl: 'https://drive.google.com/file/d/1XbB06NgnnriVOfKtQ4XL25wexnoL4bNN/view?usp=drivesdk',
    thumbnailUrl: 'https://placehold.co/1280x720/1a1a1a/c4a265/png?text=City+That+Shines',
    featured: false,
    description: 'Bahria Town RWP, a community that shines every hour.',
  },
  {
    id: 'bahria-town-story',
    title: 'Life Never Slows Down',
    category: 'cinematic',
    videoUrl: 'https://drive.google.com/file/d/1UC2I4apfcgUlZP-A40337UIlwtNO_08Q/view?usp=drive_link',
    thumbnailUrl: 'https://placehold.co/1280x720/1a1a1a/c4a265/png?text=Life+Never+Slows+Down',
    featured: true,
    description: 'This is Bahria Town! Here, every moment is a story — of life, dreams, and endless motion.',
  },
  {
    id: 'peaceful-living',
    title: 'Peaceful Living',
    category: 'cinematic',
    videoUrl: 'https://drive.google.com/file/d/151v9YpOjI33CrIdjUIkgVKwHCeZciC7L/view?usp=drive_link',
    thumbnailUrl: 'https://placehold.co/1280x720/1a1a1a/c4a265/png?text=Peaceful+Living',
    featured: false,
    description: 'An enriched lifestyle — where mornings begin with calm surroundings and evenings bring quiet contentment.',
  },
  {
    id: 'hassle-free-shopping',
    title: 'Hassle-Free Shopping',
    category: 'cinematic',
    videoUrl: 'https://drive.google.com/file/d/17fC8a88jarnqdaQnlHukcQiVVzGYNJ2i/view?usp=drive_link',
    thumbnailUrl: 'https://placehold.co/1280x720/1a1a1a/c4a265/png?text=Hassle-Free+Shopping',
    featured: false,
    description: 'Say goodbye to shopping stress and hello to convenience — discover a hassle-free shopping experience.',
  },
  {
    id: 'timeless-grandeur',
    title: 'Timeless Grandeur',
    category: 'cinematic',
    videoUrl: 'https://drive.google.com/file/d/1rS0aoriG1G854ERGwHUQyUxeUl1sw0T0/view?usp=drive_link',
    thumbnailUrl: 'https://placehold.co/1280x720/1a1a1a/c4a265/png?text=Timeless+Grandeur',
    featured: false,
    description: 'The grandeur of Egyptian civilization and the allure of its timelessness unfold in every monument.',
  },
  {
    id: 'majestic-eiffel-tower',
    title: 'The Majestic Eiffel Tower',
    category: 'cinematic',
    videoUrl: 'https://drive.google.com/file/d/1gxs32Ol1cY5ynrZtrt0buKyaX1TbvCT-/view?usp=drive_link',
    thumbnailUrl: 'https://placehold.co/1280x720/1a1a1a/c4a265/png?text=Eiffel+Tower',
    featured: false,
    description: 'The majestic Eiffel Tower, shining bright in Bahria Town Karachi, is a sight to behold.',
  },
  {
    id: 'two-perspectives',
    title: 'Two Perspectives, One Masterpiece',
    category: 'cinematic',
    videoUrl: 'https://drive.google.com/file/d/1GXB5dlsTSwk0NPDaoLjfb0lsD41Qim_F/view?usp=drive_link',
    thumbnailUrl: 'https://placehold.co/1280x720/1a1a1a/c4a265/png?text=Two+Perspectives',
    featured: false,
    description: 'Morning awakens its charm, night drapes its mystery — Bahria Town, seen from two perspectives.',
  },
]
