import viewIcon from "../../assets/Icons/views.svg"
import likeIcon from "../../assets/Icons/likes.svg"

function ActiveVideo(props) {

    const activeVideo = props.activeVideo;
    // console.log(activeVideo);

    const specFormat = {
        year:"numeric", 
        month:"2-digit", 
        day:"2-digit"
    };
    
    const dateFormatter = Intl.DateTimeFormat('en-US',specFormat);

    return(
        <>
            <section className = "activevideo">
                <h2 className = "activevideo__title">{activeVideo.title}</h2>
                <div className = "activevideo__info">
                    <div className="activevideo__info--first-block">
                        <p className="activevideo__info--first-block--channel">By {activeVideo.channel}</p>
                        <p>{dateFormatter.format(activeVideo.timestamp)}</p>
                    </div>
                    <div className="activevideo__info--second-block">
                        <div className="activevideo__info--second-block__view">
                            <img src={viewIcon} alt="viewicon"/>
                            <p>{activeVideo.views}</p>
                        </div>
                        <div className="activevideo__info--second-block__like">
                            <img src={likeIcon} alt="likeicon"/>
                            <p>{activeVideo.likes}</p>
                        </div>
                    </div>
                </div>
                <p className = "activevideo__description">{activeVideo.description}</p>
                <p className = "activevideo__comments">{activeVideo.comments.length} Comments</p>
            </section>
            
        </>
    )
}

export default ActiveVideo