import React from 'react';
import {Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper/modules';

import {Swiper, SwiperSlide,} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./kitchenProduct.scss"
import kitchen_Pro2 from "../../../../assets/images/kitchen_pro2.png";
import kitchen_Pro3 from "../../../../assets/images/kitchen_pro3.png";
import kitchen_Pro from "../../../../assets/images/food_pro.png";

function KitchenProduct(props) {
    return (
        <div className="KitchenProduct">
            <Swiper
                breakpoints={{
                    0: {
                        slidesPerView: 2,
                    },
                    400: {
                        slidesPerView: 5,
                    },
                    639: {
                        slidesPerView: 5,
                    },
                    865: {
                        slidesPerView: 7
                    },
                    1000: {
                        slidesPerView: 9
                    },
                    1500: {
                        slidesPerView: 9
                    },
                    1700: {
                        slidesPerView: 9
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
                   <div className="KitchenProduct_all">
                       <div className="KitchenProduct_all_pro">
                           <img className="ProductSlider_all_pic" src={kitchen_Pro} alt="kitchen_Pro"/>
                       </div>
                       <div className="KitchenProduct_all_text" >Аптека</div>
                   </div>


                </SwiperSlide>
                <SwiperSlide>
                   <div className="KitchenProduct_all">
                       <div className="KitchenProduct_all_pro">
                           <img className="ProductSlider_all_pic" src={kitchen_Pro2} alt="kitchen_Pro2"/>
                       </div>
                       <div className="KitchenProduct_all_text" >Аптека</div>
                   </div>


                </SwiperSlide>
                <SwiperSlide>
                   <div className="KitchenProduct_all">
                       <div className="KitchenProduct_all_pro">
                           <img className="ProductSlider_all_pic" src={kitchen_Pro3} alt="kitchen_Pro3"/>
                       </div>
                       <div className="KitchenProduct_all_text" >Аптека</div>
                   </div>


                </SwiperSlide>
                <SwiperSlide>
                   <div className="KitchenProduct_all">
                       <div className="KitchenProduct_all_pro">
                           <img className="ProductSlider_all_pic" src={kitchen_Pro} alt="kitchen_Pro"/>
                       </div>
                       <div className="KitchenProduct_all_text" >Аптека</div>
                   </div>


                </SwiperSlide>
                <SwiperSlide>
                   <div className="KitchenProduct_all">
                       <div className="KitchenProduct_all_pro">
                           <img className="ProductSlider_all_pic" src={kitchen_Pro2} alt="kitchen_Pro2"/>
                       </div>
                       <div className="KitchenProduct_all_text" >Аптека</div>
                   </div>


                </SwiperSlide>
                <SwiperSlide>
                   <div className="KitchenProduct_all">
                       <div className="KitchenProduct_all_pro">
                           <img className="ProductSlider_all_pic" src={kitchen_Pro3} alt="kitchen_Pro3"/>
                       </div>
                       <div className="KitchenProduct_all_text" >Аптека</div>
                   </div>


                </SwiperSlide>
                <SwiperSlide>
                    <div className="KitchenProduct_all">
                        <div className="KitchenProduct_all_pro">
                            <img className="ProductSlider_all_pic" src={kitchen_Pro} alt="kitchen_Pro"/>
                        </div>
                        <div className="KitchenProduct_all_text">Аптека</div>
                    </div>


                </SwiperSlide>
                <SwiperSlide>
                    <div className="KitchenProduct_all">
                        <div className="KitchenProduct_all_pro">
                            <img className="ProductSlider_all_pic" src={kitchen_Pro2} alt="kitchen_Pro2"/>
                        </div>
                        <div className="KitchenProduct_all_text">Аптека</div>
                    </div>


                </SwiperSlide>
                <SwiperSlide>
                    <div className="KitchenProduct_all">
                        <div className="KitchenProduct_all_pro">
                            <img className="ProductSlider_all_pic" src={kitchen_Pro3} alt="kitchen_Pro3"/>
                        </div>
                        <div className="KitchenProduct_all_text">Аптека</div>
                    </div>


                </SwiperSlide>



            </Swiper>

        </div>
    );
}

export default KitchenProduct;