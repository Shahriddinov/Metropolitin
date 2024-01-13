import React, {Suspense} from 'react';
import ReactDOM, {createRoot} from 'react-dom/client';
// import App from './App';
import "../src/assets/style/global.scss";
import "../src/assets/style/Header.scss";
import "../src/assets/style/Footer.scss";   
import Routes from "./router"
import Provider from "react-redux/es/components/Provider";

import "./index.css";



const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    // <Provider {...{ store }}>
        <Suspense fallback="">
            {/*<I18nextProvider i18n={i18n()}>*/}
                <Routes />
            {/*</I18nextProvider>*/}
        </Suspense>
    // </Provider>


)
