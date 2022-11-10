import react from "react"
import Comment from "../components/Comment"

function CommentBox({isHidden}) {
    return(
        <div class="commentBox" hidden={isHidden ? true : false}>
            <Comment />
        </div>
    );
}

export default CommentBox;