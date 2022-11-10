import react from "react"
import data from "../data/video.js";


function VoteButtons({upvotes, downvotes, clickedUp, clickedDown}) {
    return(
        <div class="voteButtons">
            <button class="voteButton" id="upVote" onClick={clickedUp}>{upvotes} &#128077;</button>
            <button class="voteButton" id="downVote" onClick={clickedDown}>{downvotes} &#128078;</button>
        </div>
    );
}

export default VoteButtons;