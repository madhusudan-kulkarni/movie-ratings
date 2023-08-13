import { Link } from 'react-router-dom'
import { RiStarLine, RiStarFill } from 'react-icons/ri'

const MovieCard = ({ movie, watchlist, starred, dispatch }) => {
  const addToWatchlist = () => {
    dispatch({ type: 'ADD_MOVIE_TO_WATCHLIST', payload: movie })
  }

  const removeFromWatchlist = () => {
    dispatch({ type: 'REMOVE_MOVIE_FROM_WATCHLIST', payload: movie.id })
  }

  const addToStarred = () => {
    dispatch({ type: 'ADD_MOVIE_TO_STARRED', payload: movie })
  }

  const removeFromStarred = () => {
    dispatch({ type: 'REMOVE_MOVIE_FROM_STARRED', payload: movie.id })
  }

  const isAddedToWatchlist = watchlist.find((item) => item.id === movie.id)
  const isStarred = starred.find((item) => item.id === movie.id)

  return (
    <div className="bg-white text-gray-800 shadow-md rounded-lg p-4 flex flex-col justify-between">
      <div className="flex flex-col space-y-2">
        <Link to={`/movies/${movie.id}`}>
          <img
            src={movie.imageURL}
            alt={movie.title}
            className="w-full h-40 object-cover rounded-lg cursor-pointer"
          />
        </Link>

        <div className="flex justify-between text-sm opacity-70">
          <span>{movie.year}</span>
          <span>Rating: {movie.rating}</span>
        </div>

        <Link to={`/movies/${movie.id}`}>
          <h2 className="text-lg font-semibold truncate cursor-pointer hover:underline">
            {movie.title}
          </h2>
        </Link>

        <p className="text-sm truncate">{movie.summary}</p>
      </div>

      <div className="mt-4 flex space-x-2">
        <button
          className={`flex items-center gap-1 px-2 py-1 text-xs rounded ${
            isAddedToWatchlist
              ? 'bg-indigo-600 text-white'
              : 'bg-indigo-200 text-indigo-600'
          }`}
          onClick={isAddedToWatchlist ? removeFromWatchlist : addToWatchlist}
        >
          {isAddedToWatchlist ? <RiStarFill /> : <RiStarLine />}
          {isAddedToWatchlist ? 'Added to Watchlist' : 'Add to Watchlist'}
        </button>

        <button
          className={`flex items-center gap-1 px-2 py-1 text-xs rounded ${
            isStarred
              ? 'bg-yellow-600 text-white'
              : 'bg-yellow-200 text-yellow-600'
          }`}
          onClick={isStarred ? removeFromStarred : addToStarred}
        >
          {isStarred ? <RiStarFill /> : <RiStarLine />}
          {isStarred ? 'Starred' : 'Star'}
        </button>
      </div>
    </div>
  )
}

export default MovieCard
