import itinerariesActions from "../redux/actions/itinerariesActions"
import {useRef, useState} from "react"
import {connect} from "react-redux"

function Comments(props) {
    const editComment = useRef()
    const [edit, setEdit] = useState(false)

    function handleEditComment(e) {
        e.preventDefault()
        setEdit(!edit)
        props.editComments(
            props.comment._id,
            editComment.current.value
        )
        editComment.current.value = ""
    }

    function handleDelete (e) {
        e.preventDefault()
        props.deleteComments(
            props.comment._id
        )
    }
    
    return(
        <div className="comentario">
            {props.comment.user && 
                (
                <div className="comentario-cont">
                    <img className="foto-comentario" src={props.comment.user.photo} />
                    <p className="msj-comentario">{props.comment.message}</p>    
                </div>
                )
            }
            {props.comment.user && props.comment.user._id === props.user._id &&
                (<div>
                    <p onClick={() => {setEdit(!edit)}}>Edit </p>
                    {edit && (
                        <>
                            <form onSubmit={handleEditComment}>
                                <input
                                    ref={editComment}
                                    type="text"
                                    className="comentar"
                                    placeholder="edit your comment"
                                    />
                                <input type="submit" value="Submit" />
                            </form>
                                <p className="btn-pillo" onClick={handleDelete}>X</p>
                        </>
                    )}
                </div>
                )
            }
        </div>
    )
}


const mapDispatchToProps = {
    editComments: itinerariesActions.editComments,
    deleteComments: itinerariesActions.deleteComments,
}
export default connect(null, mapDispatchToProps)(Comments)