
function Comments(props) {
    return(
        <div>
            <img src={props.comment.user.photo} />
            <p>{props.comment.message}</p>    
        </div>
    )
}

export default Comments