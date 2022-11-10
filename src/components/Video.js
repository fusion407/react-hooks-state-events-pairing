import react from "react"

function Video({url}) {
    return(
        <div>
            <iframe class="video"
              width="919"
              height="525"
              src={url}
              frameBorder="0"
              allowFullScreen
              title="Thinking in React"
            />
        </div>
    );
}

export default Video;