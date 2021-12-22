
import {connect} from "react-redux"

function Comments(props) {
    

    return(
        <div>
            <div>
                <img src={props.comment.user.photo} />
                <p>{props.comment.message}</p>    
            </div>
            
            
        </div>
    )
}


export default Comments