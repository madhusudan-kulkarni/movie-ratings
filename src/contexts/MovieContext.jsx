import { createContext, useReducer } from 'react'

export const MovieContext = createContext()

export const movieReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_MOVIE_TO_WATCHLIST':
      return {
        ...state,
        watchlist: [...state.watchlist, action.payload],
      }
    case 'REMOVE_MOVIE_FROM_WATCHLIST':
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie) => movie.id !== action.payload
        ),
      }
    case 'ADD_MOVIE_TO_STARRED':
      return {
        ...state,
        starred: [...state.starred, action.payload],
      }
    case 'REMOVE_MOVIE_FROM_STARRED':
      return {
        ...state,
        starred: state.starred.filter((movie) => movie.id !== action.payload),
      }
    default:
      return state
  }
}

const MovieContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(movieReducer, {
    watchlist: [],
    starred: [],
  })

  return (
    <MovieContext.Provider value={{ state, dispatch }}>
      {children}
    </MovieContext.Provider>
  )
}

export default MovieContextProvider
