import videopreview from "../assets/Images/Upload-video-preview.jpg"
import playbutton from "../assets/Icons/play.svg"
import scrub from "../assets/Icons/scrub.svg"
import fullscreen from "../assets/Icons/fullscreen.svg"
import volume from "../assets/Icons/volume_up.svg"
import "./Videoplayer.scss"
import { AspectRatio } from 'react-aspect-ratio';

function Videoplayer() {
    return (
        <>
            <AspectRatio
            variant="outlined"
            ratio="16/9"
            className="videowrapper">
                <video
                        className="videoplayer"
                        controls
                        poster={videopreview}>
                </video>
            </AspectRatio>
        </>
        
    )
}

export default Videoplayer;