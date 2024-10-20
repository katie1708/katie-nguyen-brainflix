import Header from '../components/Header.jsx'
import Videoplayer from '../components/Videoplayer.jsx'
import VideoDetails from '../components/VideoDetails/VideoDetails.jsx'
import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios"


function MainVideoPage() {
  const [activeVideo, setActiveVideo] = useState([]);
  
  //API info
  const myApiKey = "bb5eaaaf-7037-4a5b-b14b-f3d6f539a223";
  const baseURL = "https://unit-3-project-api-0a5620414506.herokuapp.com/";

  //Fetch the video data
  useEffect(() => {
    (async () => {
      const response = await axios.get(`${baseURL}videos/?api_key=${myApiKey}`);
      const videoList = response.data;
      const getDefaultVideo = await axios.get(`${baseURL}videos/${videoList[0].id}?api_key=${myApiKey}`);
      const defaultVideo = getDefaultVideo.data;
      setActiveVideo(defaultVideo);
    })();
  }, []);

  //Fetch and set video data with videoId
  const { videoId } = useParams(); 

    useEffect(() => {   
        if (!videoId) {
          const getVideoList = async() => {
            const response = await axios.get(`${baseURL}videos/?api_key=${myApiKey}`);
            const videoList = response.data;
            const getFirstVideo = await axios.get(`${baseURL}videos/${videoList[0].id}?api_key=${myApiKey}`);
            const firstVideo = getFirstVideo.data;
            setActiveVideo(firstVideo);
          }
          getVideoList();
        } else {
          const fetchVideo = async () => {
            const response = await axios.get(`${baseURL}videos/${videoId}?api_key=${myApiKey}`);
            const foundVideo = response.data;
            setActiveVideo(foundVideo);
          }
          fetchVideo();
        }

    }, [videoId]);

    return (
        <>
          <Header />
          <Videoplayer />
          <VideoDetails activeVideo={activeVideo}/>
        </>
      )
}

export default MainVideoPage;