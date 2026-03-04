import { useParams } from 'react-router-dom'

const ArtistPage = () => {
  const { id } = useParams()
  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-4">Artist</h1>
      <p className="text-text-secondary">Artist {id} — coming in Step 6</p>
    </div>
  )
}
export default ArtistPage
