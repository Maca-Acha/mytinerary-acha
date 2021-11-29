import React, {useEffect, useState} from 'react'
import '../pages/Cities.css'
import {Link, useParams} from "react-router-dom"


function CardCities () {
    const [ciudades, setCiudades] = useState([])
    const [search, setSearch] = useState([])
    const params = useParams()

    useEffect(()=>{
        fetch("http://localhost:4000/api/cities")
        .then(res => res.json())
        .then(data => setCiudades(data.response))
        .catch(err => console.log(err.message))
    },[])
    
    const filter = ciudades.filter((city) =>
    city.name.toLowerCase().startsWith(search)
    )
    return(
        <div >
            <div className="contenedor-ciudades container">
            <input
                onChange={(e) => 
                    setSearch(e.target.value.toLocaleLowerCase().trimStart().trimEnd())
                }
                type="text"
                className="buscador"
                placeholder="Search a City"
                />
                <div className="card-ciudad">
                    {filter.length > 0 ? (
                        filter.map(ciudad => {
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
                }
                </div>
            </div>
        </div>
    )
}
export default CardCities

{/* <Link to={`/city/${ciudad._id}`}>
    <Card className="card-imagen ">
    <Card.Img className="imagen" key={ciudad._id} alt= {ciudad.name} src={ciudad.src} />
    <Card.ImgOverlay>
    <Card.Title>{ciudad.name}</Card.Title>
    <Card.Text className="text-descripcion">{ciudad.description}</Card.Text>
    </Card.ImgOverlay>
    </Card>
</Link> */}