import viewIcon from "../../assets/Icons/views.svg"
import likeIcon from "../../assets/Icons/likes.svg"

function ActiveVideo(props) {
    // console.log(props.activeVideo.comments.length);

    const activeVideo = props.activeVideo;

    return(
        <>
            <section className = "activevideo">
                <h2 className = "activevideo__title">{activeVideo.title}</h2>
                <div className = "activevideo__info">
                    <div className="activevideo__info--first-block">
                        <p className="activevideo__info--first-block--channel">By {activeVideo.channel}</p>
                        <p>{activeVideo.timestamp}</p>
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