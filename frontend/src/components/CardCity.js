import { useParams } from 'react-router-dom'
import Navigation from '../components/Navigation'
import citiesActions from '../redux/actions/citiesActions'
import itinerariesActions from '../redux/actions/itinerariesActions'
import {connect} from 'react-redux'
import Itinerary from './Itinerary'
import {useEffect} from "react"

function CardCity (props){
    const params = useParams()
    
    useEffect(() => {
        !props.cities[0] && props.getCities() 
        props.cities[0] && props.findCity(props.cities, params.id)
        props.getItineraries(params.id)
    }, [props.cities])

    const backgroundCity = {
        backgroundImage: "url(" + props.city.src + ")"
    }

    return(
        <div>
            <div className="hero-city"  key={props.city._id} style={backgroundCity}>
                <Navigation  />
            </div>
            <div className="cont-titulo">
                <h3 className="titulito">{props.city.name}</h3>
            </div>
            <div className="cont-texto container">
                <p className="texto-city">{props.city.description}</p>
            </div>
            {props.itineraries[0] ? 
            (
            <Itinerary itineraries={props.itineraries} /> // preguntar
            ) : 
            (
                <h2 className="mensaje-construccion">Under construction...</h2>
            )}
        </div>
    )
}


const mapDispatchToProps = {
    findCity: citiesActions.findCity,
    getCities: citiesActions.getCities,
    getItineraries: itinerariesActions.getItineraries,
}

const mapStateToProps = (state) => {
    return {
        cities: state.citiesReducer.cities,
        city: state.citiesReducer.city,
        itineraries: state.itinerariesReducer.itineraries,
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CardCity)
