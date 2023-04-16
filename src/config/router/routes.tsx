import { createBrowserRouter } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import ErrorPage from "../../pages/ErrorPage";
import Home from "../../pages/Home";
import GameInfo from "../../pages/GameInfo";
import AgentsPage from "../../pages/Agents";
import MapsPage from "../../pages/Maps";
import GamemodesPage from "../../pages/GamemodesPage";
import About from "../../pages/About";

const routes = [
	{
		path: "/",
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "",
				element: <Home />,
				index: true,
			},
			{
				path: "gameinfo",
				element: <GameInfo />,
				children: [
					{
						path: "agents",
						element: <AgentsPage />,
					},
					{
						path: "maps",
						element: <MapsPage />,
					},
					{
						path: "gamemodes",
						element: <GamemodesPage />,
					},
				],
			},
			{
				path: "about",
				element: <About />,
			},
		],
	},
];

const router = createBrowserRouter(routes);

export default router;
