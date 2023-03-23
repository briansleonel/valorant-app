import { Link, Outlet } from "react-router-dom";
import FiltersComponent from "../components/Filter/Filters";
import { Agents } from "./Agents";

export const GameInfo = () => {
    return (
        <>
            <h1>Game Information</h1>
            <Link to={"agents"}>Agents</Link>
            {" - "}
            <Link to={"maps"}>Maps</Link>
            {" - "}
            <Link to={"gamemodes"}>Gamemodes</Link>

            <FiltersComponent />

            <Outlet />
        </>
    );
};
