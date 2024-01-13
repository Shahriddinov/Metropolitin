import React, {useState} from 'react';
import "./houseProduct.scss"
import {Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper/modules';

import {Swiper, SwiperSlide,} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Right from "../../../../assets/images/right.svg"
import putcar from "../../../../assets/images/putcar.png";
import toothbrush from "../../../../assets/images/toothbrush.png"
function HouseProduct(props) {
    const [click, setClick] = useState(false);
    const handleClick = () => {

        setClick(current => !current);
    };
    return (
        <div className="HouseProduct">
            <div className="HouseProduct_header">

                <button onClick={handleClick} className={click === false && "HouseProduct_header_next" ?  "HouseProduct_header_preiw" : "HouseProduct_header_next"}>НОВИНКИ</button>
                <button onClick={handleClick} className={click === true && "HouseProduct_header_next" ?  "HouseProduct_header_preiw" : "HouseProduct_header_next"}>ЭКСКЛЮЗИВ</button>
                <hr/>
                <div className="HouseProduct_header_keep">
                    Смотреть все
                    <img src={Right} alt=""/>
                </div>
            </div>
            <Swiper
                breakpoints={{
                    0: {
                        slidesPerView: 3,
                    },
                    400:{
                        slidesPerView:1,
                    },
                    639: {
                        slidesPerView: 2,
                    },
                    865:{
                        slidesPerView:3
                    },
                    1000:{
                        slidesPerView:4
                    },
                    1500:{
                        slidesPerView:4
                    },
                    1700:{
                        slidesPerView:6
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
                    <div className="HouseProduct_namesPro">
                        <img className="" src={toothbrush} alt="toothbrush"/>
                        <div className="HouseProduct_namesPro_full">Зубная щетка</div>
                        <h4>для детей</h4>
                        <h4>3 341 сум</h4>
                    </div>
                    <div className="HouseProduct_namesPro">
                        <img className="" src={putcar} alt="putcar"/>
                        <div className="HouseProduct_namesPro_full">Зубная щетка</div>
                        <h4>для детей</h4>
                        <h4>3 341 сум</h4>
                    </div>
                </SwiperSlide><SwiperSlide>
                    <div className="HouseProduct_namesPro">
                        <img className="" src={toothbrush} alt="toothbrush"/>
                        <div className="HouseProduct_namesPro_full">Зубная щетка</div>
                        <h4>для детей</h4>
                        <h4>3 341 сум</h4>
                    </div>
                    <div className="HouseProduct_namesPro">
                        <img className="" src={putcar} alt="putcar"/>
                        <div className="HouseProduct_namesPro_full">Зубная щетка</div>
                        <h4>для детей</h4>
                        <h4>3 341 сум</h4>
                    </div>
                </SwiperSlide><SwiperSlide>
                    <div className="HouseProduct_namesPro">
                        <img className="" src={toothbrush} alt="toothbrush"/>
                        <div className="HouseProduct_namesPro_full">Зубная щетка</div>
                        <h4>для детей</h4>
                        <h4>3 341 сум</h4>
                    </div>
                    <div className="HouseProduct_namesPro">
                        <img className="" src={putcar} alt="putcar"/>
                        <div className="HouseProduct_namesPro_full">Зубная щетка</div>
                        <h4>для детей</h4>
                        <h4>3 341 сум</h4>
                    </div>
                </SwiperSlide><SwiperSlide>
                    <div className="HouseProduct_namesPro">
                        <img className="" src={toothbrush} alt="toothbrush"/>
                        <div className="HouseProduct_namesPro_full">Зубная щетка</div>
                        <h4>для детей</h4>
                        <h4>3 341 сум</h4>
                    </div>
                    <div className="HouseProduct_namesPro">
                        <img className="" src={putcar} alt="putcar"/>
                        <div className="HouseProduct_namesPro_full">Зубная щетка</div>
                        <h4>для детей</h4>
                        <h4>3 341 сум</h4>
                    </div>
                </SwiperSlide><SwiperSlide>
                    <div className="HouseProduct_namesPro">
                        <img className="" src={toothbrush} alt="toothbrush"/>
                        <div className="HouseProduct_namesPro_full">Зубная щетка</div>
                        <h4>для детей</h4>
                        <h4>3 341 сум</h4>
                    </div>
                    <div className="HouseProduct_namesPro">
                        <img className="" src={putcar} alt="putcar"/>
                        <div className="HouseProduct_namesPro_full">Зубная щетка</div>
                        <h4>для детей</h4>
                        <h4>3 341 сум</h4>
                    </div>
                </SwiperSlide><SwiperSlide>
                    <div className="HouseProduct_namesPro">
                        <img className="" src={toothbrush} alt="toothbrush"/>
                        <div className="HouseProduct_namesPro_full">Зубная щетка</div>
                        <h4>для детей</h4>
                        <h4>3 341 сум</h4>
                    </div>
                    <div className="HouseProduct_namesPro">
                        <img className="" src={putcar} alt="putcar"/>
                        <div className="HouseProduct_namesPro_full">Зубная щетка</div>
                        <h4>для детей</h4>
                        <h4>3 341 сум</h4>
                    </div>
                </SwiperSlide><SwiperSlide>
                    <div className="HouseProduct_namesPro">
                        <img className="" src={toothbrush} alt="toothbrush"/>
                        <div className="HouseProduct_namesPro_full">Зубная щетка</div>
                        <h4>для детей</h4>
                        <h4>3 341 сум</h4>
                    </div>
                    <div className="HouseProduct_namesPro">
                        <img className="" src={putcar} alt="putcar"/>
                        <div className="HouseProduct_namesPro_full">Зубная щетка</div>
                        <h4>для детей</h4>
                        <h4>3 341 сум</h4>
                    </div>
                </SwiperSlide><SwiperSlide>
                    <div className="HouseProduct_namesPro">
                        <img className="" src={toothbrush} alt="toothbrush"/>
                        <div className="HouseProduct_namesPro_full">Зубная щетка</div>
                        <h4>для детей</h4>
                        <h4>3 341 сум</h4>
                    </div>
                    <div className="HouseProduct_namesPro">
                        <img className="" src={putcar} alt="putcar"/>
                        <div className="HouseProduct_namesPro_full">Зубная щетка</div>
                        <h4>для детей</h4>
                        <h4>3 341 сум</h4>
                    </div>
                </SwiperSlide><SwiperSlide>
                <div className="HouseProduct_namesPro">
                    <img className="" src={toothbrush} alt="toothbrush"/>
                    <div className="HouseProduct_namesPro_full">Зубная щетка</div>
                    <h4>для детей</h4>
                    <h4>3 341 сум</h4>
                </div>
                <div className="HouseProduct_namesPro">
                    <img className="" src={putcar} alt="putcar"/>
                    <div className="HouseProduct_namesPro_full">Зубная щетка</div>
                    <h4>для детей</h4>
                    <h4>3 341 сум</h4>
                </div>
            </SwiperSlide>


            </Swiper>

        </div>
    );
}

export default HouseProduct;