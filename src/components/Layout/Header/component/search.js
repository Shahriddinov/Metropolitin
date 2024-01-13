import React from 'react';
import "./search.scss"
import ic_hamburger from "../../../../assets/images/icon/ic_hamburger.svg"
import ic_search from "../../../../assets/images/icon/ic_search.svg"
import ic_language from "../../../../assets/images/icon/ic_language.svg"
import ic_korzina from "../../../../assets/images/icon/ic_korzina.svg"
import ic_user from "../../../../assets/images/icon/ic_user.svg"
import ic_follow from "../../../../assets/images/icon/ic_follow.svg"
import ic_call from "../../../../assets/images/icon/ic_call.svg"
function Search(props) {
    return (
        <div className="search container">
            <div className="search_s">S</div>
            <div className="search_filter">
                <img className="search_filter_burger" src={ic_hamburger} alt="hamburger"/>
                <input className="search_filter_inputs" type="text" placeholder="Поиск товаров"/>
                <img className="search_filter_search" src={ic_search} alt="search"/>
            </div>
           {/*<div className="search_social">*/}
            <img className="search_media" src={ic_user} alt="user"/>

            <img className="search_media none" src={ic_language} alt="language"/>
              <div className="search_korzina">
                  <span className="search_korzina_value">0</span>
                  <img className="search_korzina_social" src={ic_korzina} alt="korzina"/>
              </div>
               <img className="search_media none" src={ic_follow} alt="follow"/>
               <img className="search_call" src={ic_call} alt="call"/>
           {/*</div>*/}

          
        </div>
    );
}

export default Search;