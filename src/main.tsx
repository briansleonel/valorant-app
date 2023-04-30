import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// React Redux
import { Provider } from "react-redux";
import { store } from "./store/store";
import { RouterProvider } from "react-router-dom";
import router from "./config/router/routes";

// Fonts
import "./assets/fonts/Tungsten/Tungsten-Bold.otf";
import "./assets/fonts/Valorant/ValorantFont.ttf";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>,
);
