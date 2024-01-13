import React from 'react';
import Caruosel from "../../components/Caruosel/caruosel";
import Carusel from "../../assets/images/carousel.png"
import ServicesCarousel from "./component/SevicesCarousel/ServicesCarousel";
import ProductSlider from "./component/ProductSlider/productSlider";
import SaleProduct from "./component/SaleProduct/saleProduct";
import GameProduct from "./component/GameProduct/gameProduct";
import FoodProduct from "./component/FoodProduct/foodProduct";
import KitchenProduct from "./component/KitchenProduct/kitchenProduct";
import HouseProduct from "./component/HouseProduct/houseProduct";
function Home(props) {
    return (
        <div>
            <Caruosel/>
            <ServicesCarousel/>
            <ProductSlider/>
            <SaleProduct/>
            <GameProduct/>
            <FoodProduct/>
            <KitchenProduct/>
           <HouseProduct/>
        </div>
    );
}

export default Home;