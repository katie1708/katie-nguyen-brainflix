import {useState} from "react";
import VideoData from "../../data/video-details.json";
import ActiveVideo from  "../VideoDetails/ActiveVideo.jsx";
import CommentSection from "./CommentsSection/CommentSection.jsx";
import NextVideoList from "./NextVideo/NextVideoList.jsx";
import "./VideoDetails.scss"

function VideoDetails() {
    const [activeVideo, setActiveVideo] = useState(VideoData[0]);

    return(
        <>
            <ActiveVideo activeVideo={activeVideo}/>
            <CommentSection activeVideo={activeVideo}/>
            <NextVideoList activeVideo={activeVideo} videoData={VideoData}/>
        </>
    )
}

export default VideoDetails;