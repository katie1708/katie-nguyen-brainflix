import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import "./CommentSection.scss";

function CommentSection(props) {
    const commentList = props.activeVideo.comments;

    if(commentList){
        return(
            <>
                <CommentForm />
                <CommentList commentList = {commentList}/>
            </>
        )
    }
    
}

export default CommentSection;