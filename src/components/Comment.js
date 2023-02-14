import React from "react";

function Comment({ user, comment }) {
    return (
        <div className="comment">
            <h3>{user}</h3>
            <p>{comment}</p>
        </div>
    );
}

export default Comment;