import {useState} from "react";
import VideoData from "../../data/video-details.json";
import ActiveVideo from  "../VideoDetails/ActiveVideo.jsx";
import CommentSection from "./CommentsSection/CommentSection.jsx";
import NextVideoList from "./NextVideo/NextVideoList.jsx";
import "./VideoDetails.scss"

function VideoDetails() {
    const [activeVideo, setActiveVideo] = useState(VideoData[0]);

    const changeActiveVideo = (id) => {
        const clickedVideo = VideoData.filter((video) => video.id === id);
        setActiveVideo(clickedVideo[0]);
    }

    return(
        <>
            <div className="videodetails">
                <div className="videodetails__firstblock">
                    <ActiveVideo activeVideo={activeVideo}/>
                    <CommentSection activeVideo={activeVideo}/>
                </div>
                <div className="videodetails__secondblock">
                    <NextVideoList activeVideo={activeVideo} videoData={VideoData} changeActiveVideo = {changeActiveVideo}/>
                </div>
            </div>
            
        </>
    )
}

export default VideoDetails;