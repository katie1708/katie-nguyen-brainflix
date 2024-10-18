import NextVideo from "./NextVideo";
import "./NextVideo.scss";
import {Link} from 'react-router-dom';
import axios from "axios"
import { useEffect, useState } from "react";

function NextVideoList(props) {
    
    const [nextVideoList,setNextVideoList] = useState([]);

    const myApiKey = "bb5eaaaf-7037-4a5b-b14b-f3d6f539a223";
    const baseURL = "https://unit-3-project-api-0a5620414506.herokuapp.com/";

    useEffect(() => {
        async function fetchVideoList(id) {
            const response = await axios.get(`${baseURL}videos/?api_key=${myApiKey}`);
            const videoList = response.data;
            const nextVideos = videoList.filter((video) => video.id !== id);
            setNextVideoList(nextVideos);
            // console.log(nextVideos);
        }
        fetchVideoList(props.activeVideo.id);
    },[props.activeVideo])
    // console.log(nextVideos);

    return (
        <section className="nextvideo">
            <p className="nextvideo__title">NEXT VIDEOS</p>
            <div className="nextvideo__list">
            {nextVideoList.map((video) => (
                <Link to={`/videos/${video.id}`}>
                    <NextVideo key={video.id} id={video.id} image={video.image} title={video.title} channel={video.channel} changeActiveVideo = {props.changeActiveVideo}/>
                </Link>
            ))}
            </div>
        </section>
    )
}

export default NextVideoList;