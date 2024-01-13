import React from 'react';
import "./fooProduct.scss"
import {Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper/modules';

import {Swiper, SwiperSlide,} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import layer from "../../../../assets/images/Layer.png";
import layers from "../../../../assets/images/Layers.png";
import House from "../../../../assets/images/house.svg";
import cottage from "../../../../assets/images/cottage.svg";

import kitchen from "../../../../assets/images/kitchen.svg";
import ball from "../../../../assets/images/ball.svg";
import Phones from "../../../../assets/images/phones.svg";
import times from "../../../../assets/images/times.svg";
import headphone from "../../../../assets/images/headphone.svg";
import pharmacy from "../../../../assets/images/pharmacy.svg";
import summer from "../../../../assets/images/summer.svg";
import rest from "../../../../assets/images/rest.svg";
import training from "../../../../assets/images/training.svg";
import sun from "../../../../assets/images/sun.svg";

function FoodProduct(props) {
    return (
        <div className="FoodProduct">

            <Swiper
                breakpoints={{
                    0: {
                        slidesPerView: 2,
                    },
                    400: {
                        slidesPerView: 2,
                    },
                    639: {
                        slidesPerView: 3,
                    },
                    865: {
                        slidesPerView: 4
                    },
                    1000: {
                        slidesPerView: 5
                    },
                    1500: {
                        slidesPerView: 7
                    },
                    1700: {
                        slidesPerView: 5
                    }
                }}
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={8}
                // navigation
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: true,
                }}
                // pagination={{clickable: true}}
                // scrollbar={{draggable: true}}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <div className="FoodProduct_foods">
                        <div>Аптека</div>
                        <img className="ProductSlider_pic" src={layer} alt="layer"/>
                    </div>
                    <div className="FoodProduct_foods mt-5">
                        <div>Зоотовары</div>
                        <img className="ProductSlider_pic" src={layers} alt="layers"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="FoodProduct_foods">
                        <div>Аптека</div>
                        <img className="ProductSlider_pic" src={layer} alt="layer"/>
                    </div>
                    <div className="FoodProduct_foods mt-5">
                        <div>Зоотовары</div>
                        <img className="ProductSlider_pic" src={layers} alt="layers"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="FoodProduct_foods">
                        <div>Аптека</div>
                        <img className="ProductSlider_pic" src={layer} alt="layer"/>
                    </div>
                    <div className="FoodProduct_foods mt-5">
                        <div>Зоотовары</div>
                        <img className="ProductSlider_pic" src={layers} alt="layers"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="FoodProduct_foods">
                        <div>Аптека</div>
                        <img className="ProductSlider_pic" src={layer} alt="layer"/>
                    </div>
                    <div className="FoodProduct_foods mt-5">
                        <div>Зоотовары</div>
                        <img className="ProductSlider_pic" src={layers} alt="layers"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="FoodProduct_foods">
                        <div>Аптека</div>
                        <img className="ProductSlider_pic" src={layer} alt="layer"/>
                    </div>
                    <div className="FoodProduct_foods mt-5">
                        <div>Зоотовары</div>
                        <img className="ProductSlider_pic" src={layers} alt="layers"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="FoodProduct_foods">
                        <div>Аптека</div>
                        <img className="ProductSlider_pic" src={layer} alt="layer"/>
                    </div>
                    <div className="FoodProduct_foods mt-5">
                        <div>Зоотовары</div>
                        <img className="ProductSlider_pic" src={layers} alt="layers"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="FoodProduct_foods">
                        <div>Аптека</div>
                        <img className="ProductSlider_pic" src={layer} alt="layer"/>
                    </div>
                    <div className="FoodProduct_foods mt-5">
                        <div>Зоотовары</div>
                        <img className="ProductSlider_pic" src={layers} alt="layers"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="FoodProduct_foods">
                        <div>Аптека</div>
                        <img className="ProductSlider_pic" src={layer} alt="layer"/>
                    </div>
                    <div className="FoodProduct_foods mt-5">
                        <div>Зоотовары</div>
                        <img className="ProductSlider_pic" src={layers} alt="layers"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="FoodProduct_foods">
                        <div>Аптека</div>
                        <img className="ProductSlider_pic" src={layer} alt="layer"/>
                    </div>
                    <div className="FoodProduct_foods mt-5">
                        <div>Зоотовары</div>
                        <img className="ProductSlider_pic" src={layers} alt="layers"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="FoodProduct_foods">
                        <div>Аптека</div>
                        <img className="ProductSlider_pic" src={layer} alt="layer"/>
                    </div>
                    <div className="FoodProduct_foods mt-5">
                        <div>Зоотовары</div>
                        <img className="ProductSlider_pic" src={layers} alt="layers"/>
                    </div>
                </SwiperSlide>


            </Swiper>
        </div>
    );
}

export default FoodProduct;