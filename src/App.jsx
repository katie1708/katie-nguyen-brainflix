import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Header from './components/Header.jsx'
import Videoplayer from './components/Videoplayer.jsx'
import VideoDetails from './components/VideoDetails/VideoDetails.jsx'

function App() {
  return (
    <>
      <Header />
      <Videoplayer />
      <VideoDetails />
    </>
  )
}

export default App
