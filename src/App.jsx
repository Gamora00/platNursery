import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Landing from './pages/landing'
import Navbar from './components/navbar'
import Listing from './pages/listing'
import { Route, Routes } from 'react-router-dom'
import Shopping from './pages/shopping'
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/listing" element={
          <>
          <Navbar/>
          <Listing/></>
          }/>
          
          <Route path="/shopping" element={
          <>
          <Navbar/>
          <Shopping/></>
          }/>
      </Routes>
    
      

    </>
  )
}

export default App
