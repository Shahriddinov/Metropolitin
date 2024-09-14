import React, {useEffect} from 'react';
import "./library.scss"
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Book from "../../assets/images/books.png"
import {getLibraryAll} from "../../redux/LibrarySlice";

const Library = () => {
    const dispatch = useDispatch();
    const {libraryItems} = useSelector((state) => state.LibrarySlice);

    useEffect(() => {
        dispatch(getLibraryAll());
    }, [ dispatch]);


    return (
        <div className="backgroundPage">
            <div style={{padding: " 20px 60px"}}>
                <div className="blur">
                    <div className="library">
                        <div className="library_head">
                            <Link style={{textDecoration: "none", color: "#8D8484"}} to="/about">
                                <div className="library_head_homes">Bosh sahifaga qaytish</div>
                            </Link>
                        </div>
                        <div className="library_electron">Metropoliten elektron kutubxonasi</div>
                        <div  className="library_bookCard">
                            {libraryItems.map((item, index) => (
                                <div key={index} className="library_bookCard_BookNames">
                                    <img className="library_bookCard_BookNames_bookImg" src={Book} alt=""/>
                                    <span className="library_bookCard_BookNames_NN">{index+1}) {item.name}</span>
                                    {/*<a href={file.file} target="_blank" download={file.title}>Yuklab olish</a>*/}
                                  <a href={item.file} target="_blank" download={item.title} className="library_bookCard_BookNames_seemBook">Kitoblar</a>
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