import React from 'react';
import {Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper/modules';

import {Swiper, SwiperSlide,} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Sevise from "../../../../assets/images/icon/ic_sevises.svg"
import discount from "../../../../assets/images/icon/ic_discount.svg"
import market from "../../../../assets/images/icon/ic_market.svg"
import ozon from "../../../../assets/images/icon/ic_ozon.svg"
import aksiya from "../../../../assets/images/icon/ic_aksiya.svg"
import katalog from "../../../../assets/images/icon/ic_katalog.svg"
import union from "../../../../assets/images/icon/ic_union.svg"
import download from "../../../../assets/images/icon/ic_download.svg"
import gift from "../../../../assets/images/icon/ic_gift.svg"
import premium from "../../../../assets/images/icon/ic_premium.svg"
import "./servicesCarousel.scss"

function ServicesCarousel(props) {
    return (
        <div className="ServicesCarousel ">
            <Swiper
                breakpoints={{
                    0: {
                        slidesPerView: 3,
                    },
                    400:{
                        slidesPerView:5,
                    },
                    639: {
                        slidesPerView: 7,
                    },
                    865:{
                        slidesPerView:8
                    },
                    1000:{
                        slidesPerView:8
                    },
                    1500:{
                        slidesPerView:8
                    },
                    1700:{
                        slidesPerView:8
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
                    <div className="sliders">
                        <img className="sliders_pic" src={Sevise} alt="Sevise"/>
                        <div className="sliders_texts">Сервисы</div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="sliders">
                        <img className="sliders_pic" src={discount} alt="discount"/>
                        <div className="sliders_texts">Акции</div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="sliders">
                        <img className="sliders_pic" src={market} alt="market"/>
                        <div className="sliders_texts">Супер маркет</div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="sliders">
                        <img className="sliders_pic" src={ozon} alt="ozon"/>
                        <div className="sliders_texts">Ozon.Card</div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="sliders">
                        <img className="sliders_pic" src={aksiya} alt="aksiya"/>
                        <div className="sliders_texts">Дисконт</div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="sliders">
                        <img className="sliders_pic" src={katalog} alt="katalog"/>
                        <div className="sliders_texts">Каталог</div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="sliders">
                        <img className="sliders_pic" src={union} alt="union"/>
                        <div className="sliders_texts">Из-за рубежа</div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="sliders">
                        <img className="sliders_pic" src={download} alt="download"/>
                        <div className="sliders_texts">Скачат</div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="sliders">
                        <img className="sliders_pic" src={gift} alt="gift"/>
                        <div className="sliders_texts">Подарок</div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="sliders">
                        <img className="sliders_pic" src={premium} alt="premium"/>
                        <div className="sliders_texts">Premium</div>

                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
}

export default ServicesCarousel;