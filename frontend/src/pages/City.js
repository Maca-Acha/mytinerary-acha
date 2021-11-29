import './City.css'
import {Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function City (){
    const [ciudad, setCiudad] = useState([])
    const params = useParams()
    console.log(params.id)
    useEffect(()=>{
        fetch("http://localhost:4000/api/city/" + params.id )
        .then(res => res.json())
        .then(data => setCiudad(data.response))
        .catch(err => console.log(err.message))
    },[])
    const back = {
        backgroundImage: "url(" + ciudad.src + ")",
        width: "100%",
        height: "50vh",
        "background-repeat": "no-repeat",
        "background-position": "40%",
        "background-size": "cover"
    }
    return(
        <div >
                <div className="hero-city" style={back}>
                <Navigation  />
                </div>
            <div className="main">
                <div className="cont-titulo">
                    <h3 className="titulito">{ciudad.name}</h3>
                </div>
                <div className="cont-texto container">
                    <p className="texto">{ciudad.description}</p>
                </div>
                <div className="cont-mensaje">
                    <h2 className="mensaje">Under Construction</h2>
                </div>
                <div className="btns-volver">
                    <Link to="/cities" className="btn-volver">Go back to Cities</Link>
                    <Link to="/" className="btn-volver">Go back to Home</Link>
                </div>
            </div>
            <Footer />
            <p className="copyright">©MyTinerary | Proyect2021</p>
        </div>
    )
}