import react from "react"
import data from "../data/video.js";


function VideoDetails({title, views, createdAt}) {
    return(
        <div class="videoDetails">
            <h1>{data.title}</h1>
            <p>{data.views} | Uploaded {data.createdAt}</p>
        </div>
    );
}

export default VideoDetails;