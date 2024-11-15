import ActiveVideo from "../VideoDetails/ActiveVideo.jsx";
import CommentSection from "./CommentsSection/CommentSection.jsx";
import NextVideoList from "./NextVideo/NextVideoList.jsx";
import "./VideoDetails.scss";



function VideoDetails(props) {
    return(
        <>
            <div className="videodetails">
                <div className="videodetails__firstblock">
                    <ActiveVideo activeVideo={props.activeVideo}/>
                    <CommentSection activeVideo={props.activeVideo}/>
                </div>
                <div className="videodetails__secondblock">
                    <NextVideoList activeVideo={props.activeVideo} videoList={props.videoList}/>
                </div>
            </div>
            
        </>
    )
}

export default VideoDetails;