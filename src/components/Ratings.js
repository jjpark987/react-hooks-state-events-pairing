import React, { useState } from "react";

function Ratings({ videoObj }) {
    const [currentRatings, setCurrentRatings] = useState({
        upvotes: videoObj.upvotes,
        downvotes: videoObj.downvotes
    });
    function handleUpvotes() {
        setCurrentRatings({
            ...currentRatings, 
            upvotes: ++currentRatings.upvotes
        })
    }
    function handleDownvotes() {
        setCurrentRatings({
            ...currentRatings, 
            downvotes: ++currentRatings.downvotes
        })
    }
    return (
        <div className="Ratings">
            <button className="upvotes" onClick={handleUpvotes}>
                {currentRatings.upvotes + " 👍"}
            </button>
            <button className="downvotes" onClick={handleDownvotes}>
                {currentRatings.downvotes + " 👎"}
            </button>
        </div>
    );
}

export default Ratings;