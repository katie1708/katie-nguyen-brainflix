import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import MainVideoPage from './pages/MainVideoPage';
import axios from "axios"

function App() {
  // //get Video data from API
  // const myApiKey = "bb5eaaaf-7037-4a5b-b14b-f3d6f539a223";
  // const baseURL = "https://unit-3-project-api-0a5620414506.herokuapp.com/";

  // const getVideoList = async () => {
  //     try {
  //       const response = await axios.get(`${baseURL}videos/?api_key=${myApiKey}`);
  //       const videoList = response.data;
  //       const getInitalVideo = await axios.get(`${baseURL}videos/${videoList[0].id}?api_key=${myApiKey}`);
  //       const initalVideo = getInitalVideo.data;
  //       return initalVideo;
  //     }
  //     catch (error) {
  //         console.error(error); 
  //     }
  //   }
  // const initalVideo = getVideoList();  
  // console.log(initalVideo);
  
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainVideoPage />} />
          <Route path="videos/:videoId" element={<MainVideoPage />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
