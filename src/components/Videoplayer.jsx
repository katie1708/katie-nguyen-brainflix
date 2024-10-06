import videopreview from "../assets/Images/Upload-video-preview.jpg"
import playbutton from "../assets/Icons/play.svg"
import scrub from "../assets/Icons/scrub.svg"
import fullscreen from "../assets/Icons/fullscreen.svg"
import volume from "../assets/Icons/volume_up.svg"
import "./Videoplayer.scss"

function Videoplayer() {
    return (
        <section className="videowrapper">
            <video
                className="videoplayer"
                controls
                poster={videopreview}>
            </video>
        </section>
    )
}

export default Videoplayer;