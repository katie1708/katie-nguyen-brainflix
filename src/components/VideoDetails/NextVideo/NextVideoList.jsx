import { Link } from 'react-router-dom';
import NextVideo from "./NextVideo";
import "./NextVideo.scss";

function NextVideoList(props) {

    const videoList = props.videoList;
    const nextVideoList = videoList.filter((video) => video.id !== props.activeVideo.id);

    return (
        <section className="nextvideo">
            <p className="nextvideo__title">NEXT VIDEOS</p>
            <div className="nextvideo__list">
            {nextVideoList.map((video) => (
                <Link className="nextvideo--link" to={`/videos/${video.id}`} key={video.id}>
                    <NextVideo key={video.id} id={video.id} image={video.image} title={video.title} channel={video.channel} changeActiveVideo = {props.changeActiveVideo}/>
                </Link>
            ))}
            </div>
        </section>
    )
}

export default NextVideoList;