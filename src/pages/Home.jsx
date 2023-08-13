import { useContext } from 'react'
import { MovieContext } from '../contexts/MovieContext'
import { moviesData } from '../data/moviesData'
import MovieList from '../components/MovieList'

const Home = () => {
  const { state, dispatch } = useContext(MovieContext)

  return (
    <div>
      <MovieList
        movies={moviesData}
        watchlist={state.watchlist}
        starred={state.starred}
        dispatch={dispatch}
      />
    </div>
  )
}

export default Home
