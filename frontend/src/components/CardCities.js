
import '../pages/Cities.css'
import {Link} from "react-router-dom"
import { Spinner } from "react-bootstrap"; 
import citiesActions from '../redux/actions/citiesActions';
import {connect} from 'react-redux'

function CardCities (props) {
    !props.cities[0] && props.getCities()
    return(
        <div >
            <div className="contenedor-ciudades container">
            <input
                onChange = {(e) => 
                    props.filterCities(props.cities, e.target.value.toLocaleLowerCase().trim())
                } 
                type="text"
                className="buscador"
                placeholder="Search a City"
                />
                <div className="card-ciudad">
                    {props.cities.length > 0  ? 
                    (props.auxiliar.length > 0 ? (
                        props.auxiliar.map(ciudad => {
                            return(
                                <Link to={`/city/${ciudad._id}`}>
                                    <div className="card-imagen ">
                                    <img className="imagen" key={ciudad._id} alt= {ciudad.name} src={ciudad.src} />
                                    <div className="texto-ciudades">
                                    <p className="texto">{ciudad.name}<span className="country">, {ciudad.country}</span></p>
                                    </div>
                                    </div>
                                </Link>
                            )
                        }
                    )
                    ):(<h3 className="sin-resultados">No results found, try another search</h3>)
                    ):<Spinner className="spinner" animation="border" variant="danger" />
                    }
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    filterCities: citiesActions.filterCities,
    getCities: citiesActions.getCities
}

const mapStateToProps = (state) => {
    return {
        cities: state.citiesReducer.cities,
        auxiliar: state.citiesReducer.auxiliar
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CardCities)
