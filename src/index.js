import "react-app-polyfill/ie9";
import "react-app-polyfill/ie11";

import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";

import Routes from "./routes";

import "./assets/styles/header.scss";
import "./assets/styles/footer.scss";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
	<Suspense fallback="">
		<Routes />
	</Suspense>
);
