import { RouteObject, createBrowserRouter } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import ErrorPage from "../../pages/ErrorPage";
import Home from "../../pages/Home";
import AgentsPage from "../../pages/Agents/AgentsPage";
import MapsPage from "../../pages/MapsPage";
import GamemodesPage from "../../pages/GamemodesPage";
import About from "../../pages/About";
import AgentPage from "../../pages/Agents/AgentPage";
import WeaponsPage from "../../pages/WeaponsPage";
import PageNotFound from "../../pages/PageNotFound";

const routes: Array<RouteObject> = [
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
                path: "agents",
                element: <AgentsPage />,
            },
            {
                path: "agents/:agentId",
                element: <AgentPage />,
            },
            {
                path: "maps",
                element: <MapsPage />,
            },
            {
                path: "gamemodes",
                element: <GamemodesPage />,
            },
            {
                path: "weapons",
                element: <WeaponsPage />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "*",
                element: <PageNotFound />,
            },
        ],
    },
];

const router = createBrowserRouter(routes);

export default router;
