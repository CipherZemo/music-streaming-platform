import { useParams } from 'react-router-dom'

const PlaylistPage = () => {
  const { id } = useParams()
  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-4">Playlist</h1>
      <p className="text-text-secondary">Playlist {id} — coming in Step 6</p>
    </div>
  )
}
export default PlaylistPage
