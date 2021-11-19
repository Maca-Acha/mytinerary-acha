import React, { Component } from "react";
import Slider from "react-slick";
import Imagenes from "./Imagenes";
import {Card} from "react-bootstrap";

export default class MultipleRows extends Component {
    render() {
        const settings = {
            className: "center",
            centerMode: false,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 1,
            speed: 200,
            rows: 2,
            slidesPerRow: 2,
            autoplay: false,
            autoplaySpeed: 1000
        };
        return (
            <div>
                <Slider {...settings} >
                    {Imagenes.map((img, index) => {
                        return (
                            <div key={index}>
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
                            </div>
                        );
                    })}
                </Slider>
            </div>
        );
    }
}
