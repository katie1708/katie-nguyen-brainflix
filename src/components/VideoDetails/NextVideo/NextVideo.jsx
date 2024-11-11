function NextVideo(props) {

    return(
        <article className="nextvideo__card">
            <img className="nextvideo__card-img" src={props.image}/>
            <div className="nextvideo__card-info">   
                <p className="nextvideo__card-title">{props.title}</p>
                <p className="nextvideo__card-channel">{props.channel}</p>
            </div>
        </article>
    )
}

export default NextVideo;