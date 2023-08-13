import { useContext } from 'react'
import { MovieContext } from '../contexts/MovieContext'
import MovieCard from '../components/MovieCard'

const Starred = () => {
  const { state, dispatch } = useContext(MovieContext)

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {state.starred.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          watchlist={state.watchlist}
          starred={state.starred}
          dispatch={dispatch}
        />
      ))}
    </div>
  )
}

export default Starred
