import {Card} from "react-bootstrap"
import {useState} from "react"
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineDollarCircle } from "react-icons/ai";

export default function Itinerary({itinerary}) {
    const corazon = <AiOutlineHeart />
    const plata = <AiOutlineDollarCircle />
    const [display, setDisplay] = useState(false)
    const handleClick = () => setDisplay(!display)

    function precio(price) {
        return Array.from({length: price})
    }
    return (
        <div  id={itinerary._id} className="itinerarios">
                <Card key={itinerary._id+1} className="card-itinerary">
                    <Card.Header key={itinerary._id+3} className="header-itinerary color-texto">{itinerary.title}</Card.Header>
                    <Card.Body className="card-body" >
                        <div className="cont-card">
                            <div className="usuario">
                                <img key= {itinerary._id} className="foto-perfil" variant="top" src={itinerary.src} />
                                <p>{itinerary.name}</p>
                            </div>
                            <div className="texto-itinerario">
                                <div className="duracion-costo">
                                    <p className="duracion">Duration: {itinerary.duration}Hs</p>
                                    <div className="precio">
                                        <p className="color-texto">Price:</p> {precio(itinerary.price).map((index) => (
                                            <span key={index} className="plata">{plata}</span>
                                        ))}
                                    </div>    
                                    <div className="like">
                                        <span className="corazon">{corazon}</span><span className="numero-like">0</span>
                                    </div>
                                </div>
                                <div className="hashtags">
                                    {itinerary.hashtags.map((hash, index) => (
                                        <div key={index+1} className="color-texto"> #{hash}</div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="btn-ver-mas">
                            {display && (
                                <h4>Under Construction...</h4>
                            )}
                            <button onClick={handleClick} className="btn-ver">
                                {" "}
                                {display ? "View less" : "View more"}
                            </button>
                        </div>
                    </Card.Body>
                </Card>
            </div>
    )
}



