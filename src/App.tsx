import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import HomePage from '@/pages/HomePage'
import SearchPage from '@/pages/SearchPage'
import LibraryPage from '@/pages/LibraryPage'
import LikedSongsPage from '@/pages/LikedSongsPage'
import PlaylistPage from '@/pages/PlaylistPage'
import AlbumPage from '@/pages/AlbumPage'
import ArtistPage from '@/pages/ArtistPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="library" element={<LibraryPage />} />
          <Route path="liked" element={<LikedSongsPage />} />
          <Route path="playlist/:id" element={<PlaylistPage />} />
          <Route path="album/:id" element={<AlbumPage />} />
          <Route path="artist/:id" element={<ArtistPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
