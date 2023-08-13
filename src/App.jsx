import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Movie from './pages/Movie'
import Watchlist from './pages/Watchlist'
import Starred from './pages/Starred'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies/:id" element={<Movie />} />
          <Route path="watchlist" element={<Watchlist />} />
          <Route path="starred" element={<Starred />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
