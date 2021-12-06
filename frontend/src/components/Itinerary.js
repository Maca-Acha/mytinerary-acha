import {Button, Card, Collapse} from "react-bootstrap"
import {useState} from "react"
import { AiOutlineHeart } from "react-icons/ai";

export default function Itinerary(props) {
    const corazon = <AiOutlineHeart />
    const [open, setOpen] = useState(false)

    function precio(price) {
        return Array.from({length: price})
    }
    console.log(props)
    return (
        <div className="itinerarios">
            {props.itineraries.length > 0 &&
            props.itineraries.map((itinerary, index) => (
                <Card key={index} className="card-itinerary">
                    <Card.Header className="header-itinerary color-text">{itinerary.title}</Card.Header>
                    <Card.Body className="cont-card">
                        <div className="usuario">
                            <img className="singleCard" variant="top" src={itinerary.src} />
                            <p>{itinerary.name}</p>
                        </div>
                        <div className="texto-itinerario">
                            <div className="like">
                                <p className="color-text">Likes: {corazon}</p>
                            </div>
                            <span className="duracion">Duration: {itinerary.duration}Hs</span>
                            <div className="precio">
                                <p className="color-text">Price:</p> {precio(itinerary.price).map(() => (
                                    <span className="plata">💵</span>
                                ))}
                            </div>    
                            <div className="hashtags">
                                {itinerary.hashtags.map((hash) => (
                                    <div className="color-text"> #{hash}</div>
                                ))}
                            </div>
                            <div className="cont-btn-ver">
                                <Button
                                    className="btn-ver-mas p-1 fs-6 fw-normal m-1"
                                    onClick={() => setOpen(!open)}
                                    aria-controls="example-fade-text"
                                    aria-expanded={open}
                                >
                                    {!open ? "View more" : "View less"}
                                </Button>
                            </div>
                            <Collapse in={open}>
                                <div id="example-collapse-text">
                                Under Construction....
                                </div>
                            </Collapse>
                        </div>
                    </Card.Body>
                </Card>
            ))}
            </div>
    )
}



