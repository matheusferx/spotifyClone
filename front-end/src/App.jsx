import React from 'react'
import Header from './components/Header'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Artists from './pages/Artists'
import Artist from './pages/Artist'
import Song from './pages/Song'
import Songs from './pages/Songs'

const App = () => {
  const location = useLocation();

  const hideFooter = location.pathname.startsWith('/artist/') || location.pathname.startsWith('/song/');

  return (
    <div className="app-container">
      <Header />
      <Sidebar />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/artists' element={<Artists />} />
        <Route path='/artist/:id' element={<Artist />} />
        <Route path='/song/:id' element={<Song />} />
        <Route path='/songs' element={<Songs />} />
      </Routes>
      
      {!hideFooter && <Footer />}
    </div>
  )
}

const AppWrapper = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

export default AppWrapper