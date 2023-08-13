import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-5">
        <Outlet />
      </main>
    </>
  )
}

export default Layout
