import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import MainVideoPage from './pages/MainVideoPage'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainVideoPage />} />
          <Route path="video/:videoId" element={<MainVideoPage />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
