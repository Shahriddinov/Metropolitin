// index.js

import "react-app-polyfill/ie9";
import "react-app-polyfill/ie11";
import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter

import RoutesContainer from "./routes"; // Assuming this is your main routes component

import "./assets/styles/header.scss";
import "./assets/styles/footer.scss";
import store from "./redux/store";
import { Provider } from "react-redux";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(

        <Suspense fallback={<div>Loading...</div>}>
            <Provider store={store}>
                <RoutesContainer />
            </Provider>
        </Suspense>

);
