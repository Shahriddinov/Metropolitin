import React, {useState} from 'react';
import Phones from "../../../assets/images/phones.png"
import Gifts from "../../../assets/images/gifts.svg"
import Search from "./component/search";
import Menus from "./component/menus";
function Header(props) {
    const [click, setClick] = useState(false);
    const toggleIsLoading = () => {

        setClick(current => !current);
    };
    return (
        <div className="header">
            <div className="header_deli">
               <div className="header_deli_info">
                   <div className="header_deli_info_help">Помощь</div>
                   <div className="header_deli_info_help">О нас</div>
                   <img className="header_deli_info_phone" src={Phones} alt="phones"/>
                   <div className="header_deli_info_produc">
                       Товары для животных с бесплатной доставкой
                       <button className="header_deli_info_produc_click">К покупкам</button>
                   </div>
                   <img className="header_deli_info_phone" src={Phones} alt="phones"/>
               </div>

            </div>
            <div className="header_category container">
                <div className="header_category_main">
                    <button onClick={toggleIsLoading} className={click === false && "header_category_main_gallery" ?  "header_category_main_click" : "header_category_main_gallery"}>Главная</button>
                    <button onClick={toggleIsLoading} className={click === true && "header_category_main_gallery" ?  "header_category_main_click" : "header_category_main_gallery"}>Каталог</button>
                </div>
                <div className="header_category_gifts">
                    <img className="header_category_gifts_imges" src={Gifts} alt="gifts"/>
                    <img className="header_category_gifts_imges" src={Gifts} alt="gifts"/>
                    <img className="header_category_gifts_imges" src={Gifts} alt="gifts"/>
                </div>

            </div>
            <Search/>
            <Menus/>
        </div>
    );
}

export default Header;