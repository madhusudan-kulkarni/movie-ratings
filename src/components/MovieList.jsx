import React, { useState } from 'react'
import MovieCard from './MovieCard'
import AddMovie from './AddMovie'

const genres = [
  'All Genres',
  'Action',
  'Comedy',
  'Drama',
  'Romance',
  'Thriller',
]

const years = Array.from(
  { length: new Date().getFullYear() - 1989 },
  (_, index) => 1990 + index
)

const MovieList = ({ movies, watchlist, starred, dispatch }) => {
  const [genre, setGenre] = useState('All Genres')
  const [year, setYear] = useState('All Years')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredMovies =
    genre === 'All Genres'
      ? movies
      : movies.filter((movie) => movie.genre.includes(genre))

  const filteredMoviesByYear =
    year === 'All Years'
      ? filteredMovies
      : filteredMovies.filter((movie) => movie.year.toString() === year)

  const filteredMoviesBySearch = filteredMoviesByYear.filter((movie) => {
    const lowerCaseSearchQuery = searchQuery.toLowerCase()
    return (
      movie.title.toLowerCase().includes(lowerCaseSearchQuery) ||
      movie.director.toLowerCase().includes(lowerCaseSearchQuery) ||
      movie.cast.join(', ').toLowerCase().includes(lowerCaseSearchQuery)
    )
  })

  return (
    <div className="p-4">
      <div className="flex items-center space-x-4 mb-4 justify-around content-center">
        <div className="flex">
          <label htmlFor="genre" className="text-gray-700 font-medium mr-2">
            Genre:
          </label>
          <select
            id="genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="form-select"
          >
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>

        <div className="flex">
          <label htmlFor="year" className="text-gray-700 font-medium mr-2">
            Year:
          </label>
          <select
            id="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="form-select"
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <div className="flex">
          <label htmlFor="search" className="text-gray-700 font-medium mr-2">
            Search:
          </label>
          <input
            id="search"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="form-input"
            placeholder="Search movies, cast, or director"
          />
        </div>
        <div className="flex">
          <AddMovie />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
        {filteredMoviesBySearch.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            watchlist={watchlist}
            starred={starred}
            dispatch={dispatch}
          />
        ))}
      </div>
    </div>
  )
}

export default MovieList
