import React from "react";
import "../../../About/about.scss";
import Abouts from "../../../../assets/images/about_class.png";
import SciencesCaruosel from "../../../../components/SciencesCaruosel/sciencesCaruosel";
import Footer from "../../../../components/Layout/Footer/Footer";
import TeacherHeader from "../../../../components/Layout/TeacherHeader/TeacherHeader";

const TeacherAbout = () => {
    return (
        <>
            <TeacherHeader/>
            <div className="about">
                <div className="about_min">
                    <div className="about_min_title">Metropoliten kadrlarini tayyorlash ilmiy innovatsion markazi</div>
                </div>

            </div>
            <div className="min-container">
                <div className="about_containers">
                    <div className="about_containers_boxs">
						<span className="about_containers_boxs_spans">
							TRANSPORT SOHASIDA KADRLARNI QAYTA TAYYORLASH VA ULARNING MALAKASINI OSHIRISH HAMDA ILMIY VA INNOVATSION FAOLIYAT TIZIMINI TASHKIL ETISH CHORA-TADBIRLARI TO‘G‘RISIDA
						</span>
                        <p className="about_containers_boxs_ps">
                            Mamlakatimizda transport va yo‘l xo‘jaligi sohasida xodimlarni tayyorlash, qayta tayyorlash,
                            ularning malakasini oshirish tizimini tubdan isloh qilish maqsadida ilg‘or xorijiy tajribani
                            qo‘llagan holda o‘quv jarayoniga yangi ta’lim uslublarini, zamonaviy axborot
                            texnologiyalarini keng joriy etish borasida tizimli ishlar amalga oshirilmoqda.
                            <br style={{marginTop:"30px"}} />
                            Shu bilan birga, bugungi kunda transport sohasida ta’lim oluvchilarga keng imkoniyatlar va
                            qulay sharoitlar yaratish, soha kadrlarining bilim va ko‘nikmalarini oshirish, shuningdek,
                            kadrlarni qayta tayyorlash hamda ularning malakasini oshirish jarayonlarini ishlab chiqarish
                            bilan uzviy bog‘liq holda amalga oshirish talab etilmoqda.
                        </p>
                    </div>
                    <div className="about_containers_boxImg">
                        <img className="about_containers_boxImg_imgAbout" src={Abouts} alt="Abouts" />
                    </div>
                </div>
                <SciencesCaruosel/>
            </div>
<Footer/>
        </>
    );
};

export default TeacherAbout;
