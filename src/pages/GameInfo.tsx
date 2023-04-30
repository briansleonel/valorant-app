import { Link, Outlet } from "react-router-dom";
import FiltersComponent from "../components/Filter/Filters";

const GameInfo = () => {
	return (
		<section className="sm:tw-p-36 tw-py-10 sm:tw-py-12">
			<div className="">
				<h1 className="tw-text-4xl sm:tw-text-7xl font-tungsten-bold tw-text-center tw-text-blue tw-uppercase tw-font-extrabold">
					Game Information
				</h1>
			</div>
			{/**
			<Link to={"agents"}>Agents</Link>
			{" - "}
			<Link to={"maps"}>Maps</Link>
			{" - "}
			<Link to={"gamemodes"}>Gamemodes</Link>
            */}

			<FiltersComponent />

			<Outlet />
		</section>
	);
};

export default GameInfo;
