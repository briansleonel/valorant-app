import { createBrowserRouter } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import ErrorPage from "../../pages/ErrorPage";
import Home from "../../pages/Home/Home";
import GameInfo from "../../pages/GameInfo";
import AgentsPage from "../../pages/Agents/Agents";
import MapsPage from "../../pages/Maps";
import GamemodesPage from "../../pages/GamemodesPage";
import About from "../../pages/About";
import Agent from "../../pages/Agents/Agent";

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
                path: "agents",
                element: <AgentsPage />,
            },
            {
                path: "agents/:agentId",
                element: <Agent />,
            },
            {
                path: "maps",
                element: <MapsPage />,
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
