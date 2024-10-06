import buttonIcon from "../../../assets/Icons/add_comment.svg"
import "./CommentSection.scss"

function CommentForm() {
    return (
        <>
            <form className="comments__form">
                <p className="comments__form__avatar"></p>
                <div className="comments__form__block">
                    <p className="comments__form__title">JOIN THE CONVERSATION</p>
                    <div>
                        <textarea type="text" name="text" id="text" placeholder="Add a new comment"></textarea>
                        <button className="comments__form__button" type="submit">
                            <img src={buttonIcon}/>
                            <p>COMMENT</p>
                        </button>
                    </div>
                    
                </div>
            </form>
        </>
    )
}

export default CommentForm;