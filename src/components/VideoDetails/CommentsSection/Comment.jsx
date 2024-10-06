function Comment(props) {

    const specFormat = {
        year:"numeric", 
        month:"2-digit", 
        day:"2-digit"
    };
    
    const dateFormatter = Intl.DateTimeFormat('en-US',specFormat);

    return(
        <article className = "comments__card">
            <p className = "comments__card-avatar"></p>
            <div className = "comments__card-content">
                <p className = "comments__card-name">{props.name}</p>
                <p className = "comments__card-date">{dateFormatter.format(props.time)}</p>
                <p className = "comments__card-text">{props.comment}</p>
            </div>
        </article>
    )
}

export default Comment;