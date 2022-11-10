import react from "react"

function HideComment({setHidden}) {
    return(
        <div>
            <button class="hideComments" onClick={setHidden}>Hide/Display Comments</button>
        </div>
    );
}

export default HideComment;