import React from 'react'
import NavBar from './components/NavBar'
import Home from './components/Pages/Home'
import AboutMe from './components/Pages/AboutMe'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aboutme' element={<AboutMe />} />
        </Routes>
    </>
  )
}

export default App