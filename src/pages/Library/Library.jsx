import React, {useEffect} from 'react';
import "./library.scss"
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Book from "../../assets/images/books.png"
import {getLibraryAll, getOfferLibraryAll} from "../../redux/LibrarySlice";
import PaginationComponent from "../../components/Pagination/Pagination";

const Library = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {libraryItems} = useSelector((state) => state.LibrarySlice);
    const limit = 20;
    const currentPage = 1;
    const totalCount = useSelector((state) => state.LibrarySlice.totalCount);
    const getQueryParams = () => {
        const params = new URLSearchParams(location.search);
        const page = parseInt(params.get('page')) || 1;
        return { page };
    };

    const { page } = getQueryParams();
    const offset = (page - 1) * limit;

    useEffect(() => {
        dispatch(getOfferLibraryAll({ limit, offset }));
    }, [ dispatch, limit, offset, page]);

    const handlePageClick = (pageNumber) => {
        navigate(`?page=${pageNumber}`);
    };
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
                            {libraryItems && libraryItems.map((item, index) => (
                                <div key={index} className="library_bookCard_BookNames">
                                    <img className="library_bookCard_BookNames_bookImg" src={Book} alt=""/>
                                    <span className="library_bookCard_BookNames_NN">{(page - 1) * limit + index + 1}) {item.name}</span>
                                    {/*<a href={file.file} target="_blank" download={file.title}>Yuklab olish</a>*/}
                                  <a href={item.file} target="_blank" download={item.title} className="library_bookCard_BookNames_seemBook">Kitoblar</a>
                                </div>
                            ))}
                            <div className="pagination-container">
                                <PaginationComponent
                                    count={Math.ceil(totalCount / limit)} // Calculate total pages
                                    currentPage={page} // Current page from query params
                                    onPageChange={handlePageClick} />
                            </div>
                        </div>


                    </div>


                </div>
            </div>
        </div>
    );
};

export default Library;