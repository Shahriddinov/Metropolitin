import React from 'react';
import "./productSlider.scss"
import {Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper/modules';

import {Swiper, SwiperSlide,} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Comp from "../../../../assets/images/icon/comp.png";
import Kor from "../../../../assets/images/icon/ic_kor.svg";

function ProductSlider(props) {
    return (
        <div className="ProductSlider">
            <div className="ProductSlider_title">Рекомендуем</div>
            <Swiper
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    400:{
                        slidesPerView:1,
                    },
                    639: {
                        slidesPerView: 2,
                    },
                    865:{
                        slidesPerView:2
                    },
                    1000:{
                        slidesPerView:3
                    },
                    1500:{
                        slidesPerView:4
                    },
                    1700:{
                        slidesPerView:4
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
                    <div className="ProductSlider_boxes">
                        <img className="ProductSlider_pic" src={Comp} alt="Comp"/>
                        <div className="ProductSlider_boxes_texts">
                            <div className="ProductSlider_boxes_texts_names">Apple mac book pro</div>
                            <div className="ProductSlider_boxes_texts_sales">12 233 341 сум</div>
                            <button className="ProductSlider_boxes_texts_adds">
                                <img src={Kor} alt=""/>
                            </button>
                        </div>

                    </div>
                </SwiperSlide><SwiperSlide>
                    <div className="ProductSlider_boxes">
                        <img className="ProductSlider_pic" src={Comp} alt="Comp"/>
                        <div className="ProductSlider_boxes_texts">
                            <div className="ProductSlider_boxes_texts_names">Apple mac book pro</div>
                            <div className="ProductSlider_boxes_texts_sales">12 233 341 сум</div>
                            <button className="ProductSlider_boxes_texts_adds">
                                <img src={Kor} alt=""/>
                            </button>
                        </div>

                    </div>
                </SwiperSlide><SwiperSlide>
                    <div className="ProductSlider_boxes">
                        <img className="ProductSlider_pic" src={Comp} alt="Comp"/>
                        <div className="ProductSlider_boxes_texts">
                            <div className="ProductSlider_boxes_texts_names">Apple mac book pro</div>
                            <div className="ProductSlider_boxes_texts_sales">12 233 341 сум</div>
                            <button className="ProductSlider_boxes_texts_adds">
                                <img src={Kor} alt=""/>
                            </button>
                        </div>

                    </div>
                </SwiperSlide><SwiperSlide>
                    <div className="ProductSlider_boxes">
                        <img className="ProductSlider_pic" src={Comp} alt="Comp"/>
                        <div className="ProductSlider_boxes_texts">
                            <div className="ProductSlider_boxes_texts_names">Apple mac book pro</div>
                            <div className="ProductSlider_boxes_texts_sales">12 233 341 сум</div>
                            <button className="ProductSlider_boxes_texts_adds">
                                <img src={Kor} alt=""/>
                            </button>
                        </div>

                    </div>
                </SwiperSlide><SwiperSlide>
                    <div className="ProductSlider_boxes">
                        <img className="ProductSlider_pic" src={Comp} alt="Comp"/>
                        <div className="ProductSlider_boxes_texts">
                            <div className="ProductSlider_boxes_texts_names">Apple mac book pro</div>
                            <div className="ProductSlider_boxes_texts_sales">12 233 341 сум</div>
                            <button className="ProductSlider_boxes_texts_adds">
                                <img src={Kor} alt=""/>
                            </button>
                        </div>

                    </div>
                </SwiperSlide><SwiperSlide>
                    <div className="ProductSlider_boxes">
                        <img className="ProductSlider_pic" src={Comp} alt="Comp"/>
                        <div className="ProductSlider_boxes_texts">
                            <div className="ProductSlider_boxes_texts_names">Apple mac book pro</div>
                            <div className="ProductSlider_boxes_texts_sales">12 233 341 сум</div>
                            <button className="ProductSlider_boxes_texts_adds">
                                <img src={Kor} alt=""/>
                            </button>
                        </div>

                    </div>
                </SwiperSlide><SwiperSlide>
                    <div className="ProductSlider_boxes">
                        <img className="ProductSlider_pic" src={Comp} alt="Comp"/>
                        <div className="ProductSlider_boxes_texts">
                            <div className="ProductSlider_boxes_texts_names">Apple mac book pro</div>
                            <div className="ProductSlider_boxes_texts_sales">12 233 341 сум</div>
                            <button className="ProductSlider_boxes_texts_adds">
                                <img src={Kor} alt=""/>
                            </button>
                        </div>

                    </div>
                </SwiperSlide><SwiperSlide>
                    <div className="ProductSlider_boxes">
                        <img className="ProductSlider_pic" src={Comp} alt="Comp"/>
                        <div className="ProductSlider_boxes_texts">
                            <div className="ProductSlider_boxes_texts_names">Apple mac book pro</div>
                            <div className="ProductSlider_boxes_texts_sales">12 233 341 сум</div>
                            <button className="ProductSlider_boxes_texts_adds">
                                <img src={Kor} alt=""/>
                            </button>
                        </div>

                    </div>
                </SwiperSlide><SwiperSlide>
                    <div className="ProductSlider_boxes">
                        <img className="ProductSlider_pic" src={Comp} alt="Comp"/>
                        <div className="ProductSlider_boxes_texts">
                            <div className="ProductSlider_boxes_texts_names">Apple mac book pro</div>
                            <div className="ProductSlider_boxes_texts_sales">12 233 341 сум</div>
                            <button className="ProductSlider_boxes_texts_adds">
                                <img src={Kor} alt=""/>
                            </button>
                        </div>

                    </div>
                </SwiperSlide><SwiperSlide>
                    <div className="ProductSlider_boxes">
                        <img className="ProductSlider_pic" src={Comp} alt="Comp"/>
                        <div className="ProductSlider_boxes_texts">
                            <div className="ProductSlider_boxes_texts_names">Apple mac book pro</div>
                            <div className="ProductSlider_boxes_texts_sales">12 233 341 сум</div>
                            <button className="ProductSlider_boxes_texts_adds">
                                <img src={Kor} alt=""/>
                            </button>
                        </div>

                    </div>
                </SwiperSlide><SwiperSlide>
                <div className="ProductSlider_boxes">
                    <img className="ProductSlider_pic" src={Comp} alt="Comp"/>
                    <div className="ProductSlider_boxes_texts">
                        <div className="ProductSlider_boxes_texts_names">Apple mac book pro</div>
                        <div className="ProductSlider_boxes_texts_sales">12 233 341 сум</div>
                        <button className="ProductSlider_boxes_texts_adds">
                            <img src={Kor} alt=""/>
                        </button>
                    </div>

                </div>
            </SwiperSlide>


            </Swiper>
        </div>
    );
}

export default ProductSlider;