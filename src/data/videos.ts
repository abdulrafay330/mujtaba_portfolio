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
    videoUrl: 'https://drive.google.com/file/d/1LEVXbTEQcdfv1LrzB4VS8gNksCZvSAOT/view',
    thumbnailUrl: 'https://placehold.co/1280x720/1a1a1a/c4a265/png?text=Ramadan+Glow',
    featured: false,
    description: 'A glow that reflects the beauty of Ramadan, the illuminated streets of Bahria Town Karachi.',
  },
  {
    id: 'treasure-of-faith',
    title: 'Treasure of Faith',
    category: 'cinematic',
    videoUrl: 'https://drive.google.com/file/d/1ZKOO1w63GDGtcSvtHsE4e2005fiXRfEu/view?usp=drive_link',
    thumbnailUrl: 'https://placehold.co/1280x720/1a1a1a/c4a265/png?text=Treasure+of+Faith',
    featured: false,
    description: 'A place where hearts find calm and minds find clarity, a treasure of faith within a masterpiece.',
  },
  {
    id: 'city-that-shines',
    title: 'The City That Shines',
    category: 'cinematic',
    videoUrl: 'https://drive.google.com/file/d/1mX3d7QwS43L5sbDb_k0tHExuCPohoXFM/view?usp=drive_link',
    thumbnailUrl: 'https://placehold.co/1280x720/1a1a1a/c4a265/png?text=City+That+Shines',
    featured: false,
    description: 'Bahria Town RWP, a community that shines every hour.',
  },
  {
    id: 'midnight-drive',
    title: 'Midnight Drive',
    category: 'automotive',
    videoUrl: 'https://drive.google.com/file/d/1qhMmootb3HE1l5adVNzefrBOMUaiH8wM/view?usp=drive_link',
    thumbnailUrl: 'https://placehold.co/1280x720/1a1a1a/c4a265/png?text=Midnight+Drive',
    featured: true,
    description: 'A cinematic look at a modern car.',
  },
  {
    id: 'urban-elegance',
    title: 'Urban Elegance',
    category: 'portrait',
    videoUrl: 'https://drive.google.com/file/d/1VyXczPFbjYcS_FbkyXTw1oHiZTpwQ-LL/view?usp=drive_link',
    thumbnailUrl: 'https://placehold.co/1280x720/1a1a1a/c4a265/png?text=Urban+Elegance',
    featured: false,
    description: 'A portrait film featuring a model in an urban setting.',
  },
  {
    id: 'aerial-symphony',
    title: 'Aerial Symphony',
    category: 'cinematic',
    videoUrl: 'https://drive.google.com/file/d/1HoE2CdWFEdPTvYz8eoTxEQFQEIP_peWn/view?usp=drive_link',
    thumbnailUrl: 'https://placehold.co/1280x720/1a1a1a/c4a265/png?text=Aerial+Symphony',
    featured: false,
    description: 'Sweeping drone shots and cinematic views.',
  },
  {
    id: 'horizon-lines',
    title: 'Horizon Lines',
    category: 'cinematic',
    videoUrl: 'https://drive.google.com/file/d/1ye0y6aEKxr3l447KeZE_o-GChVChzYL3/view?usp=drive_link',
    thumbnailUrl: 'https://placehold.co/1280x720/1a1a1a/c4a265/png?text=Horizon+Lines',
    featured: false,
    description: 'Dynamic drone footage capturing stunning landscapes.',
  },
  {
    id: 'desert-drift',
    title: 'Desert Drift',
    category: 'cinematic',
    videoUrl: 'https://drive.google.com/file/d/1mIMeYTnKjbWIhyAujPzY2dyDM18Fmoqo/view?usp=drive_link',
    thumbnailUrl: 'https://placehold.co/1280x720/1a1a1a/c4a265/png?text=Desert+Drift',
    featured: false,
    description: 'An automotive feature in a desert landscape.',
  },
  {
    id: 'street-style',
    title: 'Street Style',
    category: 'cinematic',
    videoUrl: 'https://drive.google.com/file/d/1D6L0E7eInedqG6cusicNFY82f0mtg9eZ/view?usp=drive_link',
    thumbnailUrl: 'https://placehold.co/1280x720/1a1a1a/c4a265/png?text=Street+Style',
    featured: false,
    description: 'Capturing the style and motion of a car on the streets.',
  },
  {
    id: 'the-getaway',
    title: 'The Getaway',
    category: 'cinematic',
    videoUrl: 'https://drive.google.com/file/d/1qA0WgJLwDadkEVVxoznS1HzzhOdelRlv/view?usp=drive_link',
    thumbnailUrl: 'https://placehold.co/1280x720/1a1a1a/c4a265/png?text=The+Getaway',
    featured: false,
    description: 'A cinematic car sequence with a sense of adventure.',
  },
  {
    id: 'vogue-in-motion',
    title: 'Vogue in Motion',
    category: 'portrait',
    videoUrl: 'https://drive.google.com/file/d/1CLrIi1MlB3chkDwIqCrglEXvWHVXIR8k/view?usp=drive_link',
    thumbnailUrl: 'https://placehold.co/1280x720/1a1a1a/c4a265/png?text=Vogue+In+Motion',
    featured: false,
    description: 'A stylish ad featuring a model.',
  },
  {
    id: 'solitude',
    title: 'Solitude',
    category: 'cinematic',
    videoUrl: 'https://drive.google.com/file/d/1-MeP-fd8sl3FWmDGmFblSTPjQn_tlG1X/view?usp=drive_link',
    thumbnailUrl: 'https://placehold.co/1280x720/1a1a1a/c4a265/png?text=Solitude',
    featured: false,
    description: 'A contemplative portrait film.',
  },
  {
    id: 'dreamscape',
    title: 'Dreamscape',
    category: 'cinematic',
    videoUrl: 'https://drive.google.com/file/d/18LAZ6Q8GNHledqSlJsL2XcImubilyoDF/view?usp=drive_link',
    thumbnailUrl: 'https://placehold.co/1280x720/1a1a1a/c4a265/png?text=Dreamscape',
    featured: false,
    description: 'An artistic and dreamy portrait video.',
  },
  {
    id: 'road-less-traveled',
    title: 'The Road Less Traveled',
    category: 'cinematic',
    videoUrl: 'https://drive.google.com/file/d/1O4192ZWU6NKNvfVNVoB_hw1bcBDCdgrA/view?usp=drive_link',
    thumbnailUrl: 'https://placehold.co/1280x720/1a1a1a/c4a265/png?text=Road+Less+Traveled',
    featured: false,
    description: 'Exploring scenic routes with a featured car.',
  },
]
