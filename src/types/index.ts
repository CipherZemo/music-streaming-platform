export interface Artist {
  id: string
  name: string
  imageUrl: string
  bio: string
  genres: string[]
  monthlyListeners: number
  albumIds: string[] // References to albums
}

export interface Album {
  id: string
  title: string
  artistId: string // Reference to artist
  artistName: string // Denormalized for easy display
  imageUrl: string
  releaseYear: number
  genres: string[]
  songIds: string[] // References to songs (ordered tracklist)
}

export interface Song {
  id: string
  title: string
  artistId: string
  artistName: string // Denormalized for easy display
  albumId: string
  albumName: string // Denormalized for easy display
  imageUrl: string // Same as album cover
  duration: number // In seconds
  audioUrl: string // URL to audio file (will be placeholder)
}

export interface Playlist {
  id: string
  title: string
  description: string
  imageUrl: string
  songIds: string[] // References to songs
  createdBy: string // 'system' for curated or user name
  isUserCreated: boolean
}

// Used by the player context to represent the currently playing track
export interface PlayerTrack extends Song {
  playlistContext?: string // Which playlist/album was playing when track started
}
