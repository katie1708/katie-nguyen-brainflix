function NextVideo(props) {
    const ActiveVideoHandler = () => {
        console.log("working");
        props.changeActiveVideo(props.id);
    }

    return(
        <article className="nextvideo__card" onClick={ActiveVideoHandler}>
            <img className="nextvideo__card-img" src={props.image}/>
            <div className="nextvideo__card-info">   
                <p className="nextvideo__card-title">{props.title}</p>
                <p className="nextvideo__card-channel">{props.channel}</p>
            </div>
        </article>
    )
}

export default NextVideo;