import Likes from "./Likes";
import Comments from "./Comments";

function Stats({ data }) {
    return (
        <div>
            <h3>{data.views} Views | Uploaded {data.createdAt}</h3>
            <Likes data={data}/>
            <Comments data={data}/>
        </div>
    )
}

export default Stats;