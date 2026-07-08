import React from 'react'
import NavBar from './components/NavBar'
import Home from './components/Pages/Home'
import AboutMe from './components/Pages/AboutMe'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PageFooter from './components/PageFooter'
import EventMate from './components/Pages/EventMate'

const App = () => {
  return (
    <>
      <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aboutme' element={<AboutMe />} />
          <Route path='/eventmate' element={<EventMate />} />
        </Routes>
      <PageFooter />
    </>
  )
}

export default App