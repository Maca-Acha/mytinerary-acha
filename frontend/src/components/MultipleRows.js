import React, { Component } from "react";
import Slider from "react-slick";
import Imagenes from "./Imagenes";
import {Card} from "react-bootstrap";

export default class MultipleRows extends Component {
    render() {
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 2,
            speed: 200,
            rows: 2,
            slidesPerRow: 1,
            autoplay: true,
            autoplaySpeed: 1000
        };
        return (
            <div>
                <Slider {...settings} >
                    {Imagenes.map((img, index) => {
                        return (
                            <div key={index}>
                                <Card className="m-2">
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
