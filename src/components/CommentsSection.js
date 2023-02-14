import React, { useState } from "react";
import Comment from "./Comment";

function CommentsSection({ videoObj }) {
    const [hideComments, setHideComments] = useState(false);
    function handleHideComments() {
        setHideComments(!hideComments);
    }
    return (
        <div className="comments">
            <br />
            <button className="hide-comments" onClick={handleHideComments}>
                {hideComments === false ? "Hide Comments" : "Show Comments"}
            </button>
            <hr />
            <h2>{videoObj.comments.length + " Comments"}</h2>
            {hideComments === false ? videoObj.comments.map(comment => 
                <Comment 
                    key={comment.id} 
                    user={comment.user} 
                    comment={comment.comment}
                />
            ) : ""}
        </div>
    );
}

export default CommentsSection;