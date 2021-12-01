import Slider from "react-slick";
import React, {useEffect, useState} from 'react'
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom"

export default function MultipleRows () {
    const [ciudades, setCiudades] = useState([])
    
    useEffect(()=>{
        fetch("http://localhost:4000/api/cities")
        .then(res => res.json())
        .then(data => setCiudades(data.response))
        .catch(err => console.log(err.message))
    },[])

    const settings = {
        className: "center",
        centerMode: false,
        infinite: true,
        slidesToShow: 1,
        speed: 900,
        rows: 2,
        slidesPerRow: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                speed: 900,
                rows: 4,
                slidesPerRow: 1,
            }
        }
    ]
    };
    return (
        <div>
            <Slider {...settings} >
                {ciudades.map((city, index) => {
                    if(index < 12){
                        return (
                            <div key={index} className="tarjetass">
                                
                                <Card className="mt-2 tarjeta">
                                    <Card.Img
                                        variant="top"
                                        src={city.src}
                                    />
                                    <Card.Body>
                                        <Card.Title>
                                            {city.name}
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                                
                            </div>
                        );
                    }    
                            
                })}
            </Slider>
        </div>
    );
    
}
