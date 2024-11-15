import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import publishicon from "../../assets/Icons/publish.svg";
import videopreview from "../../assets/Images/Upload-video-preview.jpg";
import "./VideoUploadForm.scss";
import axios from "axios";

function VideoUploadForm() {
    const navigate = useNavigate();
    const formRef = useRef();

    const baseURL = import.meta.env.VITE_BASE_URL;

    const submitHandler = async (event) => {
        event.preventDefault();
        alert("Uploaded successfully");
        navigate("/")

        const {title, description } = formRef.current;

        const resp = await axios.post(`${baseURL}/videos`, {
            title: title.value,
            description: description.value
        }); 
        
        console.log(resp.data); 
    }

    return (
        <section className="videoupload">
            <h2 className="videoupload__title">Upload Video</h2>
            <div className="videoupload__body">
                <div className="videoupload__thumbnail">
                    <p>VIDEO THUMBNAIL</p>
                    <img src={videopreview}></img>
                </div>
                <form id="upload-form" className="videoupload__form" onSubmit={submitHandler} ref={formRef}>
                    <fieldset>
                        <label className="videoupload__form--label">
                            TITLE YOUR VIDEO
                        </label>
                        <input className="videoupload__form--input" type="text" placeholder="Add a title to your video" id="title"></input>
                        <label className="videoupload__form--label">
                            ADD A VIDEO DESCRIPTION
                        </label>
                        <input className="videoupload__form--input" type="text" placeholder="Add a description to your video" id="description"></input>
                    </fieldset>
                </form> 
            </div>
            <div className="videoupload__button">
                <button className="videoupload__button-publish" type="submit" form="upload-form">
                    <img src={publishicon}/>
                    <p>PUBLISH</p>
                </button>
                <button className="videoupload__button-cancel">
                    <p>CANCEL</p>
                </button>      
            </div>
        </section>
    )
}

export default VideoUploadForm;