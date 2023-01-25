import React from "react";
import App from "./layouts/App";
import {createRoot} from "react-dom/client";
import {BrowserRouter} from "react-router-dom";


const container = document.querySelector("#app") as HTMLElement;
const root = createRoot(container);

root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
);

