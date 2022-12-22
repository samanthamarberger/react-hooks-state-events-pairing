import React, { useState } from "react";
import UserComments from "./UserComments";

function Comments({ data }) {
    const [commentsStatus, setCommentsStatus] = useState("true");

    function hideComments() {
        setCommentsStatus(!commentsStatus);
    }
    console.log(data.comments.length);
    return (
        <div>
            <br />
            <button onClick={hideComments}>
                {commentsStatus ? "Hide Comments" : "Show Comments"}
            </button>
            <br />
            <h2>{data.comments.length} Comments</h2>
            {commentsStatus ? <UserComments data={data}/>: null}
        </div>
    )
}

export default Comments