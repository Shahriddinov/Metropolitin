import React from 'react';
import "./library.scss"
import {Link} from "react-router-dom";
import book from "../../assets/images/books.png"

const Library = () => {
    const AllBook = [
        {img: require("../../assets/images/books.png"), name: "Badiiy adabiyotlar", book: "Kitoblar"},
        {img: require("../../assets/images/books.png"), name: "Xorijiy adabiyotlar", book: "Kitoblar"},
        {img: require("../../assets/images/books.png"), name: "Darsliklar", book: "Kitoblar"},
        {img: require("../../assets/images/books.png"), name: "O’quv qo’llanmalar", book: "Kitoblar"},
        {img: require("../../assets/images/books.png"), name: "Asosiy qo'llanmalar", book: "Kitoblar"},
        {img: require("../../assets/images/books.png"), name: "Asosiy qo'llanmalar", book: "Kitoblar"},
        {img: require("../../assets/images/books.png"), name: "Asosiy qo'llanmalar", book: "Kitoblar"}
    ]
    return (
        <div className="backgroundPage">
            <div style={{padding: " 20px 60px"}}>
                <div className="blur">
                    <div className="library">
                        <div className="library_head">
                            <Link style={{textDecoration: "none", color: "#8D8484"}} to="/about">
                                <div className="library_head_homes">Bosh saxifaga qaytish</div>
                            </Link>
                        </div>
                        <div className="library_electron">Metropoliten elektron kutubxonasi</div>
                        <div  className="library_bookCard">
                            {AllBook.map((item, index) => (
                                <div key={index} className="library_bookCard_BookNames">
                                    <img className="library_bookCard_BookNames_bookImg" src={item.img} alt=""/>
                                    <span className="library_bookCard_BookNames_NN">{item.name}</span>
                                   <Link to="/library/guide"> <button className="library_bookCard_BookNames_seemBook">{item.book}</button></Link>
                                </div>
                            ))}
                        </div>

                    </div>


                </div>
            </div>
        </div>
    );
};

export default Library;