import { useParams } from 'react-router-dom'
import { moviesData } from '../data/moviesData'

const Movie = () => {
  const { id } = useParams()
  const movie = moviesData.find((movie) => movie.id === parseInt(id))

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white text-gray-800 shadow-md rounded-lg p-6">
      <img
        src={movie.imageURL}
        alt={movie.title}
        className="w-full h-80 object-cover rounded-lg md:col-span-1"
      />

      <div className="md:col-span-1 space-y-4">
        <div className="text-2xl font-bold">{movie.title}</div>

        <p className="text-gray-500">
          {movie.year} &middot; {movie.genre.join(', ')}
        </p>

        <p className="text-gray-600">{movie.summary}</p>

        <div className="space-y-2">
          <div>
            <span className="font-semibold">Director:</span> {movie.director}
          </div>
          <div>
            <span className="font-semibold">Cast:</span> {movie.cast.join(', ')}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Movie
