import {Card} from "react-bootstrap"
import {useEffect, useState} from "react"
import { AiOutlineHeart } from "react-icons/ai"
import { AiOutlineDollarCircle } from "react-icons/ai"
import {connect} from 'react-redux'
import activitiesActions from "../redux/actions/activitiesActions"
import itinerariesActions from "../redux/actions/itinerariesActions"
import Activity from "./ActivityComponent"

function Itinerary(props) {
    const corazon = <AiOutlineHeart />
    const plata = <AiOutlineDollarCircle />
    console.log(props)
    const [display, setDisplay] = useState(false)
    /* const handleClick = () => {
        setDisplay(!display)
        props.getActivities(props.itinerary._id)
    } */
    useEffect(() => {
        props.activities[0] && console.log(props.activities)
        !props.activities[0] && props.getActivities(props.itinerary._id)
    }, [props.activities])

    function precio(price) {
        return Array.from({length: price})
    }
    return (
        <div key= {props.itinerary._id} className="itinerarios">
                {/* <div className="tuchota">
                    {props.activities.map((activity)=>  <p src={activity.title} />)}
                    
                    {props.activities.map(activity => {
                        <>
                            <h1>concha</h1>
                            <img className="actividad-img" src={activity.image} />
                        </>
                    })}
                </div> */}
                <Card  className="card-itinerary">
                    <Card.Header className="header-itinerary color-texto">{props.itinerary.title}</Card.Header>
                    <Card.Body className="card-body" >
                        <div className="cont-card">
                            <div className="usuario">
                                <img key= {props.itinerary._id} className="foto-perfil" variant="top" src={props.itinerary.src} />
                                <p>{props.itinerary.name}</p>
                            </div>
                            <div className="texto-itinerario">
                                <div className="duracion-costo">
                                    <p className="duracion">Duration: {props.itinerary.duration}Hs</p>
                                    <div className="precio">
                                        <p className="color-texto">Price:</p> {precio(props.itinerary.price).map((index) => (
                                            <span key={index + 1} className="plata">{plata}</span>
                                        ))}
                                    </div>    
                                    <div className="like" onClick={()=> props.likes(props.user._id, props.itinerary._id, props.cityId)} >
                                        <span className="corazon">{corazon}</span><span className="numero-like" >{props.itinerary.likes.length}</span>
                                    </div>
                                </div>
                                <div className="hashtags">
                                    {props.itinerary.hashtags.map((hash, index) => (
                                        <div key={hash} className="color-texto"> #{hash}</div>
                                    ))}
                                </div>
                                
                            </div>
                        </div>
                        <div className="btn-ver-mas">
                            {display && (
                                props.activities[0] && props.activities.map(activity => 
                                    {if(activity.itinerary._id === props.itinerary._id){
                                        return(
                                            <div className="activity">
                                                <div className="activityPic" style={{backgroundImage:`url("${activity.image}")` }}>
                                                    <h5>{activity.title}</h5>
                                                </div>
                                            </div> 
                                        )
                                    }}
                                )
                            )}
                            <button onClick={() => { 
                                setDisplay(!display) 
                                props.getActivities(props.itinerary._id)
                            }} className="btn-ver">
                                {" "}
                                {display ? "View less" : "View more"}
                            </button>
                        </div>
                    </Card.Body>
                </Card>
            </div>
    )
}

const mapDispatchToProps = {
    getActivities: activitiesActions.getActivities,
    likes: itinerariesActions.likes
}

/* const mapStateToProps = (state) => {
    console.log(state)
    return {
        activities: state.activitiesReducer.activities,
    }
}
 */
export default connect(null, mapDispatchToProps)(Itinerary)