import React from "react";
import FooterImg from '../../../assets/images/footer.png'

const Footer = () => {


    return (
        <footer className="footer">
            <div className="footer_ImgCard">
                <img width="100%" src={FooterImg} alt="FooterImg"/>
            </div>
            <div className="footer_TextCard">
                <div className="footer_TextCard_info">MARKAZ HAQIDA</div>
                <span className="footer_TextCard_address">Manzil: Toshkent shahar, Shirin-ariq <br/> 49-uy</span>
                <span className="footer_TextCard_address">Tel:  +998(91)283-77-08</span>
                <p className="footer_TextCard_describtion">
                    Malaka oshirish, Kadrlar malakasini oshirish va ularni qayta tayyorlash (OʻzRda) — uzluksiz taʼlim
                    tizimi turlaridan biri, xalq xoʻjaligining barcha sohasida ishlovchi mutaxassislar va rahbar
                    xodimlarning kasbiy bilim va koʻnikmalarini yangilash hamda chuqurlashtirish jarayoni. Kadrlarning
                    raqobatbardoshlik sifatlari hamda bilim va koʻnikmalarining zamon talablariga javob bera oladigan
                    darajada boʻlishini taʼminlaydi. Malaka oshirish va qayta tayyorlash har bir xodimning oʻz
                    mutaxassisligi boʻyicha soʻnggi fan yutuklari, yangiliklari bilan tanishish, ularni oʻzlashtirish,
                    yangi amaliy ish usullari, ilgʻor ish tajribalarini oʻrganishdan iborat ilmiy nazariy hamda amaliy
                    tayyorgarlik jarayoni hisoblanadi.
                </p>
            </div>
            <div className="footer_ImgCard">
                <img width="100%" src={FooterImg} alt="FooterImg"/>
            </div>
        </footer>
    );
};

export default Footer;
