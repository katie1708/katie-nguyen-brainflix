import videopreview from "../assets/Images/Upload-video-preview.jpg"
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