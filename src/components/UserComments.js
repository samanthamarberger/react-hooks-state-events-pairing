
function UserComments({ data }) {

    const renderedComments = data.comments.map((comment => {
        return (
            <div key={comment.comment}>
                <h2>{comment.user}</h2>
                <h3>{comment.comment}</h3>
            </div>
        )
    }))

    return (
        <div>
            {renderedComments}
        </div>
    )
}

export default UserComments