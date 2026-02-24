import type { Artist } from '@/types'

export const artists: Artist[] = [
  {
    id: 'artist-1',
    name: 'Aurora Waves',
    imageUrl: 'https://picsum.photos/seed/artist1/400/400',
    bio: 'Aurora Waves is an indie electronic artist known for dreamy synth landscapes and ethereal vocals that transport listeners to another dimension.',
    genres: ['Indie Electronic', 'Dream Pop', 'Chillwave'],
    monthlyListeners: 4200000,
    albumIds: ['album-1', 'album-2'],
  },
  {
    id: 'artist-2',
    name: 'The Midnight',
    imageUrl: 'https://picsum.photos/seed/artist2/400/400',
    bio: 'The Midnight blends 80s nostalgia with modern synthwave, crafting cinematic soundscapes that feel like a summer night drive.',
    genres: ['Synthwave', 'Retrowave', 'Indie Pop'],
    monthlyListeners: 8100000,
    albumIds: ['album-3', 'album-4'],
  },
  {
    id: 'artist-3',
    name: 'Nova Pulse',
    imageUrl: 'https://picsum.photos/seed/artist3/400/400',
    bio: 'Nova Pulse pushes boundaries with genre-defying electronic music that merges ambient textures with hard-hitting beats.',
    genres: ['Electronic', 'Ambient', 'IDM'],
    monthlyListeners: 1900000,
    albumIds: ['album-5'],
  },
  {
    id: 'artist-4',
    name: 'Scarlett Haze',
    imageUrl: 'https://picsum.photos/seed/artist4/400/400',
    bio: 'Scarlett Haze is a soulful singer-songwriter whose music weaves heartfelt storytelling with lush indie-pop production.',
    genres: ['Indie Pop', 'Soul', 'R&B'],
    monthlyListeners: 6500000,
    albumIds: ['album-6', 'album-7'],
  },
  {
    id: 'artist-5',
    name: 'Lunar Circuit',
    imageUrl: 'https://picsum.photos/seed/artist5/400/400',
    bio: 'Lunar Circuit is a duo that creates pulsating techno and hypnotic electronic music designed for festival stages.',
    genres: ['Techno', 'Electronic', 'House'],
    monthlyListeners: 3300000,
    albumIds: ['album-8'],
  },
]
