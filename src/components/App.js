import react, { useState } from "react"
import data from "../data/video.js";
import CommentBox from "../components/CommentBox";
import VideoPlayer from "../components/VideoPlayer";

function App() {
  console.log("Here's your data:", data);
  let [isCommentHidden, setCommentHidden] = useState(false);

  // 2 props will be rendered:
  //  1) VideoPlayer
  //    Derivatives:
  //    - Video : returns the actual video player
  //    - VideoDetails : returns data.views and data.createdAt
  //    - VoteButtons : handles video upvotes/downvotes
  //    - HideComment : if true, commentbox will be hidden

  //  2) CommentBox
  //    Derivatives:
  //    - Comment : returns data.user and data.comment
  function handleHideComment () {
    if(!isCommentHidden) {
        setCommentHidden(true);
    } else {
        setCommentHidden(false);
    }
}
  return (
    <div className="App">
        <VideoPlayer makeHide={handleHideComment}/>
        <CommentBox 
          isHidden={isCommentHidden}
        />
    </div>
  );
}

export default App;
