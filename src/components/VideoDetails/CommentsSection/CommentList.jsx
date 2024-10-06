import Comment from "./Comment";
import "./CommentSection.scss";

function CommentList(props) {
    const comments = props.commentList;

    return(
        <section className="comments__list">
            {comments.map((comment) => (
                <Comment key={comment.id} name={comment.name} comment={comment.comment} likes={comment.likes} time={comment.timestamp}/>
        ))}
        </section>
    )
}

export default CommentList;