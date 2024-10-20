import videopreview from "../../assets/Images/Upload-video-preview.jpg"
import publishicon from "../../assets/Icons/publish.svg"
import "./VideoUploadForm.scss"
import { useNavigate } from "react-router-dom";

function VideoUploadForm() {
    const navigate = useNavigate();

    const submitHandler = (event) => {
        event.preventDefault();
        alert("Uploaded successfully");
        navigate("/")
    }

    return (
        <section className="videoupload">
            <h2 className="videoupload__title">Upload Video</h2>
            <div className="videoupload__body">
                <div className="videoupload__thumbnail">
                    <p>VIDEO THUMBNAIL</p>
                    <img src={videopreview}></img>
                </div>
                <form className="videoupload__form" onSubmit={submitHandler}>
                    <fieldset>
                        <label className="videoupload__form--label">
                            TITLE YOUR VIDEO
                        </label>
                        <input className="videoupload__form--input" type="text" placeholder="Add a title to your video"></input>
                        <label className="videoupload__form--label">
                            ADD A VIDEO DESCRIPTION
                        </label>
                        <input className="videoupload__form--input" type="text" placeholder="Add a description to your video"></input>
                    </fieldset>
                    <div className="videoupload__button">
                <button className="videoupload__button-publish" type="submit" >
                    <img src={publishicon}/>
                    <p>PUBLISH</p>
                </button>
                <button className="videoupload__button-cancel"  >
                    <p>CANCEL</p>
                </button>      
            </div>
                </form> 
            </div>
            {/* <div className="videoupload__button">
                <button className="videoupload__button-publish" type="submit" >
                    <img src={publishicon}/>
                    <p>PUBLISH</p>
                </button>
                <button className="videoupload__button-cancel"  >
                    <p>CANCEL</p>
                </button>      
            </div> */}
        </section>
    )
}

export default VideoUploadForm;