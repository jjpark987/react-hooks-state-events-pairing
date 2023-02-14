import React from "react";
import video from "../data/video.js";
import VideoDetails from "./VideoDetails"
import CommentsSection from "./CommentsSection.js";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <VideoDetails videoObj={video}/>
      <CommentsSection videoObj={video}/>
    </div>
  );
}

export default App;