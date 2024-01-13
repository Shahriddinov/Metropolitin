import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import App from "./App";
import ScrollTop from "./hoc/ScrollTop";
import Spinner from "./components/Spinner";
import Layout from "./components/Layout/Layout";

const Home = lazy(() => import("./page/Home/Home"));

const NotFound = lazy(() => import("./page/404"));

const routes = [
    { path: "", element: Home },

];

const RoutesContainer = () => (
    <Router >
            <Layout>
                <Suspense fallback={<Spinner position="full" />}>
                    <Routes>
                        {routes.map((route, key) => {
                            const RouteComponent = ScrollTop(route.element);
                            return <Route key={key} path={route.path} element={<RouteComponent />} />;
                        })}
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Suspense>
            </Layout>
    </Router>
);

export default RoutesContainer;
