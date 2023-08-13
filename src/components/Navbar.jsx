import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-semibold hover:text-gray-300">
          Movie Ratings
        </Link>

        <nav className="space-x-4">
          <Link
            to="/"
            className="text-lg hover:text-gray-300 transition duration-300"
          >
            Movies
          </Link>
          <Link
            to="/watchlist"
            className="text-lg hover:text-gray-300 transition duration-300"
          >
            Watchlist
          </Link>
          <Link
            to="/starred"
            className="text-lg hover:text-gray-300 transition duration-300"
          >
            Starred
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
