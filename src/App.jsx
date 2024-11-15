import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import Header from './components/Header'
import MainVideoPage from './pages/MainVideoPage'
import VideoUploadPage from './pages/VideoUploadPage'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<MainVideoPage />} />
          <Route path="videos/:videoId" element={<MainVideoPage />} />
          <Route path="/upload" element={<VideoUploadPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
