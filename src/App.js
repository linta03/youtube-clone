import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Categories from './components/Categories'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Home from "./pages/Home"
import Search from './pages/Search'

const App = () => {
  const [ShowNavbar, setShowNavbar] = useState(false)

  return (
    <div>
      <BrowserRouter>
      <Navbar setShowNavbar={setShowNavbar} ShowNavbar={ShowNavbar}/>
      <Categories/>
      <Sidebar ShowNavbar={ShowNavbar}/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/video/:id' element={<Search/>}/>
       </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
