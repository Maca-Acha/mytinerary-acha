import React, { Component } from "react";
import Slider from "react-slick";
import Imagenes from "./Imagenes";
import {Card} from "react-bootstrap";
import testUtils from "react-dom/test-utils";

export default class MultipleRows extends Component {
    render() {
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
                breakpoint: 835,
                settings: {
                    slidesToShow: 1,
                    speed: 900,
                    rows: 2,
                    slidesPerRow: 1,
                }
            },{
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    speed: 900,
                    rows: 1,
                    slidesPerRow: 1,
                }
            }
        ]
        };
        return (
            <div>
                <Slider {...settings} >
                    {Imagenes.map((img, index) => {
                        return (
                            <div key={index} className="tarjetass">
                                <a href="/cities">
                                <Card className="mt-2 tarjeta">
                                    <Card.Img
                                        variant="top"
                                        src={`${img.src}`}
                                    />
                                    <Card.Body>
                                        <Card.Title>
                                            {`${img.name}`}
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                                </a>
                            </div>
                        );
                    })}
                </Slider>
            </div>
        );
    }
}
