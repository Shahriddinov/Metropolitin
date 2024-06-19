import React, { useRef } from "react";
import "./SciencesCaruosel.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import OnesImg from "../../assets/images/science.png"
import Two from "../../assets/images/1.png"
import Three from "../../assets/images/2.png"
import p1 from "../../assets/images/p1.png"
import p2 from "../../assets/images/p2.png"
import p3 from "../../assets/images/p3.png"
import p4 from "../../assets/images/p4.png"

import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const SciencesCaruosel = () => {
	const swiperRef = useRef(null);
	return (
		<div className="sciencesCaruosel">
			<div className="sciencesCaruosel_Stitle">Fanlar</div>
			<Swiper
				ref={swiperRef}
				modules={[Navigation]}
				navigation={{
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				}}
				slidesPerView={3}
				spaceBetween={30}
				loop={true}

			>
				<SwiperSlide className="sciencesCaruosel_swipers">
					<div className="sciencesCaruosel_swipers_SwiperBox">
						<img className="sciencesCaruosel_swipers_SwiperBox_SImg" width="100%" src={OnesImg} alt="OnesImg"/>
						<div className="sciencesCaruosel_swipers_SwiperBox_Stext">Kurs</div>
						<div className="sciencesCaruosel_swipers_SwiperBox_STitle">Metropoliten vagonlarning elektrik jixozlari</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="sciencesCaruosel_swipers">
					<div className="sciencesCaruosel_swipers_SwiperBox">
						<img className="sciencesCaruosel_swipers_SwiperBox_SImg" width="100%" src={Two} alt="Two"/>
						<div className="sciencesCaruosel_swipers_SwiperBox_Stext">Kurs</div>
						<div className="sciencesCaruosel_swipers_SwiperBox_STitle">Metropoliten vagonlarning elektrik jixozlari</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="sciencesCaruosel_swipers">
					<div className="sciencesCaruosel_swipers_SwiperBox">
						<img className="sciencesCaruosel_swipers_SwiperBox_SImg" width="100%" src={Three} alt="Three"/>
						<div className="sciencesCaruosel_swipers_SwiperBox_Stext">Kurs</div>
						<div className="sciencesCaruosel_swipers_SwiperBox_STitle">Metropoliten vagonlarning elektrik jixozlari</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="sciencesCaruosel_swipers">
					<div className="sciencesCaruosel_swipers_SwiperBox">
						<img className="sciencesCaruosel_swipers_SwiperBox_SImg" width="100%" src={OnesImg} alt="OnesImg"/>
						<div className="sciencesCaruosel_swipers_SwiperBox_Stext">Kurs</div>
						<div className="sciencesCaruosel_swipers_SwiperBox_STitle">Metropoliten vagonlarning elektrik jixozlari</div>
					</div>
				</SwiperSlide>
				<div className="swiper-button-next"/>
				<div className="swiper-button-prev"/>
			</Swiper>
			<div className="sciencesCaruosel_partner">
				<div className="sciencesCaruosel_partner_Pname">
					<img className="sciencesCaruosel_partner_Pname_imgP" src={p1} alt=""/>
				</div>
				<div className="sciencesCaruosel_partner_Pname">
					<img className="sciencesCaruosel_partner_Pname_imgP" src={p2} alt=""/>
				</div>
				<div className="sciencesCaruosel_partner_Pname">
					<img className="sciencesCaruosel_partner_Pname_imgP" src={p3} alt=""/>
				</div>
				<div className="sciencesCaruosel_partner_Pname">
					<img className="sciencesCaruosel_partner_Pname_imgP" src={p4} alt=""/>
				</div>
			</div>
		</div>
	);
};

export default SciencesCaruosel;