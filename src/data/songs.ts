import type { Song } from '@/types'

// We use a free sample MP3 for all tracks as audio placeholder
const SAMPLE_AUDIO = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'

export const songs: Song[] = [
  // --- Aurora Waves - Celestial Drift (album-1) ---
  { id: 'song-1', title: 'Celestial Drift', artistId: 'artist-1', artistName: 'Aurora Waves', albumId: 'album-1', albumName: 'Celestial Drift', imageUrl: 'https://picsum.photos/seed/album1/400/400', duration: 214, audioUrl: SAMPLE_AUDIO },
  { id: 'song-2', title: 'Stardust Memory', artistId: 'artist-1', artistName: 'Aurora Waves', albumId: 'album-1', albumName: 'Celestial Drift', imageUrl: 'https://picsum.photos/seed/album1/400/400', duration: 198, audioUrl: SAMPLE_AUDIO },
  { id: 'song-3', title: 'Orbit', artistId: 'artist-1', artistName: 'Aurora Waves', albumId: 'album-1', albumName: 'Celestial Drift', imageUrl: 'https://picsum.photos/seed/album1/400/400', duration: 241, audioUrl: SAMPLE_AUDIO },
  { id: 'song-4', title: 'Into the Void', artistId: 'artist-1', artistName: 'Aurora Waves', albumId: 'album-1', albumName: 'Celestial Drift', imageUrl: 'https://picsum.photos/seed/album1/400/400', duration: 187, audioUrl: SAMPLE_AUDIO },

  // --- Aurora Waves - Neon Tides (album-2) ---
  { id: 'song-5', title: 'Neon Tides', artistId: 'artist-1', artistName: 'Aurora Waves', albumId: 'album-2', albumName: 'Neon Tides', imageUrl: 'https://picsum.photos/seed/album2/400/400', duration: 222, audioUrl: SAMPLE_AUDIO },
  { id: 'song-6', title: 'Electric Shore', artistId: 'artist-1', artistName: 'Aurora Waves', albumId: 'album-2', albumName: 'Neon Tides', imageUrl: 'https://picsum.photos/seed/album2/400/400', duration: 205, audioUrl: SAMPLE_AUDIO },
  { id: 'song-7', title: 'Glass Ocean', artistId: 'artist-1', artistName: 'Aurora Waves', albumId: 'album-2', albumName: 'Neon Tides', imageUrl: 'https://picsum.photos/seed/album2/400/400', duration: 233, audioUrl: SAMPLE_AUDIO },

  // --- The Midnight - Endless Summer (album-3) ---
  { id: 'song-8', title: 'Endless Summer', artistId: 'artist-2', artistName: 'The Midnight', albumId: 'album-3', albumName: 'Endless Summer', imageUrl: 'https://picsum.photos/seed/album3/400/400', duration: 257, audioUrl: SAMPLE_AUDIO },
  { id: 'song-9', title: 'Days of Thunder', artistId: 'artist-2', artistName: 'The Midnight', albumId: 'album-3', albumName: 'Endless Summer', imageUrl: 'https://picsum.photos/seed/album3/400/400', duration: 231, audioUrl: SAMPLE_AUDIO },
  { id: 'song-10', title: 'Sunset Drive', artistId: 'artist-2', artistName: 'The Midnight', albumId: 'album-3', albumName: 'Endless Summer', imageUrl: 'https://picsum.photos/seed/album3/400/400', duration: 244, audioUrl: SAMPLE_AUDIO },
  { id: 'song-11', title: 'Lost Boy', artistId: 'artist-2', artistName: 'The Midnight', albumId: 'album-3', albumName: 'Endless Summer', imageUrl: 'https://picsum.photos/seed/album3/400/400', duration: 219, audioUrl: SAMPLE_AUDIO },

  // --- The Midnight - Heroes (album-4) ---
  { id: 'song-12', title: 'Heroes', artistId: 'artist-2', artistName: 'The Midnight', albumId: 'album-4', albumName: 'Heroes', imageUrl: 'https://picsum.photos/seed/album4/400/400', duration: 263, audioUrl: SAMPLE_AUDIO },
  { id: 'song-13', title: 'Crystalline', artistId: 'artist-2', artistName: 'The Midnight', albumId: 'album-4', albumName: 'Heroes', imageUrl: 'https://picsum.photos/seed/album4/400/400', duration: 228, audioUrl: SAMPLE_AUDIO },
  { id: 'song-14', title: 'Comeback Kid', artistId: 'artist-2', artistName: 'The Midnight', albumId: 'album-4', albumName: 'Heroes', imageUrl: 'https://picsum.photos/seed/album4/400/400', duration: 246, audioUrl: SAMPLE_AUDIO },

  // --- Nova Pulse - Signal & Noise (album-5) ---
  { id: 'song-15', title: 'Signal', artistId: 'artist-3', artistName: 'Nova Pulse', albumId: 'album-5', albumName: 'Signal & Noise', imageUrl: 'https://picsum.photos/seed/album5/400/400', duration: 312, audioUrl: SAMPLE_AUDIO },
  { id: 'song-16', title: 'White Noise', artistId: 'artist-3', artistName: 'Nova Pulse', albumId: 'album-5', albumName: 'Signal & Noise', imageUrl: 'https://picsum.photos/seed/album5/400/400', duration: 287, audioUrl: SAMPLE_AUDIO },
  { id: 'song-17', title: 'Carrier Wave', artistId: 'artist-3', artistName: 'Nova Pulse', albumId: 'album-5', albumName: 'Signal & Noise', imageUrl: 'https://picsum.photos/seed/album5/400/400', duration: 341, audioUrl: SAMPLE_AUDIO },

  // --- Scarlett Haze - Golden Hour (album-6) ---
  { id: 'song-18', title: 'Golden Hour', artistId: 'artist-4', artistName: 'Scarlett Haze', albumId: 'album-6', albumName: 'Golden Hour', imageUrl: 'https://picsum.photos/seed/album6/400/400', duration: 203, audioUrl: SAMPLE_AUDIO },
  { id: 'song-19', title: 'Honey', artistId: 'artist-4', artistName: 'Scarlett Haze', albumId: 'album-6', albumName: 'Golden Hour', imageUrl: 'https://picsum.photos/seed/album6/400/400', duration: 218, audioUrl: SAMPLE_AUDIO },
  { id: 'song-20', title: 'Wildfire', artistId: 'artist-4', artistName: 'Scarlett Haze', albumId: 'album-6', albumName: 'Golden Hour', imageUrl: 'https://picsum.photos/seed/album6/400/400', duration: 236, audioUrl: SAMPLE_AUDIO },
  { id: 'song-21', title: 'Easy', artistId: 'artist-4', artistName: 'Scarlett Haze', albumId: 'album-6', albumName: 'Golden Hour', imageUrl: 'https://picsum.photos/seed/album6/400/400', duration: 194, audioUrl: SAMPLE_AUDIO },

  // --- Scarlett Haze - Faded Letters (album-7) ---
  { id: 'song-22', title: 'Faded Letters', artistId: 'artist-4', artistName: 'Scarlett Haze', albumId: 'album-7', albumName: 'Faded Letters', imageUrl: 'https://picsum.photos/seed/album7/400/400', duration: 227, audioUrl: SAMPLE_AUDIO },
  { id: 'song-23', title: 'Paper Thin', artistId: 'artist-4', artistName: 'Scarlett Haze', albumId: 'album-7', albumName: 'Faded Letters', imageUrl: 'https://picsum.photos/seed/album7/400/400', duration: 211, audioUrl: SAMPLE_AUDIO },
  { id: 'song-24', title: 'Afterglow', artistId: 'artist-4', artistName: 'Scarlett Haze', albumId: 'album-7', albumName: 'Faded Letters', imageUrl: 'https://picsum.photos/seed/album7/400/400', duration: 249, audioUrl: SAMPLE_AUDIO },

  // --- Lunar Circuit - Phase IV (album-8) ---
  { id: 'song-25', title: 'Phase IV', artistId: 'artist-5', artistName: 'Lunar Circuit', albumId: 'album-8', albumName: 'Phase IV', imageUrl: 'https://picsum.photos/seed/album8/400/400', duration: 386, audioUrl: SAMPLE_AUDIO },
  { id: 'song-26', title: 'Dark Matter', artistId: 'artist-5', artistName: 'Lunar Circuit', albumId: 'album-8', albumName: 'Phase IV', imageUrl: 'https://picsum.photos/seed/album8/400/400', duration: 421, audioUrl: SAMPLE_AUDIO },
  { id: 'song-27', title: 'Event Horizon', artistId: 'artist-5', artistName: 'Lunar Circuit', albumId: 'album-8', albumName: 'Phase IV', imageUrl: 'https://picsum.photos/seed/album8/400/400', duration: 358, audioUrl: SAMPLE_AUDIO },
]
