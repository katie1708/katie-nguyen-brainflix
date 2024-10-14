import {useEffect, useState} from "react";
import VideoData from "../../data/video-details.json";
import ActiveVideo from  "../VideoDetails/ActiveVideo.jsx";
import CommentSection from "./CommentsSection/CommentSection.jsx";
import NextVideoList from "./NextVideo/NextVideoList.jsx";
import "./VideoDetails.scss"
import { Navigate, useParams } from "react-router-dom";


function VideoDetails(props) {

    // const [activeVideo, setActiveVideo] = useState(VideoData[0]);
    // // console.log(activeVideo);

    // //fetch and set video data
    // const { videoId } = useParams(); 

    // // if(!videoId) {
    // //     setActiveVideo(VideoData[0]);
    // // }

    // useEffect(() => {   
    //     const clickedVideo = VideoData.find((video) => video.id === videoId);
    //     setActiveVideo(clickedVideo);
    // }, [videoId]);

    return(
        <>
            <div className="videodetails">
                <div className="videodetails__firstblock">
                    <ActiveVideo activeVideo={props.activeVideo}/>
                    <CommentSection activeVideo={props.activeVideo}/>
                </div>
                <div className="videodetails__secondblock">
                    <NextVideoList activeVideo={props.activeVideo} videoData={VideoData}/>
                </div>
            </div>
            
        </>
    )
}

export default VideoDetails;