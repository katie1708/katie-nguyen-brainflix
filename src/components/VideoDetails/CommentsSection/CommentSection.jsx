import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import "./CommentSection.scss";

function CommentSection(props) {
    const commentList = props.activeVideo.comments;

    if(commentList){
        return(
            <>
                <p className = "activevideo__comments">{commentList.length} Comments</p>
                <CommentForm />
                <CommentList commentList = {commentList}/>
            </>
        )
    }
    
}

export default CommentSection;