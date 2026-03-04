import { songs } from '@/data/songs'
import { albums } from '@/data/albums'
import { artists } from '@/data/artists'
import { playlists } from '@/data/playlists'
import type { Song, Album, Artist, Playlist } from '@/types'

// --- Songs ---
export const getAllSongs = (): Song[] => songs

export const getSongById = (id: string): Song | undefined =>
  songs.find((s) => s.id === id)

export const getSongsByIds = (ids: string[]): Song[] =>
  ids.map((id) => songs.find((s) => s.id === id)).filter(Boolean) as Song[]

// --- Albums ---
export const getAllAlbums = (): Album[] => albums

export const getAlbumById = (id: string): Album | undefined =>
  albums.find((a) => a.id === id)

export const getAlbumsByArtist = (artistId: string): Album[] =>
  albums.filter((a) => a.artistId === artistId)

// --- Artists ---
export const getAllArtists = (): Artist[] => artists

export const getArtistById = (id: string): Artist | undefined =>
  artists.find((a) => a.id === id)

// --- Playlists ---
export const getAllPlaylists = (): Playlist[] => playlists

export const getPlaylistById = (id: string): Playlist | undefined =>
  playlists.find((p) => p.id === id)

// --- Home Page Data ---
export const getFeaturedPlaylists = (): Playlist[] => playlists.slice(0, 4)

export const getRecentlyPlayed = (): Song[] => songs.slice(0, 6)

export const getTopArtists = (): Artist[] => artists.slice(0, 4)

export const getFeaturedAlbums = (): Album[] => albums.slice(0, 4)

// --- Search ---
export const searchAll = (query: string): { songs: Song[]; albums: Album[]; artists: Artist[] } => {
  const q = query.toLowerCase().trim()
  if (!q) return { songs: [], albums: [], artists: [] }

  return {
    songs: songs.filter(
      (s) => s.title.toLowerCase().includes(q) || s.artistName.toLowerCase().includes(q)
    ),
    albums: albums.filter(
      (a) => a.title.toLowerCase().includes(q) || a.artistName.toLowerCase().includes(q)
    ),
    artists: artists.filter((a) => a.name.toLowerCase().includes(q)),
  }
}
