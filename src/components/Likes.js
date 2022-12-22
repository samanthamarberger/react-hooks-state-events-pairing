import React, { useState } from "react";
function Likes({ data }) {
    const [likes, setLikes] = useState(data.upvotes);
    const [dislikes, setDislikes] = useState(data.downvotes);

    function handleLike() {
        const newLikes = likes + 1;
        setLikes(newLikes);
    }
    //console.log(likes);

    function handleDislike() {
        const newDislikes = dislikes + 1;
        setDislikes(newDislikes);
    }
    //console.log(dislikes);
    return (
        <div>
            <button onClick={handleLike}>{likes}👍</button>
            <button onClick={handleDislike}>{dislikes}👎</button>
        </div>
    )
}

export default Likes