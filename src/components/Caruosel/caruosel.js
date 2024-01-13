import React from 'react';
import { Carousel } from 'antd';

import Carusel from "../../assets/images/carousel.png"
import "./caruosel.scss"

const contentStyle = {
    height: 'auto',
    width: '`100%'
};
function Caruosel(props) {
    return (
        <div className="caruosel">
            <Carousel autoplay>
                <div>
                    <h3 style={contentStyle}>
                        <img style={{width:"100%"}} src={Carusel} alt=""/>
                    </h3>
                </div>
                <div>
                    <h3 style={contentStyle}>
                        <img style={{width:"100%"}} src={Carusel} alt=""/>

                    </h3>
                </div>
                <div>
                    <h3 style={contentStyle}>
                        <img style={{width:"100%"}} src={Carusel} alt=""/>

                    </h3>
                </div>
                <div>
                    <h3 style={contentStyle}>
                        <img style={{width:"100%"}} src={Carusel} alt=""/>

                    </h3>
                </div>
            </Carousel>
        </div>
    );
}

export default Caruosel;