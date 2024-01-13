import React from 'react';
import "./saleProduct.scss"
import {Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper/modules';

import {Swiper, SwiperSlide,} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import House from "../../../../assets/images/house.svg";
import pillow from "../../../../assets/images/pillow.svg";
import pillow2 from "../../../../assets/images/pillow2.svg";
import noutbook from "../../../../assets/images/noutbook.svg";
import kitchen from "../../../../assets/images/kitchen.svg";
import cottage from "../../../../assets/images/cottage.svg";
import moshing from "../../../../assets/images/moshing.svg";
import ball from "../../../../assets/images/ball.svg";
import Phones from "../../../../assets/images/phones.svg";
import times from "../../../../assets/images/times.svg";
import headphone from "../../../../assets/images/headphone.svg";
import pharmacy from "../../../../assets/images/pharmacy.svg";
import summer from "../../../../assets/images/summer.svg";
import rest from "../../../../assets/images/rest.svg";
import training from "../../../../assets/images/training.svg";
import sun from "../../../../assets/images/sun.svg";

function SaleProduct(props) {
    return (
        <div className="SaleProduct">
            <div className="SaleProduct_title">Рекомендуем</div>
            <Swiper
                breakpoints={{
                    0: {
                        slidesPerView: 2,
                    },
                    400: {
                        slidesPerView: 3,
                    },
                    639: {
                        slidesPerView: 4,
                    },
                    865: {
                        slidesPerView: 6
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
                    <div className="SaleProduct_sale">
                        <img className="ProductSlider_pic" src={House} alt="House"/>
                        <div>Гирлянды</div>
                    </div>
                    <div className="SaleProduct_sale">
                        <img className="ProductSlider_pic" src={cottage} alt="cottage"/>
                        <div>для дачи</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="SaleProduct_sale">
                        <img className="ProductSlider_pic" src={pillow} alt="pillow"/>
                        <div>Подушки</div>
                    </div>
                    <div className="SaleProduct_sale">
                        <img className="ProductSlider_pic" src={pillow2} alt="pillow"/>
                        <div>Подушки</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="SaleProduct_sale">
                        <img className="ProductSlider_pic" src={noutbook} alt="noutbook"/>
                        <div>Ноутбуки</div>
                    </div>
                    <div className="SaleProduct_sale">
                        <img className="ProductSlider_pic" src={moshing} alt="moshing"/>
                        <div>БЫТъ</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="SaleProduct_sale">
                        <img className="ProductSlider_pic" src={kitchen} alt="kitchen"/>
                        <div>Для кухни</div>
                    </div>
                    <div className="SaleProduct_sale">
                        <img className="ProductSlider_pic" src={ball} alt="ball"/>
                        <div>СПОРТ</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="SaleProduct_sale">
                        <img className="ProductSlider_pic" src={Phones} alt="Phones"/>
                        <div>Для кухни</div>
                    </div>
                    <div className="SaleProduct_sale">
                        <img className="ProductSlider_pic" src={times} alt="times"/>
                        <div>Часы</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="SaleProduct_sale">
                        <img className="ProductSlider_pic" src={headphone} alt="headphone"/>
                        <div>АУДИОТЕХНИКА</div>
                    </div>
                    <div className="SaleProduct_sale">
                        <img className="ProductSlider_pic" src={pharmacy} alt="pharmacy"/>
                        <div>Аптека</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="SaleProduct_sale">
                        <img className="ProductSlider_pic" src={summer} alt="summer"/>
                        <div>Лето</div>
                    </div>
                    <div className="SaleProduct_sale">
                        <img className="ProductSlider_pic" src={rest} alt="rest"/>
                        <div>Отдых</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="SaleProduct_sale">
                        <img className="ProductSlider_pic" src={training} alt="training"/>
                        <div>Тренировки</div>
                    </div>
                    <div className="SaleProduct_sale">
                        <img className="ProductSlider_pic" src={sun} alt="sun"/>
                        <div>от солнца</div>
                    </div>
                </SwiperSlide>


            </Swiper>
        </div>
    );
}

export default SaleProduct;