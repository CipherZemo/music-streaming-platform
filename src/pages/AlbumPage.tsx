import { useParams } from 'react-router-dom'

const AlbumPage = () => {
  const { id } = useParams()
  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-4">Album</h1>
      <p className="text-text-secondary">Album {id} — coming in Step 6</p>
    </div>
  )
}
export default AlbumPage
