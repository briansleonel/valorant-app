import { createBrowserRouter, RouterProvider } from "react-router-dom";
import router from "./config/router/routes";

export const App = () => {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
};
