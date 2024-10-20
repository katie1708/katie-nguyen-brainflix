import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import MainVideoPage from './pages/MainVideoPage'
import VideoUploadPage from './pages/VideoUploadPage'
import axios from "axios"

function App() {
  
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainVideoPage />} />
          <Route path="videos/:videoId" element={<MainVideoPage />} />
          <Route path="/upload" element={<VideoUploadPage />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
