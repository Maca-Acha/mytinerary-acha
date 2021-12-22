
function Comments(props) {
    return(
        <div>
            {props.comments.map(comment => 
                {if(comment.itinerary === props.itinerary._id){
                    return(
                        <p>{comment.message}</p>
                    )
                }}
            )}
        </div>
    )
}

export default Comments