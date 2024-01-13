import React from 'react';
import "./gameProduct.scss"
import {Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper/modules';

import {Swiper, SwiperSlide,} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Game from "../../../../assets/images/game.png";
import photo from "../../../../assets/images/image 68.png";

function GameProduct(props) {
    return (
        <div className="GameProduct">
            <div className="GameProduct_title">Рекомендуем</div>
            <Swiper
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    400: {
                        slidesPerView: 1,
                    },
                    639: {
                        slidesPerView: 2,
                    },
                    865: {
                        slidesPerView: 2
                    },
                    1000: {
                        slidesPerView: 4
                    },
                    1500: {
                        slidesPerView: 4
                    },
                    1700: {
                        slidesPerView: 4
                    }
                }}
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={8}
                // navigation
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: true,
                }}
                // pagination={{clickable: true}}
                // scrollbar={{draggable: true}}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <div className="GameProduct_card" style={{background: "#FF6B00"}}>
                        <span className="GameProduct_card_titles">Улучшенный дизайн контроллер</span>
                        <img className="GameProduct_card_gameImg" src={Game} alt="game"/>
                    </div>
                    <h3 className="GameProduct_names">Продукты</h3>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="GameProduct_card" style={{background: "#94C588"}}>
                        <span className="GameProduct_card_titles">Улучшенный дизайн контроллер</span>
                        <img className="GameProduct_card_gameImg" src={Game} alt="game"/>
                    </div>
                    <h3 className="GameProduct_names">Продукты</h3>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="GameProduct_card" style={{background: "#FF2372"}}>
                        <span className="GameProduct_card_titles">Улучшенный дизайн контроллер</span>
                        <img className="GameProduct_card_gameImg" src={Game} alt="game"/>
                    </div>
                    <h3 className="GameProduct_names">Продукты</h3>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="GameProduct_card" style={{background: "#2CBFB1"}}>
                        <span className="GameProduct_card_titles">Улучшенный дизайн контроллер</span>
                        <img className="GameProduct_card_gameImg" src={Game} alt="game"/>
                    </div>
                    <h3 className="GameProduct_names">Продукты</h3>

                </SwiperSlide>
                <SwiperSlide>
                <div className="GameProduct_card" style={{background: "#94C588"}}>
                    <span className="GameProduct_card_titles">Улучшенный дизайн контроллер</span>
                    <img className="GameProduct_card_gameImg" src={Game} alt="game"/>
                    <h3 className="GameProduct_names">Продукты</h3>

                </div>

            </SwiperSlide>


            </Swiper>
            <div className="GameProduct_title">Рекомендуем</div>
            <img className="GameProduct_photo" src={photo} alt=""/>
        </div>
    );
}

export default GameProduct;