import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import ErrorPage from "./pages/ErrorPage";
import GameInfo from "./pages/GameInfo";
import About from "./pages/About";
import Home from "./pages/Home";
import AgentsPage from "./pages/Agents";
import MapsPage from "./pages/Maps";
import GamemodesPage from "./pages/GamemodesPage";

const router = createBrowserRouter([
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
]);

export const App = () => {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
};

/*
function App() {
  const distpatch = useAppDispatch();

  const counter = useAppSelector(state => state.counter.value)

  const handleIncrementCounter = () => {
    distpatch(increment())
  }

  return (
    <div className="App">
      <div className="card">
        <button onClick={() => handleIncrementCounter()}>
          {`count is ${counter}`}
        </button>
      </div>
    </div>
  )
}

export default App
*/
