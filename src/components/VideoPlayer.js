import react, { useState }from "react"
import Video from "../components/Video"
import VideoDetails from "../components/VideoDetails"
import VoteButtons from "../components/VoteButtons"
import HideComment from "../components/HideComment";
import data from "../data/video"


function VideoPlayer({makeHide}) {
    let [upVotes, addUpVote] = useState(data.upvotes)
    let [downVotes, addDownVote] = useState(data.downvotes)
    let [showOrHide, setShowOrHide] = useState("Hide")

    function handleClickUp ()  {
        addUpVote(upVotes+1)
    }
    function handleClickDown ()  {
        addDownVote(downVotes+1)
    }
    function handleHideOrShow ()  {
        if(showOrHide === "Hide") {
            setShowOrHide("Show")
        } else {
            setShowOrHide("Hide")
        }

    }
    return(
        <div class="videoPlayer">
            <Video 
                url={data.embedUrl}/>
            <VideoDetails 
                title={data.title} 
                views={data.views} 
                createdAt={data.createdAt}
               />
            <VoteButtons 
                upvotes={upVotes} 
                downvotes={downVotes}
                clickedUp={handleClickUp}
                clickedDown={handleClickDown}
              />
            <HideComment 
                setHidden={makeHide}
            />
        </div>
        
    )

}

export default VideoPlayer;