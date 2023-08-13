import React, { useState, useContext } from 'react'
import { moviesData } from '../data/moviesData'
import { MovieContext } from '../contexts/MovieContext'

const AddMovie = () => {
  const { dispatch } = useContext(MovieContext)

  const [showForm, setShowForm] = useState(false)

  const [title, setTitle] = useState('')
  const [summary, setSummary] = useState('')
  const [year, setYear] = useState('')
  const [cast, setCast] = useState('')
  const [genre, setGenre] = useState('')
  const [director, setDirector] = useState('')
  const [imageURL, setImageURL] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const newMovie = {
      id: moviesData.length + 1,
      title,
      summary,
      year,
      cast,
      genre,
      director,
      imageURL,
    }

    // Add movie to moviesData
    dispatch({ type: 'ADD_MOVIE_TO_WATCHLIST', payload: newMovie })

    setShowForm(false)
  }

  return (
    <div>
      <button
        className="bg-indigo-500 text-white px-4 py-2 rounded"
        onClick={() => setShowForm(true)}
      >
        Add Movie
      </button>

      {showForm && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white w-96 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Add New Movie</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border p-2 w-full"
                type="text"
                placeholder="Title"
              />
              <textarea
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                className="border p-2 w-full h-24"
                placeholder="Summary"
              />
              <input
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="border p-2 w-full"
                type="text"
                placeholder="Year"
              />
              <input
                value={cast}
                onChange={(e) => setCast(e.target.value)}
                className="border p-2 w-full"
                type="text"
                placeholder="Cast"
              />
              <input
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                className="border p-2 w-full"
                type="text"
                placeholder="Genre"
              />
              <input
                value={director}
                onChange={(e) => setDirector(e.target.value)}
                className="border p-2 w-full"
                type="text"
                placeholder="Director"
              />
              <input
                value={imageURL}
                onChange={(e) => setImageURL(e.target.value)}
                className="border p-2 w-full"
                type="text"
                placeholder="Image URL"
              />
              <div className="flex justify-end space-x-2">
                <button
                  type="submit"
                  className="bg-indigo-500 text-white px-4 py-2 rounded"
                >
                  Add
                </button>
                <button
                  type="button"
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default AddMovie
