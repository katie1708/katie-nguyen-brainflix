import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import VideoDetails from '../components/VideoDetails/VideoDetails.jsx';
import Videoplayer from '../components/Videoplayer.jsx';


function MainVideoPage() {
  const [videoList, setVideoList] = useState([]);
  const [activeVideo, setActiveVideo] = useState([]);
  
  //API info

  // const myApiKey = import.meta.env.VITE_API_KEY;
  const baseURL = import.meta.env.VITE_BASE_URL;

  //Fetch and set video data with videoId
  const { videoId } = useParams(); 

    useEffect(() => {   
        if (!videoId) {
          const fetchFirstVideo = async() => {
            const response = await axios.get(`${baseURL}/videos`);
            const videoList = response.data;
            const getFirstVideo = await axios.get(`${baseURL}/videos/${videoList[0].id}`);
            const firstVideo = getFirstVideo.data;
            setActiveVideo(firstVideo);
            setVideoList(videoList);
          }
          fetchFirstVideo();
        } else {
          const fetchVideo = async () => {
            const response = await axios.get(`${baseURL}/videos`);
            const videoList = response.data;
            const getVideo = await axios.get(`${baseURL}/videos/${videoId}`);
            const foundVideo = getVideo.data;
            setActiveVideo(foundVideo);
            setVideoList(videoList);
          }
          fetchVideo();
        }
        
    }, [videoId]);

    return (
        <>
          <Videoplayer />
          <VideoDetails activeVideo={activeVideo} videoList={videoList}/>
        </>
      )
}

export default MainVideoPage;