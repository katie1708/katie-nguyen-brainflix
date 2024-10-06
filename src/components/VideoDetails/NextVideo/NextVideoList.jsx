import NextVideo from "./NextVideo";
import VideoData from "../../../data/video-details.json";
import "./NextVideo.scss";

function NextVideoList(props) {
    
    const nextVideoList = VideoData.filter((video) => video.id !== props.activeVideo.id)
    console.log(nextVideoList);

    return (
        <section className="nextvideo">
            <p className="nextvideo__title">NEXT VIDEOS</p>
            <div className="nextvideo__list">
            {nextVideoList.map((video) => (
                <NextVideo key={video.id} image={video.image} title={video.title} channel={video.channel}/>
            ))}
            </div>
        </section>
    )
}

export default NextVideoList;