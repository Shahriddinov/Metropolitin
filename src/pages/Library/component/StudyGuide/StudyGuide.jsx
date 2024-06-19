import React from 'react';
import {Link} from "react-router-dom";
import "./studyGuide.scss"
const StudyGuide = () => {
    const AllBookInfo = [
        {img: require("../../../../assets/images/books.png"), name: "Metropoliten vagonlarning elektrik jixozlari", book: "YUKLAB OLISH"},
        {img: require("../../../../assets/images/books.png"), name: "Metropoliten vagonlarning elektrik jixozlari", book: "YUKLAB OLISH"},
        {img: require("../../../../assets/images/books.png"), name: "Metropoliten vagonlarning elektrik jixozlari", book: "YUKLAB OLISH"},
        {img: require("../../../../assets/images/books.png"), name: "Metropoliten vagonlarning elektrik jixozlari", book: "YUKLAB OLISH"},
        {img: require("../../../../assets/images/books.png"), name: "Metropoliten vagonlarning elektrik jixozlari", book: "YUKLAB OLISH"},
        {img: require("../../../../assets/images/books.png"), name: "Metropoliten vagonlarning elektrik jixozlari", book: "YUKLAB OLISH"},
        {img: require("../../../../assets/images/books.png"), name: "Metropoliten vagonlarning elektrik jixozlari", book: "YUKLAB OLISH"}
    ]
    return (
        <div className="backgroundPage">
            <div style={{padding: " 20px 60px"}}>
                <div className="blur">
                    <div className="studyGuide">
                        <div className="studyGuide_head">
                            <Link style={{textDecoration: "none", color: "#8D8484"}} to="/about">
                                <div className="studyGuide_head_homes">Bosh saxifaga qaytish</div>
                            </Link>
                            <Link style={{textDecoration: "none", color: "#8D8484"}} to="/library">
                                <div className="studyGuide_head_homes">Ortga qaytish</div>
                            </Link>
                        </div>
                        <div className="studyGuide_electron">O’quv qo’llanmalar</div>
                        <div  className="studyGuide_bookCard">
                            {AllBookInfo.map((item, index) => (
                                <div key={index} className="studyGuide_bookCard_BookNames">
                                    <img className="studyGuide_bookCard_BookNames_bookImg" src={item.img} alt=""/>
                                    <span className="studyGuide_bookCard_BookNames_NN">{item.name}</span>
                                    <button className="studyGuide_bookCard_BookNames_seemBook">{item.book}</button>
                                </div>
                            ))}
                        </div>

                    </div>


                </div>
            </div>
        </div>
    );
};

export default StudyGuide;