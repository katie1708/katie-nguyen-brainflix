import Header from '../components/Header.jsx'
import Videoplayer from '../components/Videoplayer.jsx'
import VideoDetails from '../components/VideoDetails/VideoDetails.jsx'
import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import VideoData from "../data/video-details.json";


function MainVideoPage() {
    const [activeVideo, setActiveVideo] = useState(VideoData[0]);
    // console.log(activeVideo);

    //fetch and set video data
    const { videoId } = useParams(); 

    // if(!videoId) {
    //     setActiveVideo(VideoData[0]);
    // }

    // useEffect(() => {   
    //     const clickedVideo = VideoData.find((video) => video.id === videoId);
    //     setActiveVideo(clickedVideo);
    // }, [videoId]);

    return (
        <>
          <Header />
          <Videoplayer />
          <VideoDetails activeVideo={activeVideo}/>
        </>
      )
}

export default MainVideoPage;