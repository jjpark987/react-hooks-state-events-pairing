import React from "react";
import Ratings from "./Ratings";

function VideoDetails({ videoObj }) {
    return (
        <div className="RenderVideo">
            <iframe
                width="919"
                height="525"
                src={videoObj.embedUrl}
                frameBorder="0"
                allowFullScreen
                title="Thinking in React"
            />
            <h1>{videoObj.title}</h1>
            <p>{videoObj.views + " Views | Uploaded " + videoObj.createdAt}</p>
            <Ratings videoObj={videoObj}/>
        </div>
    );
}

export default VideoDetails;