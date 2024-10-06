function Comment(props) {
    return(
        <article className = "comments__card">
            <p className = "comments__card-avatar"></p>
            <div className = "comments__card-content">
                <p className = "comments__card-name">{props.name}</p>
                <p className = "comments__card-date">{props.time}</p>
                <p className = "comments__card-text">{props.comment}</p>
            </div>
        </article>
    )
}

export default Comment;